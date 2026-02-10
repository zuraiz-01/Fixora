# 🛠️✨ Fixora - Home Services Website

**Fixora** is a modern, responsive, and animated **React + Vite** landing website for home services.  
It delivers a premium dark UI with neon accents, rich motion, and smooth section-based storytelling. 🌌⚡

---

## 🌟 Website Overview

- 🏢 Brand: **Fixora**
- 🎯 Goal: Trust-building service website for handyman/home maintenance
- 🎨 Theme: Dark + lime accent + glassy cards + subtle grid ambience
- 📱 Experience: Mobile-first responsiveness with desktop polish
- 🧭 Flow: Scroll-driven landing page with strong CTA journey

---

## 🧩 What Makes This Website Special

- 🎨 Fully custom UI (not starter template look)
- 🌠 Scroll reveal animations with staggered timing
- 🖱️ Interactive hover effects on cards/buttons/icons
- 🧠 Smart section hierarchy for conversion-focused layout
- 🔗 Working links, buttons, and smooth navigation
- ⬆️ Floating back-to-top button on scroll
- 📩 Newsletter form feedback (frontend validation + success state)
- 🅵 Custom favicon with **F** branding

---

## 🧱 Full Page Sections

- 🏠 Hero Banner
- 👷 About Experts
- 🛠️ Services Grid
- 📊 Results & Stats
- ⚙️ Work Process (step cards)
- 💬 Client Testimonials
- ❓ FAQ (collapsible)
- 📬 Footer (quick links + contact + newsletter)

---

## 🎬 Website Interaction Experience

- 🧭 Navbar links smooth scroll to sections
- 📱 Mobile menu button toggles navigation drawer
- 🎯 CTA buttons jump to useful target sections
- ☎️ Phone link opens dialer (`tel:`)
- 📧 Email link opens mail client (`mailto:`)
- 🌐 Social links open external pages
- 🔼 Back-to-top button appears after scrolling
- ✨ Animations respect reduced-motion preference for accessibility

---

## 🖼️ Visual Language

- 🌌 Ambient radial background glows
- 🟢 Lime highlight color for action and emphasis
- 🧱 Card-based content blocks with hover lift
- 🔠 Bold heading typography + clean readable body copy
- 📐 Spacious layout system with responsive breakpoints

---

## 🛠️ Tech Stack

- ⚛️ React
- ⚡ Vite
- 🎯 Vanilla CSS (custom classes, animations, responsive styling)

---

## 🚀 Run Locally

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

### 3) Production build

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

---

## 📂 Project Structure

```text
.
├── netlify.toml
├── public/
│   ├── _redirects
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── BackToTopButton.jsx
│   │   │   └── CursorLayer.jsx
│   │   └── sections/
│   │       ├── Header.jsx
│   │       ├── HeroSection.jsx
│   │       ├── AboutSection.jsx
│   │       ├── ServicesSection.jsx
│   │       ├── TickerSection.jsx
│   │       ├── StatsSection.jsx
│   │       ├── ProcessSection.jsx
│   │       ├── TestimonialsSection.jsx
│   │       ├── FaqSection.jsx
│   │       └── FooterSection.jsx
│   ├── data/
│   │   └── siteContent.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

---

## 🎛️ Customization Guide

- ✍️ Update section text/content in `src/data/siteContent.js`
- 🧩 Update layout blocks in `src/components/sections/*`
- 🎨 Update theme, spacing, and animations in `src/App.css`
- 🖼️ Replace website images in `public/images`
- 🅵 Replace/update favicon in `public/favicon.svg`
- 📞 Change contact/email in `src/components/sections/HeroSection.jsx` and `src/components/sections/FooterSection.jsx`

---

## 🌍 Netlify Deployment

### Option 1: Netlify UI (Recommended) 🚀

1. Push this project to GitHub/GitLab/Bitbucket.
2. In Netlify, click **Add new site** → **Import an existing project**.
3. Build settings (already configured via `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy 🎉

### Option 2: Manual Deploy 📦

```bash
npm run build
```

Then upload the generated `dist/` folder to Netlify.

### SPA Fallback ✅

`public/_redirects` is included:

```text
/* /index.html 200
```

This ensures deep links/routes work correctly on Netlify.

---

## 🔧 Functional Features Checklist

- ✅ Smooth section navigation
- ✅ Mobile menu toggle
- ✅ Working CTAs
- ✅ Interactive cards and icons
- ✅ FAQ accordion behavior
- ✅ Newsletter message feedback
- ✅ Back-to-top floating action
- ✅ Build-ready production output

---

## 📌 Notes

- 🧪 Current newsletter flow is frontend-only (no backend API yet)
- 🔌 Backend can be integrated with Node/Firebase/Supabase easily
- 🛡️ Good base for service business, agency, or portfolio conversion page

---

## 👤 Credits

- 🏷️ Brand: **Fixora**
- ✍️ Copyright: **Zuraiz**

---

## 📜 License

This project is for personal/client use.  
Update license terms before public redistribution. ✅
