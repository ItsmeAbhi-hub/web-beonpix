# GitHub Pages Deployment Guide

## Steps to Deploy Your React App to GitHub Pages

### 1. Push to GitHub
```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 2. Enable GitHub Pages
1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**

### 3. Automatic Deployment
- The GitHub Actions workflow will automatically build and deploy your app
- Your site will be available at: `https://yourusername.github.io/beonpix/`

### 4. Manual Deployment (Alternative)
If you prefer manual deployment:
```bash
npm run build
npm run deploy
```

## Important Notes

- **Base URL**: Set to `/beonpix/` in vite.config.js
- **Routing**: Using HashRouter for GitHub Pages compatibility
- **URLs**: Your routes will use hash routing (e.g., `#/about`)
- **Assets**: All assets are properly configured for the subdirectory

## Troubleshooting

If you see a blank page:
1. Check browser console for errors
2. Verify the base URL matches your repository name
3. Ensure all assets are loading correctly
4. Wait a few minutes for GitHub Pages to update

## Local Testing
To test the production build locally:
```bash
npm run build
npm run preview
```