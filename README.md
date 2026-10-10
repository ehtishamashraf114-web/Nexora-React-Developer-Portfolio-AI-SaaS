# Nexora — Premium React Developer Portfolio & AI SaaS Dashboard

**Nexora** is a production-quality web application built with React 19, TypeScript, and Tailwind CSS. It seamlessly pairs a developer portfolio with an interactive, enterprise-grade SaaS analytics telemetry dashboard.

---

## 🚀 Key Highlights & Architectural Strengths

- **Zero-Broken-Image Architecture**: All mockups, illustrations, and UI visuals are rendered natively using vector SVG and Tailwind CSS. No external image CDNs, guaranteeing **100% reliable deploys on Vercel and Netlify** without missing assets or 404s.
- **Interactive Flagship Projects**:
  1. **AI Analytics Dashboard** (`/dashboard` route) — Live-style Recharts analytics, dynamic date-range filtering (Today, 7D, 30D, 90D, Year), searchable and sortable customer transactions table with real CSV export, and persistent LocalStorage settings.
  2. **CarePulse Healthcare Platform** — Doctor profiles, real-time date and slot selection, multi-step intake validation, and appointment booking simulation.
  3. **The Quran Academy Hub** — Structured curriculum catalog (Noorani Qaida, Tajweed Mastery, Hifz, Tafseer), interactive audio pronunciation demo, and direct WhatsApp 1-click enrollment.
  4. **AuraCraft E-Commerce Storefront** — Real-time search, category filters, price sorting, sliding cart drawer, coupon code validation (`NEXORA10`), and interactive checkout simulation with confetti.
- **Skills & Roadmap Transparency**: Clear distinction between production-ready core proficiencies and active learning technologies.
- **Performance & Accessibility**: WCAG AA color contrast, tabular numerals (`tabular-nums`) for jitter-free telemetry, zero horizontal overflow, and under 200ms interaction feedback.

---

## 🛠️ Tech Stack

- **React 19** with Vite
- **TypeScript**
- **Tailwind CSS v4**
- **React Router v7**
- **Recharts** (Interactive Area, Bar, and Donut charts)
- **Lucide React** (Icons)
- **Canvas Confetti**
- **LocalStorage API** (Persistent preferences)

---

## 📦 Local Installation & Development

```bash
# 1. Clone repository
git clone <your-repo-url>
cd nexora-portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Create production build
npm run build
```

---

## 🌐 Deploying to Vercel & Netlify

### Deploying on Vercel:
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**. (The included `vercel.json` ensures all client-side routes like `/dashboard` work seamlessly!)

### Deploying on Netlify:
1. Go to [netlify.com](https://netlify.com) and import your Git repo.
2. Build Command: `npm run build`
3. Publish Directory: `dist`
4. Click **Deploy Site**. (The included `public/_redirects` ensures all client-side routes redirect to `index.html` with HTTP 200!)

---

## 📝 Customizing Your Information

To personalize the portfolio with your name, email, GitHub, LinkedIn, and WhatsApp:
Open `src/data/portfolioData.ts` and update the `DEVELOPER_PROFILE` object:

```typescript
export const DEVELOPER_PROFILE = {
  name: 'Your Name',
  role: 'React Developer & Frontend Engineer',
  email: 'your-email@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
  whatsapp: '+1234567890',
  ...
};
```
