# Azure Static Web Apps Deployment Guide

## Overview

This project is configured for Azure Static Web Apps with:
- **Frontend**: React app (builds to `/build`)
- **Backend**: Azure Functions API (in `/api` folder)

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `california-house`
3. Keep it public or private as preferred
4. Don't initialize with README (we already have files)

## Step 2: Push Code to GitHub

Run these commands in your terminal:

```bash
cd california-house
git init
git add .
git commit -m "Initial commit - California House website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/california-house.git
git push -u origin main
```

## Step 3: Create Azure Static Web App

1. Go to https://portal.azure.com
2. Click "Create a resource"
3. Search for "Static Web App" and select it
4. Click "Create"

### Configuration:
- **Subscription**: Select your subscription
- **Resource Group**: Create new or select existing
- **Name**: `california-house`
- **Plan type**: Free
- **Region**: Choose nearest to your users
- **Source**: GitHub
- **GitHub Account**: Sign in and authorize
- **Organization**: Your GitHub username
- **Repository**: `california-house`
- **Branch**: `main`

### Build Details:
- **Build Presets**: React
- **App location**: `/`
- **Api location**: `api`
- **Output location**: `build`

5. Click "Review + create" then "Create"

## Step 4: Configure Environment Variables

After the Static Web App is created:

1. Go to your Static Web App in Azure Portal
2. Click "Configuration" in the left menu
3. Add these Application Settings:

| Name | Value |
|------|-------|
| `AZURE_TENANT_ID` | Your Azure AD tenant ID |
| `AZURE_CLIENT_ID` | Your Azure AD app client ID |
| `AZURE_CLIENT_SECRET` | Your Azure AD app client secret |
| `SHAREPOINT_FOLDER_PATH` | Your SharePoint folder path (e.g., `/sites/WebDocuments/Shared Documents/General/YourFolder/Live`) |

> **Note:** Contact your administrator for the correct values for these environment variables.

4. Click "Save"

## Step 5: Verify Deployment

1. After deployment completes, find your app URL in Azure Portal (Overview page)
2. Visit the URL - your site should be live!
3. Test the Documents page to verify SharePoint integration works

## Automatic Deployments

Azure will automatically create a GitHub Actions workflow file. Any push to `main` branch will trigger a new deployment.

## Troubleshooting

### API not working
- Check Configuration in Azure Portal - ensure all 4 environment variables are set
- Check the Function logs: Static Web App > Functions > Select function > Monitor

### Build failing
- Check GitHub Actions tab in your repository
- Common issues: missing dependencies, TypeScript errors

### SharePoint access denied
- Verify the Azure AD app has permissions to access SharePoint
- Check the SHAREPOINT_FOLDER_PATH is correct

## Local Development

To run locally:

1. Start the backend: `npm run server` (uses Express server on port 3002)
2. Start the frontend: `npm start` (runs React on port 3000)

The local setup uses `server/index.js` for development.
The Azure deployment uses `api/` folder with Azure Functions.

