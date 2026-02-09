/**
 * Azure Function: Get SharePoint Folders and Files
 * Replicates the rodwell.house PHP logic
 */

module.exports = async function (context, req) {
  context.log('Folders API triggered');

  // Get environment variables (set in Azure Static Web Apps Configuration)
  const AZURE_TENANT_ID = process.env.AZURE_TENANT_ID;
  const AZURE_CLIENT_ID = process.env.AZURE_CLIENT_ID;
  const AZURE_CLIENT_SECRET = process.env.AZURE_CLIENT_SECRET;
  const SHAREPOINT_FOLDER_PATH = process.env.SHAREPOINT_FOLDER_PATH || '/sites/WebDocuments/Shared Documents/General/California/Live';
  const SHAREPOINT_BASE_URL = 'https://grahamcare.sharepoint.com/sites/WebDocuments';

  // Check for required environment variables
  if (!AZURE_TENANT_ID || !AZURE_CLIENT_ID || !AZURE_CLIENT_SECRET) {
    context.res = {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: 'Configuration error',
        message: 'Azure AD credentials not configured. Please set AZURE_TENANT_ID, AZURE_CLIENT_ID, and AZURE_CLIENT_SECRET in Azure Static Web Apps Configuration.'
      })
    };
    return;
  }

  try {
    // Step 1: Get Bearer Token (matching PHP getBearerToken())
    context.log('Getting bearer token...');
    const accessToken = await getBearerToken(AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET);
    context.log('Got bearer token');

    // Step 2: Get list of folders
    context.log('Fetching folders from:', SHAREPOINT_FOLDER_PATH);
    const folders = await getListOfFolders(accessToken, SHAREPOINT_BASE_URL, SHAREPOINT_FOLDER_PATH);
    context.log(`Found ${folders.length} folders`);

    // Step 3: For each folder, get list of files
    const foldersWithFiles = [];
    for (const folder of folders) {
      const files = await getListOfFiles(accessToken, SHAREPOINT_BASE_URL, folder.ServerRelativeUrl);
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
    context.log(`Returning ${foldersWithFiles.length} folders with ${totalFiles} files`);

    context.res = {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        folders: foldersWithFiles,
        accessToken: accessToken,
        timestamp: new Date().toISOString()
      })
    };

  } catch (error) {
    context.log.error('Error:', error.message);
    context.res = {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: 'Failed to fetch documents',
        message: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};

/**
 * Get Bearer Token - Matching PHP getBearerToken() function
 */
async function getBearerToken(tenantId, clientId, clientSecret) {
  const bearerUrl = `https://accounts.accesscontrol.windows.net/${tenantId}/tokens/OAuth/2`;
  const resource = `00000003-0000-0ff1-ce00-000000000000/grahamcare.sharepoint.com@${tenantId}`;
  const fullClientId = `${clientId}@${tenantId}`;

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', fullClientId);
  params.append('client_secret', clientSecret);
  params.append('resource', resource);

  const response = await fetch(bearerUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Token request failed: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  return data.access_token;
}

/**
 * Get List of Folders - Matching PHP getListOfFolders()
 */
async function getListOfFolders(accessToken, baseUrl, folderPath) {
  const encodedPath = encodeURIComponent(folderPath);
  const url = `${baseUrl}/_api/web/GetFolderByServerRelativeUrl('${encodedPath}')/Folders?$orderby=Name`;

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
  return data.value || [];
}

/**
 * Get List of Files - Matching PHP getListOfFiles()
 */
async function getListOfFiles(accessToken, baseUrl, folderServerRelativeUrl) {
  const encodedPath = encodeURIComponent(folderServerRelativeUrl);
  const url = `${baseUrl}/_api/web/GetFolderByServerRelativeUrl('${encodedPath}')/Files?$orderby=Name`;

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



