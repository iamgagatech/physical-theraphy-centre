# Physical Therapy Centre Website

A production-grade, conversion-optimized physiotherapy clinic website for a Lagos-based clinical practice.

## 🚀 Quick Start: Deploy Your Website

### Option 1: Vercel (Recommended - 5 minutes)
1. Push code to GitHub
2. Connect to [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Done! SSL and CDN included automatically

### Option 2: GitHub Pages (Free - 10 minutes)
1. Push code to GitHub
2. Go to Settings → Pages → Enable GitHub Actions
3. Add environment secrets in Settings → Secrets
4. Your site deploys automatically on every push

**📖 See [QUICKSTART.md](./QUICKSTART.md) for step-by-step instructions with commands**

**📖 See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed platform-specific instructions**

---

## 📚 Documentation Index

| Document | Purpose | Read When... |
|----------|---------|--------------|
| **[QUICKSTART.md](./QUICKSTART.md)** | Fast deployment guide | You want to deploy quickly |
| **[DEPLOYMENT.md](./DEPLOYMENT.md)** | Detailed deployment docs | You need platform-specific info |
| **[MAINTENANCE.md](./MAINTENANCE.md)** | Content update guide | You need to update website content |
| **[README.md](./README.md)** | General information | You need to understand the project |

---

## Technical Stack
- **React 19** with **Vite**
- **TypeScript** for type safety
- **Tailwind CSS** for clinical, modern styling
- **Framer Motion** for subtle, professional animations
- **React Router** for high-performance SPA navigation
- **Lucide React** for consistent iconography

## Key Features
- **Conversion Focused:** Prominent CTAs, mobile-sticky booking buttons, and friction-reduced booking form.
- **Clinical SEO:** Optimized meta tags, JSON-LD structured data (LocalBusiness & MedicalBusiness), and semantic HTML.
- **Surgery Avoidance Positioning:** Purpose-built copy emphasizing evidence-led recovery.
- **Content-Driven:** Pre-generated services and blog pillars for authority positioning.

## How to Update Content

### 1. Services
To add or edit services, modify `src/data/mockData.ts`. Each service includes:
- `slug`: The URL path (e.g., `sports-injury-rehabilitation`).
- `description`: Short summary for cards.
- `longDescription`: Detailed content for the service page.
- `benefits`: Array of key outcome points.
- `faqs`: Service-specific questions.

**Full Guide:** See [MAINTENANCE.md](./MAINTENANCE.md#services)

### 2. Blog Posts
Update `src/data/mockData.ts` in the `blogPosts` array. 
- Use high-quality clinical images (Unsplash links provided as examples).
- Ensure the `slug` is SEO-friendly.

**Full Guide:** See [MAINTENANCE.md](./MAINTENANCE.md#blog-posts)

### 3. Contact & Location
Global contact information is managed in `src/components/Layout.tsx` (Footer & Header) and `src/components/SEO.tsx` (Schema.org data).

**Full Guide:** See [MAINTENANCE.md](./MAINTENANCE.md#contact-information)

### 4. Color System
The clinical navy and teal theme is defined in `src/index.css` using the `@theme` block. Update variables like `--color-brand-navy` or `--color-brand-teal` to change the global appearance.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Performance & SEO
- All images are optimized via CDN links.
- Performance targets LCP < 2.2s.
- Meta tags are dynamically updated via the `<SEO />` component.
- Local Business JSON-LD is injected on the homepage.

## Email Integration (EmailJS)
To receive emails from the booking form, follow these steps:

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. In the EmailJS dashboard:
   - Add a **Email Service** (e.g., Gmail, Outlook).
   - Create an **Email Template**. Use the following variables in your template:
     - `{{full_name}}`
     - `{{email}}`
     - `{{phone}}`
     - `{{service}}`
     - `{{preferred_date}}`
     - `{{message}}`
3. Copy your **Service ID**, **Template ID**, and **Public Key**.
4. Create a `.env` file in the root directory (copy from `.env.example`).
5. Paste your keys into the `.env` file:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_id
   VITE_EMAILJS_TEMPLATE_ID=your_id
   VITE_EMAILJS_PUBLIC_KEY=your_key
   ```
6. Restart your development server. The booking form will now send real emails!

**Deployment Note:** For production deployment, set these as environment variables in your hosting platform (Vercel/GitHub Secrets).

---

## Deployment Checklist

Before going live, ensure:
- [ ] EmailJS account created and template configured
- [ ] Environment variables set (VITE_EMAILJS_*)
- [ ] GitHub repository created and code pushed
- [ ] Deployment platform configured (Vercel/GitHub Pages)
- [ ] Domain configured (if using custom domain)
- [ ] Booking form tested with real email
- [ ] Mobile responsiveness verified
- [ ] Google Analytics added (optional)
- [ ] Contact information updated in data files

## Project Files Overview

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components (Home, Services, etc.)
│   ├── data/           # Content data (services, blog posts)
│   ├── lib/            # Utilities (email, analytics)
│   └── styles/         # Global styles
├── .github/workflows/  # GitHub Actions for deployment
├── public/             # Static assets (404.html for GitHub Pages)
├── DEPLOYMENT.md       # Detailed deployment guide
├── QUICKSTART.md       # Fast start guide
├── MAINTENANCE.md      # Content update guide
└── README.md          # This file
```

## Professional Deployment Support

### For Non-Technical Users
- **Vercel**: Easiest option with automatic deployments
- **GitHub Pages**: Free but requires more setup

### Environment Variables Setup
All sensitive data (EmailJS keys) must be set as environment variables:
- **Vercel**: Dashboard → Settings → Environment Variables
- **GitHub Pages**: Repository → Settings → Secrets → Actions

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete step-by-step instructions.

## License
Proprietary for Physical Therapy Centre.

## How to Update Content

### 1. Services
To add or edit services, modify `src/data/mockData.ts`. Each service includes:
- `slug`: The URL path (e.g., `sports-injury-rehabilitation`).
- `description`: Short summary for cards.
- `longDescription`: Detailed content for the service page.
- `benefits`: Array of key outcome points.
- `faqs`: Service-specific questions.

### 2. Blog Posts
Update `src/data/mockData.ts` in the `blogPosts` array. 
- Use high-quality clinical images (Unsplash links provided as examples).
- Ensure the `slug` is SEO-friendly.

### 3. Contact & Location
Global contact information is managed in `src/components/Layout.tsx` (Footer & Header) and `src/components/SEO.tsx` (Schema.org data).

### 4. Color System
The clinical navy and teal theme is defined in `src/index.css` using the `@theme` block. Update variables like `--color-brand-navy` or `--color-brand-teal` to change the global appearance.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Performance & SEO
- All images are optimized via CDN links.
- Performance targets LCP < 2.2s.
- Meta tags are dynamically updated via the `<SEO />` component.
- Local Business JSON-LD is injected on the homepage.

## Email Integration (EmailJS)
To receive emails from the booking form, follow these steps:

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. In the EmailJS dashboard:
   - Add a **Email Service** (e.g., Gmail, Outlook).
   - Create an **Email Template**. Use the following variables in your template:
     - `{{full_name}}`
     - `{{email}}`
     - `{{phone}}`
     - `{{service}}`
     - `{{preferred_date}}`
     - `{{message}}`
3. Copy your **Service ID**, **Template ID**, and **Public Key**.
4. Create a `.env` file in the root directory (copy from `.env.example`).
5. Paste your keys into the `.env` file:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_id
   VITE_EMAILJS_TEMPLATE_ID=your_id
   VITE_EMAILJS_PUBLIC_KEY=your_key
   ```
6. Restart your development server. The booking form will now send real emails!

## Deployment Checklist

Before going live, ensure:
- [ ] EmailJS account created and template configured
- [ ] Environment variables set (VITE_EMAILJS_*)
- [ ] GitHub repository created and code pushed
- [ ] Deployment platform configured (Vercel/GitHub Pages)
- [ ] Domain configured (if using custom domain)
- [ ] Booking form tested with real email
- [ ] Mobile responsiveness verified
- [ ] Google Analytics added (optional)
- [ ] Contact information updated in data files

## Professional Deployment Support

### For Non-Technical Users
- **Vercel**: Easiest option with automatic deployments
- **GitHub Pages**: Free but requires more setup

### Environment Variables Setup
All sensitive data (EmailJS keys) must be set as environment variables:
- **Vercel**: Dashboard → Settings → Environment Variables
- **GitHub Pages**: Repository → Settings → Secrets → Actions

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete step-by-step instructions.

## License
Proprietary for Physical Therapy Centre.
