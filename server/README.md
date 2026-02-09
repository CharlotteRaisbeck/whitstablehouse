# Backend Proxy Server

A simple Express server that acts as a proxy to fetch SharePoint folders without requiring authentication on the frontend.

## Quick Start

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Configure credentials** in `sharepoint.env`:
   ```env
   SHAREPOINT_SITE=https://grahamcare.sharepoint.com
   SHAREPOINT_SITE_PATH=/sites/WebDocuments
   SHAREPOINT_LIBRARY=Shared Documents
   
   AZURE_TENANT_ID=your-tenant-id
   AZURE_CLIENT_ID=your-client-id
   AZURE_CLIENT_SECRET=your-client-secret
   
   PORT=3001
   ```

3. **Start the server**:
   ```bash
   npm run server
   ```

## API Endpoints

### GET /api/folders

Fetches folders from SharePoint and returns them as JSON.

**Response:**
```json
{
  "folders": [
    {
      "name": "Folder Name",
      "url": "https://grahamcare.sharepoint.com/..."
    }
  ],
  "count": 5,
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### GET /api/health

Health check endpoint to verify the server is running.

**Response:**
```json
{
  "status": "ok",
  "message": "Backend proxy server is running",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## How It Works

1. **Authentication**: Uses Azure AD client credentials flow to get an access token
2. **Site Discovery**: Uses Microsoft Graph API to find the SharePoint site
3. **Folder Fetching**: Retrieves folders from the default document library
4. **Response**: Returns folders as a clean JSON array

## Troubleshooting

- **Check server logs**: The server logs detailed information about each request
- **Verify credentials**: Ensure Azure AD credentials are correct in `sharepoint.env`
- **Check permissions**: The Azure AD app needs `Sites.Read.All` permission
- **Test health endpoint**: Visit `http://localhost:3001/api/health` to verify the server is running




