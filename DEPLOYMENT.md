# Deployment Guide for California House Website

## Frontend Deployment (React App)

### Option 1: Netlify (Recommended)

1. **Build the project locally** (optional, Netlify can do this):
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository (GitHub/GitLab/Bitbucket) OR drag and drop the `build` folder
   - If using Git:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Click "Deploy site"

3. **Environment Variables** (if needed):
   - Go to Site settings → Environment variables
   - Add `REACT_APP_API_URL` if your backend is on a different domain

### Option 2: Vercel

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

   Or use the Vercel dashboard at [vercel.com](https://vercel.com)

### Option 3: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**:
   ```json
   "homepage": "https://yourusername.github.io/california-house",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## Backend Deployment (SharePoint Proxy Server)

The backend server (`server/index.js`) needs to be deployed separately. Options:

### Option 1: Railway
- Go to [railway.app](https://railway.app)
- New Project → Deploy from GitHub
- Select your repository
- Set environment variables from `sharepoint.env`
- Railway will auto-detect Node.js and deploy

### Option 2: Render
- Go to [render.com](https://render.com)
- New → Web Service
- Connect your repository
- Build command: `cd server && npm install`
- Start command: `node server/index.js`
- Add environment variables from `sharepoint.env`

### Option 3: Heroku
- Install Heroku CLI
- Create app: `heroku create your-app-name`
- Set environment variables: `heroku config:set AZURE_TENANT_ID=...` (etc.)
- Deploy: `git push heroku main`

## Important Notes

1. **Update API URL**: After deploying the backend, update `REACT_APP_API_URL` in your frontend environment variables to point to your backend URL.

2. **CORS**: Make sure your backend allows requests from your frontend domain.

3. **Environment Variables**: Never commit `sharepoint.env` to Git. Use your hosting platform's environment variable settings.

4. **Build**: Always test the build locally first:
   ```bash
   npm run build
   npm install -g serve
   serve -s build
   ```

## Quick Start (Netlify)

1. Build: `npm run build`
2. Go to netlify.com
3. Drag and drop the `build` folder
4. Done! Your site is live.




