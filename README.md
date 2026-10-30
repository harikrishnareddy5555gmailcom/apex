# APEX Premium Water — Official Brand Website

> **"Pure Water, Stronger India."**
> Official domain: [https://apexpremiumwater.com/](https://apexpremiumwater.com/)

---

## Verified Brand Information

All company details, regulatory codes, and product information on this website were extracted directly from the official bottle label artwork:

- `public/assets/APEX_Label_1_Liter_High_Quality.pdf`
- `public/assets/APEX_Label_500ml_High_Quality.pdf`

| Field | Value | Source |
|---|---|---|
| Brand Name | APEX | Label |
| Tagline | "Pure Water, Stronger India." | Label |
| Sub-tagline | "Perfect Quality in Every Drop." | Label |
| Category | Premium Packaged Drinking Water | Label |
| Products | 500 ml, 1 Litre | Label |
| Minerals | Calcium (Ca) &amp; Magnesium (Mg) | Label |
| Water Treatment | Sand Filtration, Activated Carbon, Ultra Filtration (UF), Reverse Osmosis (RO), Ozonation | Label |
| FSSAI Licence | `2362603301661` | Label |
| Shelf Life | Best before 6 months from packing | Label |
| Army Commitment | 5% of income dedicated to supporting the Indian Army | Label (verbatim) |
| Manufacturer &amp; Packer | apecstransit | Label |
| Facility Address | #2-108, Uppal, Medchal Malkajgiri, Hyderabad, Telangana – 500098 | Label |
| Phone / WhatsApp | +91 95504 57896 | Label |
| Email | nani@apexpremiumwater.com | Label |

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript (strict) |
| Bundler | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Icons | Lucide React |
| Typography | Plus Jakarta Sans (Google Fonts) |
| Linter | Oxlint |
| Deployment | Vercel Static Hosting |

---

## Website Sections

| Section | ID | Purpose |
|---|---|---|
| Hero | `#hero` | Brand first-impression, tagline, CTAs |
| About | `#about` | Brand identity, FSSAI, manufacturer |
| Our Product | `#products` | 500 ml &amp; 1 Litre product cards |
| Purification | `#purification` | 5-stage treatment (label-verified) |
| Our Commitment | `#commitment` | Indian Army 5% income dedication |
| Contact | `#distributor` | Distributor &amp; wholesale enquiries |
| Footer | — | Nav links, contact, copyright |

---

## Local Development

### Prerequisites

- Node.js v18+ or v20+
- npm v9+

### Install &amp; Run

```bash
# Navigate to the project folder
cd Apex

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build &amp; Check

```bash
# TypeScript check (zero errors expected)
npx tsc --noEmit

# Lint (zero warnings/errors expected)
npm run lint

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Deploying to Vercel

### Option A — Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# From the project directory
vercel
```

Follow the prompts. Vercel auto-detects Vite, sets `npm run build` as the build command, and `dist` as the output directory.

### Option B — Git Integration (Recommended)

1. Push this repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. In the [Vercel Dashboard](https://vercel.com/dashboard) → **Add New Project** → select your repository.
3. Vercel detects Vite automatically. Confirm:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

Every push to `main` triggers an automatic redeploy.

---

## Connecting the Custom Domain

### Add the domain in Vercel

1. Go to your Vercel project → **Settings** → **Domains**.
2. Add `apexpremiumwater.com` and `www.apexpremiumwater.com`.
3. Vercel will show the required DNS records.

### Configure DNS (at your domain registrar)

| Type | Name / Host | Value / Destination |
|---|---|---|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

DNS propagation typically takes 5–60 minutes.

### HTTPS / SSL Certificate

Vercel automatically provisions and renews a **Let's Encrypt TLS certificate** at no charge once DNS is correctly configured. No manual action is required. The `vercel.json` in this project:

- Permanently redirects `www.apexpremiumwater.com` → `apexpremiumwater.com` (canonical)
- Sets security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, etc.)
- Aggressively caches static assets (images, JS, CSS) for 1 year

---

## Google Search Console — Indexing Guide

Follow these steps **after** the live domain is confirmed at `https://apexpremiumwater.com/`.

### Step 1 — Verify ownership

1. Open [Google Search Console](https://search.google.com/search-console/).
2. Click **Add Property** → choose **Domain** → enter `apexpremiumwater.com`.
3. Choose a verification method:
   - **DNS TXT record** (recommended) — add the TXT record at your registrar, then click Verify.
   - **HTML file** — download the file Vercel provides, place it in `public/`, deploy, then verify.

### Step 2 — Submit the sitemap

1. In Search Console → select your property.
2. Go to **Sitemaps** (left sidebar).
3. Enter `https://apexpremiumwater.com/sitemap.xml` and click **Submit**.
4. The sitemap is pre-built at `public/sitemap.xml` in this repository.

### Step 3 — Request indexing

1. In Search Console → **URL Inspection**.
2. Enter `https://apexpremiumwater.com/`.
3. Click **Request Indexing**.

Google typically crawls and indexes the page within a few hours to a few days. Ranking depends on Google's algorithms, content quality, inbound links, and many other factors outside this codebase.

### Step 4 — Monitor performance

- **Performance** tab: impressions, clicks, average position, queries.
- **Coverage** tab: confirm the page is indexed; check for crawl errors.
- **Core Web Vitals**: LCP, INP, CLS scores for the live URL.

> **Note:** Vercel deployment on a preview URL (e.g. `apex-xyz.vercel.app`) is `noindex` by default. Only the custom domain `apexpremiumwater.com` will be indexed by Google.

---

## Image Assets

| File | Purpose | Status |
|---|---|---|
| `apex-logo.png` | Brand logo — header, footer, favicon | Real brand asset |
| `apex-hero-bg.jpg` | Hero section background — Himalayan spring landscape | AI-generated |
| `apex-product-splash.jpg` | Hero product visual — bottles with water splash | AI-generated (no text/labels) |
| `apex-water-ripple.jpg` | Water texture — About &amp; Purification section background | AI-generated |
| `apex-soldiers-flag.png` | Army commitment section background texture | Sourced asset |
| `apex_bottle_500ml.jpg` | Products section — 500 ml product card | Existing asset |
| `apex_bottle_1liter.jpg` | Products section — 1 Litre product card &amp; About | Existing asset |
| `APEX_Label_*.pdf` | **Reference only** — source of truth for all brand info | Label artwork PDFs (not displayed) |

> **Owner action:** Replace `apex_bottle_500ml.jpg` and `apex_bottle_1liter.jpg` with professional product photographs once available. The AI-generated splash image (`apex-product-splash.jpg`) does not show the actual APEX label. Update `brandConfig.productVariants[].image` to point to final photos.

---

## Pending Owner Confirmations

| Item | Status | Action Needed |
|---|---|---|
| BIS / ISI CM/L number (IS 14543) | Pending | Confirm if certification exists and provide the CM/L code for display |
| Indian Army welfare fund name | Pending | Optionally name the specific fund (e.g. Armed Forces Flag Day Fund) for the commitment section |
| Distributor wholesale pricing &amp; MOQ | Pending | Provide wholesale crate sizes and margin terms for the Contact section |
| Professional product photography | Pending | Commission or supply real bottle photographs for the Products section |

---

## Build &amp; QA Results (Latest)

```
TypeScript (tsc --noEmit):       0 errors      ✅
Oxlint (npm run lint):           0 warnings    ✅
Production build (npm run build):
  dist/index.html                5.16 kB  │ gzip: 1.70 kB
  dist/assets/index-*.css       48.43 kB  │ gzip: 8.80 kB
  dist/assets/index-*.js       269.23 kB  │ gzip: 81.53 kB
  Built in 2.35 s               ✅
```

Visual browser testing was not performed programmatically. The owner should verify the live site visually on mobile and desktop after deploying to the custom domain.
