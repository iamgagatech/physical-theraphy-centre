# Professional Deployment Guide

## Physical Therapy Centre Website - Deployment Instructions

This guide covers professional deployment to **GitHub Pages** (free, static hosting) and **Vercel** (recommended for production).

---

## Table of Contents

1. [Vercel Deployment (Recommended)](#vercel-deployment-recommended)
2. [GitHub Pages Deployment](#github-pages-deployment)
3. [Environment Variables Setup](#environment-variables-setup)
4. [Domain Configuration](#domain-configuration)
5. [EmailJS Configuration](#emailjs-configuration)
6. [Troubleshooting](#troubleshooting)

---

## Vercel Deployment (Recommended)

Vercel is the **professional choice** for React applications due to its:
- Automatic HTTPS
- Global CDN
- Serverless functions support
- Preview deployments on pull requests
- Excellent performance for React apps

### Step 1: Create a Git Repository

```bash
# If you haven't already
git init
git add .
git commit -m "Initial commit"
git branch -M main

# Create a GitHub repository at https://github.com/new
# Then push your code:
git remote add origin https://github.com/YOUR_USERNAME/physical-therapy-centre.git
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI (Recommended for developers)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up "physical-therapy-centre"? Yes
# - Which scope? [Select your account]
# - Link to existing project? No
# - Root directory? ./
# - Want to modify these settings? No

# For production deployment
vercel --prod
```

#### Option B: Using GitHub Integration (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click **"Add New Project"**
3. Import your GitHub repository: `YOUR_USERNAME/physical-therapy-centre`
4. Configure settings:
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**

Vercel will automatically:
- Build your project on every push to main
- Create preview deployments for pull requests
- Provide a production URL

### Step 3: Add Environment Variables

In Vercel Dashboard:
1. Go to your project → Settings → Environment Variables
2. Add the following:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Click **Save** and redeploy

---

## GitHub Pages Deployment

GitHub Pages is **free static hosting** but requires some configuration for Single Page Applications (SPAs) like React.

### Important: SPAs and GitHub Pages

React apps use client-side routing. On GitHub Pages, direct navigation to routes like `/booking` will return a 404 error because GitHub Pages looks for an actual `booking.html` file. We solve this with a redirect script.

### Step 1: Configure vite.config.ts

The vite.config.ts is already configured for both GitHub Pages and Vercel.

### Step 2: Configure Repository Settings

1. Go to your GitHub repository → Settings → Pages
2. **Source:** Deploy from a branch
3. **Branch:** gh-pages /root (this will be created by the workflow)

### Step 3: Enable GitHub Actions

The deployment workflow is already set up in `.github/workflows/deploy.yml`. 

**Required: Update the repository name**

Open `.github/workflows/deploy.yml` and replace:
```yaml
# Line 37: Update this with your actual GitHub username and repo name
const base = '/physical-therapy-centre/';
```

With your actual repository name:
```yaml
const base = '/your-repo-name/';
```

### Step 4: Push to Trigger Deployment

```bash
git add .
git commit -m "Setup deployment"
git push origin main
```

GitHub Actions will automatically:
- Build your project
- Configure base paths for GitHub Pages
- Deploy to the `gh-pages` branch
- Set up 404 redirect for SPA routing

### Step 5: Access Your Site

After deployment completes (2-3 minutes):
```
https://YOUR_USERNAME.github.io/physical-therapy-centre/
```

---

## Environment Variables Setup

### For EmailJS (Required)

You must set up EmailJS to receive booking emails:

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create an Email Service (Gmail recommended)
3. Create an Email Template with these variables:
   ```
   {{full_name}}
   {{email}}
   {{phone}}
   {{service}}
   {{preferred_date}}
   {{message}}
   ```
4. Copy your Service ID, Template ID, and Public Key

### For Vercel:
- Go to Project → Settings → Environment Variables
- Add the three EmailJS variables
- Redeploy

### For GitHub Pages:
Create a `.env` file locally:
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

⚠️ **Important:** Since GitHub Pages is static, environment variables are embedded at build time. **Never commit your .env file.** Instead, set secrets in GitHub:

1. Go to repository → Settings → Secrets → Actions
2. Add repository secrets:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

The GitHub workflow is already configured to use these secrets.

---

## Domain Configuration

### Custom Domain on Vercel (Recommended)

1. Buy a domain (e.g., ptcentrelagos.com)
2. In Vercel Dashboard:
   - Go to Project → Settings → Domains
   - Add your domain
   - Follow DNS configuration instructions

3. Vercel automatically provisions SSL certificates

### Custom Domain on GitHub Pages

1. Add a CNAME file to your repository root:
   ```
   echo "www.ptcentrelagos.com" > CNAME
   ```

2. Configure DNS with your domain provider:
   ```
   CNAME www.ptcentrelagos.com YOUR_USERNAME.github.io
   A     @                     185.199.108.153
   A     @                     185.199.109.153
   A     @                     185.199.110.153
   A     @                     185.199.111.153
   ```

3. In GitHub repository → Settings → Pages → Custom domain

---

## EmailJS Configuration

### Setting Up Your Email Template

In EmailJS Dashboard:

1. Go to Email Templates → Create New Template
2. Use this template structure:

```html
<h2>New Booking Request - Physical Therapy Centre</h2>
<p><strong>From:</strong> {{full_name}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Service:</strong> {{service}}</p>
<p><strong>Preferred Date:</strong> {{preferred_date}}</p>
<p><strong>Message:</strong> {{message}}</p>
<hr>
<p><em>Submitted at: {{submission_time}}</em></p>
```

3. Set the recipient email to your clinic's admin email
4. Save and note the Template ID

---

## Troubleshooting

### Vercel Issues

**Problem:** 404 errors on page refresh
**Solution:** Already configured in `vercel.json`. If issues persist, ensure you're not using the browser's address bar to navigate directly to routes during development.

**Problem:** Environment variables not working
**Solution:** 
1. Check that variables start with `VITE_`
2. Redeploy after adding variables
3. Access using `import.meta.env.VITE_VARIABLE_NAME`

### GitHub Pages Issues

**Problem:** Blank page after deployment
**Solution:** 
1. Check browser console for 404 errors
2. Ensure `base` in vite.config.ts matches your repository name
3. Verify assets are loading from correct path

**Problem:** 404 on refresh or direct link
**Solution:** 
1. The 404.html redirect script should handle this
2. If not working, check that 404.html is in the root of gh-pages branch
3. Test navigation with the GitHub Pages URL, not localhost

**Problem:** Styles not loading
**Solution:** Check that `base` configuration matches your repository name exactly (case-sensitive)

### EmailJS Issues

**Problem:** Emails not sending
**Solution:**
1. Check browser console for errors
2. Verify all three IDs are correct
3. Ensure email service is active in EmailJS dashboard
4. Check spam folders
5. Verify template variables match exactly (case-sensitive)

**Problem:** "EmailJS SDK not loaded" error
**Solution:** 
```bash
npm install @emailjs/browser
```

---

## Performance Optimization

### For Production

1. **Enable Analytics:**
   - Add Google Analytics 4 tracking ID
   - Set up Google Search Console

2. **Image Optimization:**
   - Replace Unsplash URLs with WebP/AVIF formats
   - Implement lazy loading
   - Use a CDN like Cloudinary

3. **SEO Enhancements:**
   - Submit sitemap to Google
   - Set up canonical URLs
   - Implement hreflang for international SEO

4. **Security Headers:**
   - Vercel: Add headers in vercel.json
   - GitHub Pages: Limited options, use Cloudflare for advanced security

---

## Updating Your Site

### Regular Updates

```bash
# Make your changes
git add .
git commit -m "Update content"
git push origin main
```

**Vercel:** Auto-deploys on push
**GitHub Pages:** GitHub Actions auto-deploys on push

### Content Updates Without Code Changes

For non-technical staff, consider:
1. **Vercel + Sanity CMS** (headless CMS)
2. **GitHub + Netlify CMS** (git-based CMS)
3. **Contentful** integration

---

## Support

For deployment issues:
- **Vercel:** [vercel.com/support](https://vercel.com/support)
- **GitHub Pages:** [docs.github.com/pages](https://docs.github.com/en/pages)
- **EmailJS:** [emailjs.com/docs](https://www.emailjs.com/docs/)

---

## Checklist Before Going Live

- [ ] EmailJS configured and tested
- [ ] Environment variables set
- [ ] Google Analytics added
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active (Vercel auto-configures)
- [ ] Booking form tested with real submission
- [ ] Mobile responsiveness verified
- [ ] Contact information accurate
- [ ] Images optimized
- [ ] SEO meta tags verified

---

**Last Updated:** 2024
**Version:** 1.0
