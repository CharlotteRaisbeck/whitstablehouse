# GitHub Deployment Guide

## Step 1: Initialize Git Repository (if not already done)

```bash
cd "C:\Users\will\Downloads\California House\california-house"
git init
```

## Step 2: Create .gitignore (if not exists)

The `.gitignore` file should already exist and include:
- `node_modules/`
- `build/`
- `.env`
- `sharepoint.env`
- `*.log`

## Step 3: Add All Files to Git

```bash
git add .
```

## Step 4: Make Initial Commit

```bash
git commit -m "Initial commit - California House website"
```

## Step 5: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `california-house` (or your preferred name)
4. Description: "California House care home website"
5. Choose Public or Private
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 6: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/california-house.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 7: Deploy to GitHub Pages

### Option A: Using gh-pages package (Recommended)

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**:
Add these lines to the `scripts` section:
```json
"homepage": "https://YOUR_USERNAME.github.io/california-house",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

3. **Deploy**:
```bash
npm run deploy
```

This will:
- Build your project
- Create a `gh-pages` branch
- Push it to GitHub
- Your site will be live at: `https://YOUR_USERNAME.github.io/california-house`

### Option B: Using GitHub Actions (Alternative)

1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

2. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` → `/ (root)`
   - Click Save

## Step 8: Update Site After Changes

Whenever you make changes:

```bash
git add .
git commit -m "Description of changes"
git push origin main
npm run deploy
```

## Important Notes

1. **Environment Variables**: If you need environment variables (like `REACT_APP_API_URL`), you'll need to set them in your build process or use GitHub Secrets with Actions.

2. **Router Issues**: GitHub Pages serves from a subdirectory. The `netlify.toml` redirects won't work. You may need to add a `404.html` file that redirects to `index.html` for client-side routing to work properly.

3. **Custom Domain**: You can add a custom domain in GitHub Pages settings.

4. **Backend**: The SharePoint backend server cannot be deployed on GitHub Pages (it's static hosting only). Deploy it separately on Railway, Render, or Heroku.

## Troubleshooting

- **404 errors on routes**: Add a `404.html` file in `public/` that redirects to `index.html`
- **Build fails**: Check that all dependencies are in `package.json`
- **Images not loading**: Ensure image paths start with `/` (e.g., `/hero-image.jpg`)

