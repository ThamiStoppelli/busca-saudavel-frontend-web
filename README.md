# 🥗 Busca Saudável

> A search platform that helps people with food allergies and dietary restrictions quickly identify safe products and access trustworthy nutritional information.

**🔗 [Live Demo](https://busca-saudavel-frontend-web.vercel.app/)  ·  [Design Case Study](https://thamiresstoppelli-portfolio.vercel.app/project/buscasaudavel)**

Designed and built end-to-end — from user research and Figma to production React. Originally a full-stack graduation project (awarded maximum grade, 10.0); this repository is a frontend-only version using mocked client data so it can be deployed and reviewed without backend infrastructure.

## Overview

For millions of people, reading food labels isn't a lifestyle choice — it's a matter of immediate safety. Visual information overload, confusing marketing and tiny text hide real physical risks.

Busca Saudável turns the anxiety of the supermarket aisle into a fast, trustworthy digital experience: search a product, filter by your specific restrictions, and see isolated allergen tags and clear nutritional data at a glance.

## Design Process

This started as a design problem, not a coding one. A few decisions shaped the product:

- **"Does not contain" safety tags.** Rather than burying allergen data in a nutrition table, I surfaced it as instant, standardized visual tags. Research showed 75% of interviewed users felt anxious reading labels in-store — the tag system gives an immediate safety signal that reduces that cognitive load.
- **Compound, savable filters.** Broad "diet" categories fail people with specific restrictions. I designed filters that isolate granular ingredients and let users save compound filter sets to their profile, so repeat grocery trips don't mean re-filtering every time.
- **Clinical clarity over marketing fluff.** The visual language was built to read like a clinical nutrition label — Inter for maximum on-screen legibility, an aqua-green palette chosen to evoke health and safety, and iconography reserved for safety validations.
- **Research-led.** Grounded in 12 user interviews, 8 identified pain points, a CSD matrix to structure hypotheses, and benchmarking against MyFitnessPal, Yuka and Desrotulando to find the gap in allergen-specific filtering.

The full case study — research, IA, wireframes, design system — is on my [portfolio](https://thamiresstoppelli-portfolio.vercel.app/project/buscasaudavel).

## Main Features

- Product search by name, brand, description or ingredients
- Filtering by allergen and dietary restriction tags
- Product detail page with ingredients and nutrition facts
- Mock login and sign up flows
- Favorite and unfavorite product simulation
- Supplier area with product listing, creation, editing and deletion
- User and company profile screens
- Client-side data persistence with `localStorage`

## 🚀 Tech Stack

React · JavaScript · React Router DOM · Styled Components · React Toastify · Mock API layer using browser storage

## Frontend-Only Architecture

The original backend dependency is preserved, not removed. `src/services/api.js` acts as a switch between a real backend client and a mock client (`src/services/mockApi.js`), so the app stays ready to reconnect to a future API without rewriting any pages.

The mock service keeps the same interface the app already uses (`api.get`, `api.post`, `api.put`, `api.delete`), so the original page code calls the same endpoints — in demo mode the responses come from local mock data instead of a live server. Mocked data includes sample users, suppliers, products, tags and nutrition info, and runtime changes persist in `localStorage` across refreshes in the same browser.

## Demo Accounts

Any email and password will authenticate as a demo user. Preconfigured accounts:

```bash
Consumer  →  demo@buscasaudavel.com  ·  12345678
Supplier  →  fornecedor@buscasaudavel.com  ·  12345678
```

The supplier account unlocks the product management area.

## Getting Started

```bash
npm install      # install dependencies
npm start        # run dev server
npm run build    # production build
```

## ⚙️ Deploying to Vercel

Deploys as a static React app. Recommended settings:

```bash
Build Command: npm run build
Output Directory: build
Install Command: npm install
```

The included `vercel.json` has a rewrite rule so React Router routes work on refresh and direct URL access.

## Future Improvements

- Add automated tests for key user flows
- Strengthen form validation and accessibility labels
- Add real image preview for newly created products
- Reconnect to a production API when backend infrastructure is available