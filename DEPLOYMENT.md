# InterviewCoach Landing Page Deployment Guide

## 🏗️ Architecture Overview

```
tryinterviewcoach.com (this project)
├── Landing page with marketing content
├── Blog posts
└── Redirects to app subdomain

app.tryinterviewcoach.com (future project)
└── Main InterviewCoach application
```

## 🚀 Deployment Steps

### 1. Domain Setup
- Point `tryinterviewcoach.com` to your hosting provider
- Set up `app.tryinterviewcoach.com` subdomain for future app

### 2. Environment Variables

**Production (.env.production):**
```bash
NEXT_PUBLIC_APP_URL=https://tryinterviewcoach.com
NEXT_PUBLIC_APP_SUBDOMAIN=https://app.tryinterviewcoach.com
```

**Local Development (.env.local):**
```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_SUBDOMAIN=http://localhost:3001
```

### 3A. Vercel Deployment

1. **Connect Repository:**
   - Import project to Vercel
   - Connect GitHub/GitLab repository

2. **Configure Environment Variables:**
   - Add `NEXT_PUBLIC_APP_URL=https://tryinterviewcoach.com`
   - Add `NEXT_PUBLIC_APP_SUBDOMAIN=https://app.tryinterviewcoach.com`

3. **Domain Configuration:**
   - Add `tryinterviewcoach.com` as custom domain
   - Configure DNS (A record or CNAME)

4. **Deploy:**
   - Vercel will auto-deploy on push to main branch
   - Redirects configured in `vercel.json`

### 3B. Netlify Deployment

1. **Connect Repository:**
   - Import project to Netlify
   - Connect GitHub/GitLab repository

2. **Build Settings:**
   - Build command: `bun run build`
   - Publish directory: `.next`
   - Node version: 18.x

3. **Environment Variables:**
   - Add same variables as Vercel

4. **Domain Configuration:**
   - Add `tryinterviewcoach.com` as custom domain
   - Configure DNS via Netlify DNS or external

5. **Deploy:**
   - Netlify will auto-deploy on push
   - Redirects configured in `netlify.toml`

## 🔧 Pre-Deployment Checklist

- [ ] Run `bun run build` to test production build
- [ ] Update environment variables for production
- [ ] Test all internal links work correctly
- [ ] Verify app subdomain redirects work
- [ ] Check responsive design on multiple devices
- [ ] Test dark/light mode functionality
- [ ] Verify SEO meta tags are correct

## 🔗 Key Redirect Rules

Both deployment configs include:
- `/app/*` → `https://app.tryinterviewcoach.com/*`
- `www.tryinterviewcoach.com` → `tryinterviewcoach.com` (canonical)

## 📱 Features Included

✅ **Landing Page Components:**
- Hero section with CTA
- Interactive feature demos
- Pricing (beta access)
- Testimonials
- FAQ section
- Blog capability

✅ **Technical Features:**
- SEO optimized
- Dark/light mode
- Mobile responsive
- Fast loading
- Accessible design

✅ **Ready for App Integration:**
- Environment-based app links
- Automatic subdomain redirects
- Consistent branding

## 🎯 Next Steps

1. **Deploy landing page** to `tryinterviewcoach.com`
2. **Build your main app** for `app.tryinterviewcoach.com`
3. **Update environment variables** when app is ready
4. **Test end-to-end user flow** from landing to app

## 🔍 Monitoring

After deployment, monitor:
- Page load speeds
- Mobile performance
- SEO rankings
- User conversion from landing to app signup
