# Quick Start Guide

Deploy your Physical Therapy Centre website in under 10 minutes.

## 🎯 Choose Your Platform

| Platform | Difficulty | Best For | Cost |
|----------|-----------|----------|------|
| **Vercel** | ⭐ Easy | Production sites, custom domains | Free |
| **GitHub Pages** | ⭐⭐ Medium | Free hosting, simple setup | Free |

---

## 🚀 Option 1: Vercel (Recommended - Easiest)

### Step 1: Prepare Your Code
```bash
# Make sure you have a .env file with your EmailJS keys
cp .env.example .env
# Edit .env with your actual keys
```

### Step 2: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main

# Create a repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 3: Deploy
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository
5. Add environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
6. Click "Deploy"

✅ **Done!** Your site will be live in 2 minutes.

---

## 🚀 Option 2: GitHub Pages (Free)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/settings/pages`
2. Under "Source", select "GitHub Actions"

### Step 3: Add Secrets
1. Go to `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/settings/secrets/actions`
2. Click "New repository secret"
3. Add these three secrets:
   - Name: `VITE_EMAILJS_SERVICE_ID` | Value: your_service_id
   - Name: `VITE_EMAILJS_TEMPLATE_ID` | Value: your_template_id
   - Name: `VITE_EMAILJS_PUBLIC_KEY` | Value: your_public_key

### Step 4: Trigger Deployment
The deployment happens automatically when you push to main. To trigger manually:
1. Go to `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions`
2. Click the latest workflow run
3. Click "Re-run all jobs"

✅ **Done!** Your site will be at:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## ⚙️ Configuration Reference

### vite.config.ts - Base Path
Update this line with your repository name:
```javascript
base: isGitHubPages ? '/YOUR_REPO_NAME/' : '/',
```

### Environment Variables
All variables must start with `VITE_`:
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### EmailJS Setup
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create an Email Service (Gmail recommended)
3. Create a Template with these variables:
   - `{{full_name}}`
   - `{{email}}`
   - `{{phone}}`
   - `{{service}}`
   - `{{preferred_date}}`
   - `{{message}}`

---

## 🔧 Troubleshooting

### "Page not found" errors on refresh
This is normal for SPAs on GitHub Pages. The 404.html redirect script handles this.

### Styles not loading
Check that the `base` path in vite.config.ts matches your repository name exactly.

### Emails not sending
1. Check browser console for errors
2. Verify all three EmailJS IDs are correct
3. Ensure the template variables match exactly

### Build fails on Vercel
Make sure the build command is `npm run build` and output directory is `dist`.

---

## 📞 Need Help?

1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions
2. Check [README.md](./README.md) for general information
3. EmailJS docs: [emailjs.com/docs](https://www.emailjs.com/docs/)
4. Vercel docs: [vercel.com/docs](https://vercel.com/docs)
5. GitHub Pages docs: [docs.github.com/pages](https://docs.github.com/en/pages)

---

## 🎉 After Deployment

### Testing Checklist
- [ ] Homepage loads correctly
- [ ] Navigation works between pages
- [ ] Booking form submits successfully
- [ ] You receive the booking email
- [ ] Mobile view looks good
- [ ] Contact information is correct

### Optional Enhancements
- [ ] Add custom domain
- [ ] Set up Google Analytics
- [ ] Configure Google Search Console
- [ ] Add SSL certificate (Vercel includes this automatically)

---

**Time to deploy: 5-10 minutes** ⏱️
