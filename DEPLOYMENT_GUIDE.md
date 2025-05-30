# ALUNA Architecture - GitHub Pages Deployment Guide

## Overview
This guide will help you deploy the ALUNA Implementation Architecture dashboard to GitHub Pages, making it accessible to your colleagues on any device.

## Prerequisites
- GitHub account
- Git installed on your computer
- Node.js 18+ installed

## Step-by-Step Deployment

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New Repository" (green button)
3. Name your repository: `aluna-architecture`
4. Set it to **Public** (required for GitHub Pages)
5. Check "Add a README file"
6. Click "Create repository"

### 2. Upload Your Project

#### Option A: Using GitHub Web Interface
1. In your new repository, click "uploading an existing file"
2. Drag and drop all project files except `node_modules`
3. Write commit message: "Initial ALUNA architecture upload"
4. Click "Commit changes"

#### Option B: Using Git Commands
```bash
# Clone your repository
git clone https://github.com/yourusername/aluna-architecture.git
cd aluna-architecture

# Copy all project files to this directory
# (excluding node_modules, .git folders)

# Add and commit files
git add .
git commit -m "Initial ALUNA architecture upload"
git push origin main
```

### 3. Configure GitHub Pages

1. In your repository, go to **Settings** tab
2. Scroll down to **Pages** section (left sidebar)
3. Under "Source", select **GitHub Actions**
4. The deployment workflow will automatically run

### 4. Update Package Configuration

Replace your current `package.json` with the GitHub Pages optimized version:

```bash
# In your project directory
cp package-gh-pages.json package.json
cp vite.config.gh-pages.ts vite.config.ts
```

Commit these changes:
```bash
git add package.json vite.config.ts
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 5. Monitor Deployment

1. Go to your repository's **Actions** tab
2. Watch the deployment process in real-time
3. Once complete (green checkmark), your site will be available at:
   `https://yourusername.github.io/aluna-architecture/`

## Custom Domain (Optional)

To use a custom domain like `aluna-architecture.com`:

1. Purchase domain from registrar (GoDaddy, Namecheap, etc.)
2. In repository Settings > Pages, add your custom domain
3. Update DNS records at your registrar:
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

## Mobile Testing

Test your deployed dashboard on various devices:

### Desktop/Laptop Testing
- Open in Chrome, Firefox, Safari, Edge
- Test different window sizes by resizing browser
- Verify all three columns display properly

### Mobile Testing
- Use browser developer tools (F12 → Device toolbar)
- Test on actual phones/tablets
- Verify touch interactions work smoothly
- Check that language flags wrap properly

### Tablet Testing
- Verify two-column layout on tablets
- Test landscape and portrait orientations
- Ensure brain-chip visualizations appear/hide correctly

## Sharing with Colleagues

### QR Code for Easy Access
Generate a QR code pointing to your site for easy mobile access:
1. Visit [qr-code-generator.com](https://www.qr-code-generator.com)
2. Enter your GitHub Pages URL
3. Download and share the QR code

### Email Template
```
Subject: ALUNA Architecture Dashboard - Now Live

Hi [Colleague],

I'm excited to share the ALUNA Implementation Architecture dashboard:
🔗 https://yourusername.github.io/aluna-architecture/

This interactive visualization showcases our AI system architecture:
✓ Works on desktop, laptop, and mobile devices
✓ Supports 6 languages (EN, DE, FR, ES, JP, AR)
✓ Real-time system metrics and status indicators
✓ Futuristic UI with human-AI interface visualization

Best experienced on larger screens but fully functional on mobile.

Please let me know your feedback!

Best regards,
[Your Name]
```

## Troubleshooting

### Common Issues

**Build Fails**
- Check that all dependencies are listed in package.json
- Ensure Node.js version compatibility (18+)
- Review error logs in GitHub Actions tab

**Site Not Loading**
- Verify GitHub Pages is enabled in repository settings
- Check that repository is public
- Wait 5-10 minutes for initial deployment

**Mobile Display Issues**
- Clear browser cache
- Test in private/incognito mode
- Verify responsive CSS classes are applied

**Performance Issues**
- GitHub Pages includes global CDN
- Images and assets are automatically optimized
- Consider enabling browser caching headers

### Getting Help

1. Check GitHub Actions logs for detailed error messages
2. Review browser console for JavaScript errors
3. Test locally first: `npm run dev`
4. Contact GitHub Support for platform-specific issues

## Security & Privacy

- All code is publicly visible on GitHub
- No sensitive data should be committed to the repository
- GitHub Pages serves content over HTTPS automatically
- Consider adding privacy policy if collecting user data

## Maintenance

### Regular Updates
```bash
# Pull latest changes
git pull origin main

# Make your updates
# ...

# Commit and push
git add .
git commit -m "Update architecture visualization"
git push origin main
```

### Monitor Performance
- Use Google PageSpeed Insights to check performance
- Monitor GitHub Pages usage in repository insights
- Review user feedback and analytics (if implemented)

---

**Congratulations!** Your ALUNA Architecture dashboard is now live and accessible to colleagues worldwide. The responsive design ensures optimal viewing across all devices, from desktop workstations to mobile phones.