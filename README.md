# 🥗 Busca Saudável

Busca Saudável is a frontend web application created to help users discover food products according to nutritional composition, allergens and dietary restrictions.

The project was originally built as a full stack graduation project with a database and REST API. This repository has now been adapted into a frontend only version, using mocked data in the client so it can be easily deployed, reviewed and shared without backend infrastructure.

This project was developed as a **Final Graduation Project** for the Bachelor’s Degree in Analysis and Systems Development, achieving the **maximum grade (10.0)**.

## Overview

The application allows users to browse food products, search by name or brand, filter by dietary tags, view detailed nutritional information and simulate favorite products, authentication and supplier product management flows.

The project focuses on usability, accessibility and user-centered design for people with food allergies, intolerances or specific dietary lifestyles.

The goal of this version is to preserve the original product experience while making the project simpler to run and deploy as a portfolio ready React application.

## Main Features

- Product search by name, brand, description or ingredients
- Filtering by allergen and dietary restriction tags
- Product detail page with ingredients and nutrition facts
- Mock login and sign up flows
- Favorite and unfavorite product simulation
- Supplier area with product listing, creation, editing and deletion
- User and company profile screens
- Client side data persistence with `localStorage`
- Frontend only deployment configuration for Vercel

## 🚀 Tech Stack

- React
- JavaScript
- React Router DOM
- Styled Components
- React Toastify
- Create React App
- Mock API layer using browser storage

## Frontend Only Architecture

The original API dependency was not removed. It is preserved in `src/services/api.js`, but the active default is a mock service located at:

```bash
src/services/mockApi.js
```

`src/services/api.js` now works as a small switch between the real backend client and the mock client. This keeps the frontend ready to reconnect to a future backend without rewriting the pages.

The mock service keeps the same interface used by the app, including:

```js
api.get(...)
api.post(...)
api.put(...)
api.delete(...)
```

Because of that, the original frontend code can continue calling the same endpoints. In demo mode, the responses come from local mock data instead of `localhost:8080`.

The mocked data includes sample users, suppliers, products, tags and nutritional information. Runtime changes are persisted in `localStorage`, so created products, edited profiles and favorites remain available after page refreshes in the same browser.

## Demo Accounts

You can use any email and password in the login form, because this version is designed for demo purposes. The mock service will authenticate with a demo user if the credentials do not match an existing mock account.

Preconfigured accounts:

```bash
Consumer
Email: demo@buscasaudavel.com
Password: 12345678

Supplier
Email: fornecedor@buscasaudavel.com
Password: 12345678
```

The supplier account unlocks the product management area.

## Getting Started

Clone the repository and install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

Create a production build:

```bash
npm run build
```

## ⚙️ Deploying to Vercel

This project is ready to deploy on Vercel as a static React app.

Recommended settings:

```bash
Framework Preset: Create React App
Build Command: npm run build
Output Directory: build
Install Command: npm install
```

The repository includes a `vercel.json` file with a rewrite rule so React Router routes work correctly after refresh or direct URL access.

## Project Notes

This project was developed as a final graduation project for the Bachelor’s Degree in Analysis and Systems Development and received the maximum grade.

The current version focuses on making the application easy to demonstrate, maintain and deploy. It is not intended to replace a production backend, but it provides a clean frontend only version suitable for portfolio presentation.

## Future Improvements

- Add automated tests for key user flows
- Improve accessibility warnings and form labels
- Replace Create React App with Vite or Next.js
- Add stronger form validation
- Add real image preview support for newly created products
- Reconnect to a production API when backend infrastructure is available
