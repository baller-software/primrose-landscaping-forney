# Deployment Guide

## Prerequisites

- Node.js 20 LTS (see `.nvmrc`)
- npm

## Third-Party Services

### Formspree (Contact Form Submissions)

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and note the form ID (e.g., `xyzabcde`)
3. Update the Formspree endpoint in `src/data/site.ts` with your form ID
4. Configure the email address where submissions should be forwarded
5. Free tier: up to 50 submissions/month

### GitHub Pages

1. Go to your repository Settings > Pages
2. Set Source to "GitHub Actions"
3. Push to `main` branch to trigger deployment
4. Custom domain (optional): Add your domain in Settings > Pages > Custom domain and configure DNS

## Environment Variables

No environment variables are required. All configuration is in source code.

## Build & Deploy

```bash
# Install dependencies
npm install

# Local development
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Format code
npm run format

# Check formatting
npm run format:check
```

Deployment is automatic via GitHub Actions on push to `main`.

## Post-Deploy Verification

- [ ] Site loads at the configured URL
- [ ] All pages render (Home, About, Services, Contact)
- [ ] Navigation links work correctly
- [ ] Contact form submissions are received at the configured email
- [ ] Site is responsive on mobile devices
- [ ] robots.txt and sitemap are accessible

## Rollback

To revert to a previous deployment:

1. Identify the last known good commit: `git log --oneline`
2. Create a revert: `git revert <commit-hash>`
3. Push to `main` to trigger a new deployment

Alternatively, re-run a previous successful GitHub Actions workflow from the Actions tab.
