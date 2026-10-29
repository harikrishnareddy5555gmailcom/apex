# APEX Premium Packaged Drinking Water — Official Brand Portal

> **"Pure Water, Stronger India."**  
> *Official Domain:* [https://apexpremiumwater.com/](https://apexpremiumwater.com/)

---

## 1. Project Overview & Source of Truth

This repository contains the complete, production-ready frontend website for **APEX Premium Packaged Drinking Water**. 

All brand assets, company details, regulatory codes, purification stages, and social commitments were extracted directly from the official physical packaging labels:
- `APEX_Label_1_Liter_High_Quality.pdf`
- `APEX_Label_500ml_High_Quality.pdf`

### Verified Core Brand Identity:
- **Brand Name:** APEX
- **Category:** Premium Packaged Drinking Water
- **Tagline:** *"Pure Water, Stronger India."*
- **Sub-Tagline:** *"Perfect Quality in Every Drop.💧"*
- **Four Label Pillars:** Pure Water | Safe & Hygienic | Essential Minerals | Premium Quality
- **Enriched Minerals:** Calcium (Ca) & Magnesium (Mg)
- **Water Treatment Through:** Sand Filtration, Activated Carbon Filtration, Ultra Filtration (UF), Reverse Osmosis (RO), and Ozonation
- **Official FSSAI License:** `2362603301661`
- **Shelf Life:** Best before 6 months from the date of packing
- **Batch / Mfg / MRP:** See Cap/Neck
- **National Contribution:** 5% of our income is dedicated to supporting the Indian Army
- **Manufacturer & Packer:** `apecstransit`
- **Facility Address:** `# 2-108, Uppal, Medchal Malkajgiri, Hyderabad, Telangana - 500098, India`
- **Enquiries & Distribution Phone:** `+91 95504 57896`
- **Email:** `nani@apexpremiumwater.com`

---

## 2. Creative & Architecture Highlights

1. **QR-First Mobile Experience:** Designed specifically for consumers who scan the QR code on a physical bottle of APEX water:
   - Instant load with zero login or mandatory popups
   - Floating quick-access mobile bottom bar (`Call Now`, `WhatsApp`, `FSSAI Lic`, `Distribute`)
   - Direct verification tools for both official bottle QR codes (Brand Portal & FSSAI Info)
2. **Authentic Assets & Art Direction:**
   - Real APEX mountain-and-bottle logo artwork cropped directly from label files
   - High-resolution 3D commercial bottle photography matching the exact blue caps, ribbed grip contours, and label dimensions
   - Verbatim wording for all legal, storage, and patriotic statements
3. **Interactive 5-Stage Purification Tour:**
   - Step-by-step interactive inspection of the multi-barrier filtration system
4. **Direct Distributor & Retailer Dispatcher:**
   - Live pre-formatted WhatsApp and email enquiry generator without requiring artificial databases or mock server claims
5. **Centralized Brand Configuration:**
   - All company metadata, contacts, and checklist items are strictly typed in `src/config/brandConfig.ts`

---

## 3. Technology Stack

- **Framework:** React 19 + TypeScript (Strict Type Checking)
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with custom design tokens
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans & system fallbacks
- **Deployment Target:** Vercel Static Hosting

---

## 4. Local Development & Build

### Prerequisites
- Node.js (v18+ or v20+)
- npm (v9+)

### Installation
```bash
# Clone the repository and navigate into the folder
cd Apex

# Install dependencies
npm install
```

### Run Locally
```bash
# Start local development server
npm run dev

# Or build and preview production bundle
npm run build
npm run preview
```

### TypeScript & Production Check
```bash
npm run build
```
Generates an optimized static production distribution in the `dist/` directory.

---

## 5. Deployment Guide: Vercel & Custom Domain

### Deploying to Vercel via CLI
```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy directly from the project directory
vercel
```

### Deploying to Vercel via Git Repository
1. Push this repository to GitHub or GitLab.
2. In the [Vercel Dashboard](https://vercel.com/dashboard), click **Add New Project** and select this repository.
3. Vercel will automatically detect `Vite` as the framework preset and use:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

### Connecting Custom Domain (`apexpremiumwater.com`)
1. Go to your Project Settings on Vercel -> **Domains**.
2. Add `apexpremiumwater.com` and `www.apexpremiumwater.com`.
3. In your DNS provider (e.g. GoDaddy, Namecheap, Cloudflare):
   - **A Record:**
     - Name / Host: `@`
     - Value / Destination: `76.76.21.21`
   - **CNAME Record:**
     - Name / Host: `www`
     - Value / Destination: `cname.vercel-dns.com`
4. Vercel automatically issues and provisions a free **Let's Encrypt SSL Certificate (HTTPS)** within a few minutes of DNS propagation.

---

## 6. Owner Verification Checklist & Pending Items

The website includes a built-in verification checklist available in `src/config/brandConfig.ts` and via the **"Verified Facts"** button on the UI:

| Category | Item | Status | Verified Source / Action Needed |
| :--- | :--- | :--- | :--- |
| **Licensing** | FSSAI License Number | **Verified** | Extracted from label: `2362603301661` |
| **Licensing** | BIS / ISI CM/L Code (IS 14543) | **Pending Owner** | Standard for Indian packaged water; confirm if ISI mark code should be displayed |
| **Commitment** | 5% Indian Army Dedication | **Verified** | Quoted verbatim from physical label artwork |
| **Commitment** | Designated Welfare Fund Name | **Pending Owner** | Confirm specific fund name (e.g. Armed Forces Flag Day Fund) for formal receipt linkage |
| **Contact** | Telephone & WhatsApp | **Verified** | Label contact: `+91 95504 57896` |
| **Contact** | Official Email Address | **Verified** | Label contact: `nani@apexpremiumwater.com` |
| **Manufacturing** | apecstransit Facility Address | **Verified** | `# 2-108, Uppal, Medchal Malkajgiri, Hyderabad, Telangana - 500098` |
| **Commercial** | Minimum Order Quantities (MOQ) | **Pending Owner** | Provide wholesale crate quantities and retail dealership terms |

---

## 7. QA Verification Summary

- **Production Build:** Passes `tsc -b && vite build` with 0 warnings/errors.
- **Visual Inspection:** Verified via automated subagent across desktop (1920x1080) and mobile (390x844).
- **Interactive Features Tested:**
  - Product variant switcher (500ml vs 1L)
  - 5-stage purification interactive stage breakdown
  - FSSAI QR inspection zoom
  - Direct WhatsApp and telephone tap-to-call links
  - Owner checklist modal open/close
  - Mobile hamburger navigation drawer and sticky quick-action bar
