# Website Maintenance Guide

How to update and maintain the Physical Therapy Centre website after deployment.

## 📅 Regular Maintenance Tasks

### Monthly
- [ ] Review and respond to booking inquiries
- [ ] Update blog posts (add new content)
- [ ] Check for broken links
- [ ] Review Google Analytics (if configured)

### Quarterly
- [ ] Update team information
- [ ] Refresh service descriptions
- [ ] Add new testimonials
- [ ] Review and update pricing (if displayed)

### Annually
- [ ] Update copyright year
- [ ] Refresh all images
- [ ] Review SEO performance
- [ ] Update clinic certifications/licenses

---

## ✏️ Updating Content

### Services
**File:** `src/data/mockData.ts`

```typescript
export const services: Service[] = [
  {
    id: "1",
    slug: "your-service-slug", // URL-friendly name
    title: "Service Name",
    description: "Short description (shown on cards)",
    longDescription: "Full description (shown on detail page)",
    icon: "Activity", // Lucide icon name
    faqs: [
      { question: "Q1", answer: "A1" },
      { question: "Q2", answer: "A2" }
    ],
    benefits: [
      "Benefit 1",
      "Benefit 2"
    ]
  }
];
```

**Steps:**
1. Open `src/data/mockData.ts`
2. Find the `services` array
3. Add or edit service objects
4. Save file
5. Commit and push to deploy

### Blog Posts
**File:** `src/data/mockData.ts`

```typescript
export const blogPosts: Post[] = [
  {
    id: "unique-id",
    slug: "post-url-slug",
    title: "Post Title",
    excerpt: "Short summary for blog listing",
    content: "Full article content",
    category: "Category Name",
    date: "2024-01-15",
    author: "Author Name",
    imageUrl: "https://images.unsplash.com/..."
  }
];
```

**Steps:**
1. Open `src/data/mockData.ts`
2. Find the `blogPosts` array
3. Add new post object at the beginning of the array
4. Save and deploy

**Getting Images:**
- Use [Unsplash](https://unsplash.com) for free professional photos
- Search for: "physiotherapy", "physical therapy", "medical", "rehabilitation"
- Copy the image URL

### Testimonials
**File:** `src/data/mockData.ts`

```typescript
export const testimonials: Testimonial[] = [
  {
    id: "unique-id",
    name: "Patient Name",
    role: "Patient Type (e.g., Marathon Runner)",
    content: "Testimonial text...",
    rating: 5
  }
];
```

### Contact Information
**Files:** 
- `src/components/Layout.tsx` (Header & Footer)
- `src/components/SEO.tsx` (Schema.org data)

**Update these fields:**
- Phone number
- Email address
- Physical address
- Opening hours
- Social media links

---

## 🔄 Deploying Updates

### For Vercel Users
```bash
# Make your changes
git add .
git commit -m "Updated services"
git push origin main

# Vercel automatically deploys!
```

### For GitHub Pages Users
```bash
# Make your changes
git add .
git commit -m "Updated blog posts"
git push origin main

# GitHub Actions automatically deploys!
```

---

## 🖼️ Updating Images

### Option 1: External URLs (Easiest)
Use image hosting services:
- Unsplash (free): `https://images.unsplash.com/...`
- Cloudinary (recommended): Upload and get CDN link
- Imgur: Quick hosting

### Option 2: Local Images
1. Add images to `public/images/` folder
2. Reference as `/images/your-image.jpg`

**Note:** For GitHub Pages, ensure images are in the `public` folder, not `src/assets`.

---

## 📧 Managing EmailJS

### When to Update Template
- Clinic email address changes
- You want different information in booking emails
- Adding/removing form fields

### Updating Template
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Email Templates → Edit your template
3. Update the HTML/text content
4. Save (no code changes needed!)

### Common Template Variables
```
{{full_name}} - Patient's full name
{{email}} - Patient's email
{{phone}} - Patient's phone
{{service}} - Selected service
{{preferred_date}} - Requested date
{{message}} - Additional notes
```

---

## 🔍 SEO Updates

### Updating Page Titles
**File:** Each page file in `src/pages/`

Find the SEO component:
```tsx
<SEO
  title="Your New Title"
  description="Your new description"
/>
```

### Meta Tags
Meta tags are automatically set from the SEO component. Update:
- `title` - Page title (appears in browser tab)
- `description` - Search result description

### Structured Data (JSON-LD)
**File:** `src/components/SEO.tsx`

Update `localBusinessSchema` for:
- Business hours changes
- Address changes
- Phone number updates
- Service offerings

---

## 🚨 Common Issues & Fixes

### "My changes aren't showing"
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Check if deployment completed (GitHub Actions/Vercel dashboard)
3. Verify you committed AND pushed changes

### "Images not loading"
1. Check image URL is correct
2. For Unsplash: Ensure URL is the direct image link (ends in .jpg)
3. For GitHub Pages: Image must be in `public` folder

### "Booking form not working"
1. Check EmailJS dashboard - is service active?
2. Verify environment variables are set
3. Check browser console for errors
4. Test with a different email address

### "Site looks broken on mobile"
1. Website is mobile-responsive by default
2. Check if you added custom CSS that breaks responsiveness
3. Test on actual device, not just browser resize

---

## 📊 Analytics (Optional)

### Adding Google Analytics
1. Sign up at [Google Analytics](https://analytics.google.com)
2. Create a property and get Tracking ID (G-XXXXXXXXXX)
3. Add to `.env`:
   ```
   VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   ```
4. Update `src/lib/analytics.ts` to send events

### What to Track
- Homepage visits
- Booking page views
- Form submissions
- Service page popularity

---

## 🎨 Design Changes

### Colors
**File:** `src/index.css`

```css
@theme {
  --color-brand-navy: #0A2540;    /* Primary */
  --color-brand-teal: #20B2AA;    /* Accent */
  --color-brand-gray: #4A5568;    /* Text */
}
```

### Fonts
The site uses system fonts by default. To use Google Fonts:
1. Add link to `index.html` head
2. Update `font-sans` in `src/index.css`

---

## 🔐 Security Best Practices

### EmailJS Security
- Never commit `.env` file to Git
- Use repository secrets for GitHub Pages
- Rotate EmailJS keys annually
- Monitor EmailJS dashboard for spam

### Form Validation
Booking form validation is built-in. Don't remove validation unless you understand security implications.

---

## 📞 Support Contacts

For technical issues:
1. Check this maintenance guide
2. Review [DEPLOYMENT.md](./DEPLOYMENT.md)
3. Check Vercel/GitHub status pages
4. Contact developer who set up the site

For content updates:
- You can update most content yourself following this guide
- For major design changes, consult a developer

---

## 📝 Content Guidelines

### Writing Service Descriptions
- Keep it professional and clinical
- Use evidence-based language
- Include benefits and outcomes
- Mention specific conditions treated

### Blog Post Best Practices
- 500-1000 words ideal
- Use headers (H2, H3) for structure
- Include relevant keywords naturally
- Add internal links to services
- Use professional medical images

### Testimonial Guidelines
- Get written permission from patients
- Use first name only for privacy
- Include specific outcomes
- Keep it authentic (don't over-edit)

---

## 🎯 Performance Tips

### Image Optimization
- Use WebP format when possible
- Keep images under 200KB
- Use appropriate dimensions (don't upload 4000px images)
- Use a CDN (Cloudinary, Imgix) for better performance

### Code Efficiency
- Don't add unnecessary npm packages
- Keep bundle size small
- Test on 3G connection

---

**Last Updated:** 2024
**Version:** 1.0
