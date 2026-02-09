/**
 * SharePoint Documents API Server
 * Replicates the PHP logic from rodwell.house/documents
 */

const express = require('express');
const cors = require('cors');
const path = require('path');

// Load environment variables from sharepoint.env
require('dotenv').config({ path: path.join(__dirname, '..', 'sharepoint.env') });

const app = express();
const PORT = process.env.PORT || 3002;

// Enable CORS for React frontend
app.use(cors());
app.use(express.json());

// SharePoint configuration (matching PHP)
const SHAREPOINT_BASE_URL = 'https://grahamcare.sharepoint.com/sites/WebDocuments';
const FOLDER_PATH = process.env.SHAREPOINT_FOLDER_PATH || '/sites/WebDocuments/Shared Documents/General/California/Live';

/**
 * Get Bearer Token - Matching PHP getBearerToken() function exactly
 */
async function getBearerToken() {
  const tenantId = process.env.AZURE_TENANT_ID;
  const clientId = process.env.AZURE_CLIENT_ID;
  const clientSecret = process.env.AZURE_CLIENT_SECRET;

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error('Missing Azure AD credentials in sharepoint.env');
  }

  // Build the token request URL and parameters (matching PHP getBearerToken pattern)
  const bearerUrl = `https://accounts.accesscontrol.windows.net/${tenantId}/tokens/OAuth/2`;
  const resource = `00000003-0000-0ff1-ce00-000000000000/grahamcare.sharepoint.com@${tenantId}`;
  const fullClientId = `${clientId}@${tenantId}`;

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', fullClientId);
  params.append('client_secret', clientSecret);
  params.append('resource', resource);

  console.log('Getting bearer token...');
  
  const response = await fetch(bearerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Token request failed: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  console.log('✓ Got bearer token');
  return data.access_token;
}

/**
 * Get List of Folders - Matching PHP getListOfFolders() function
 * PHP: $url = "https://grahamcare.sharepoint.com/sites/WebDocuments/_api/web/GetFolderByServerRelativeUrl('/sites/WebDocuments/Shared%20Documents/General/Rodwell/Live')/Folders?&$orderby=Name";
 */
async function getListOfFolders(accessToken) {
  const encodedPath = encodeURIComponent(FOLDER_PATH);
  const url = `${SHAREPOINT_BASE_URL}/_api/web/GetFolderByServerRelativeUrl('${encodedPath}')/Folders?$orderby=Name`;

  console.log('Fetching folders from:', url);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Length': '0',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to get folders: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  console.log(`✓ Found ${data.value?.length || 0} folders`);
  return data.value || [];
}

/**
 * Get List of Files - Matching PHP getListOfFiles() function
 * PHP: $url = "https://grahamcare.sharepoint.com/sites/WebDocuments/_api/web/GetFolderByServerRelativeUrl('".rawurlencode($folderUrl)."')/Files?&$orderby=Name";
 */
async function getListOfFiles(accessToken, folderServerRelativeUrl) {
  const encodedPath = encodeURIComponent(folderServerRelativeUrl);
  const url = `${SHAREPOINT_BASE_URL}/_api/web/GetFolderByServerRelativeUrl('${encodedPath}')/Files?$orderby=Name`;

  console.log('Fetching files from:', folderServerRelativeUrl);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Length': '0',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to get files: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  return data.value || [];
}

/**
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    folderPath: FOLDER_PATH,
    timestamp: new Date().toISOString()
  });
});

/**
 * Main API endpoint - Returns folders with files and access token
 * Matches the PHP foreach loop that gets folders then files for each
 */
app.get('/api/folders', async (req, res) => {
  try {
    console.log('\n=== Fetching documents ===');
    console.log('Folder path:', FOLDER_PATH);

    // Step 1: Get bearer token (matching PHP getBearerToken())
    const accessToken = await getBearerToken();

    // Step 2: Get list of folders (matching PHP getListOfFolders())
    const folders = await getListOfFolders(accessToken);

    // Step 3: For each folder, get list of files (matching PHP foreach loop)
    const foldersWithFiles = [];

    for (const folder of folders) {
      const files = await getListOfFiles(accessToken, folder.ServerRelativeUrl);
      
      foldersWithFiles.push({
        name: folder.Name,
        serverRelativeUrl: folder.ServerRelativeUrl,
        files: files.map(file => ({
          name: file.Name,
          serverRelativeUrl: folder.ServerRelativeUrl,
        })),
      });
    }

    const totalFiles = foldersWithFiles.reduce((sum, f) => sum + f.files.length, 0);
    console.log(`✓ Returning ${foldersWithFiles.length} folders with ${totalFiles} files\n`);

    // Return folders, files, and token (token needed for frontend downloads)
    res.json({
      folders: foldersWithFiles,
      accessToken: accessToken,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({
      error: 'Failed to fetch documents',
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`\n=================================`);
  console.log(`SharePoint Documents API Server`);
  console.log(`=================================`);
  console.log(`Port: ${PORT}`);
  console.log(`Folder: ${FOLDER_PATH}`);
  console.log(`Health: http://localhost:${PORT}/api/health`);
  console.log(`API:    http://localhost:${PORT}/api/folders`);
  console.log(`=================================\n`);
});
