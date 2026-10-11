# E-Portfolio Website — ReactJS + Tailwind CSS

A single-page e-portfolio built for **DCIT 26: Application Development and Emerging Technologies 2** (Midterm Laboratory, First Semester, SY 2026-2027).

- **ReactJS** — application structure and reusable components
- **Tailwind CSS** — styling, layout, responsive design and animations
- **React state & event handling** — interactive and dynamic behaviour
- **Vite** — fast development server and production build
- **Vercel** — deployment target

---

## 1. Required Sections

| Section | Where | What it contains |
| --- | --- | --- |
| **Home (Dashboard)** | `src/components/Hero.jsx` | Welcome message, introduction, navigation menu, CTA buttons, quick stats |
| **About Me** | `src/components/About.jsx` | Personal background, animated skill bars, interests, quick facts |
| **Projects / Work Samples** | `src/components/Projects.jsx` | Project cards with descriptions, images/placeholders, and expandable details |
| **Resume / CV** | `src/components/Resume.jsx` | Education, experience, skills and certifications in tabs |
| **Contact Information** | `src/components/Contact.jsx` | Email/phone/location/social links plus a validated contact form |

Also included: a responsive `Navbar`, a `Footer`, a floating `BackToTop` button and a `SectionHeading` component.

---

## 2. ReactJS Interactive Features

The brief requires at least three; this project implements **eight**:

1. **Download CV button** — `src/utils/downloadCV.js` builds a print-ready resume from the portfolio data and triggers a browser download on click.
2. **View More / Hide Details** — each project card toggles a details panel using `useState` and conditional rendering.
3. **Project category filter** — the All / Web App / School Project / UI-UX buttons filter the grid from React state.
4. **Contact form handling and validation** — `src/components/Contact.jsx` validates name, email, subject and message, shows inline errors, disables the button while "sending", and shows a success state. Values are stored in `useState` and saved to `localStorage`.
5. **Resume tabs** — Education / Experience / Skills panels switch with `useState`.
6. **Dark mode toggle** — adds/removes the `dark` class on `<html>`, persisted to `localStorage`.
7. **Scroll-spy navigation** — `src/hooks/useScrollSpy.js` highlights the active nav link as you scroll.
8. **Scroll animations** — `src/hooks/useInView.js` reveals sections and animates the skill bars with Tailwind transitions, plus a typewriter effect in the hero and a reading-progress bar in the navbar.

---

## 3. Getting Started (local)

```bash
# install dependencies
npm install

# start the development server
npm run dev          # http://localhost:5173

# create a production build
npm run build

# preview the production build locally
npm run preview      # http://localhost:4173
```

Requirements: **Node.js 18 or newer** (tested on Node 24).

---

## 4. Personalising the Content

**Everything you need to change lives in one file:**

```
src/data/portfolio.js
```

It contains your profile, navigation, skills, projects, education, experience, certifications and contact details. Update the placeholder values (name, email, phone, links, projects) and the whole site updates automatically. Look for the `TODO:` comments.

### Adding project screenshots

1. Put the image inside `public/projects/`, e.g. `public/projects/expense-tracker.png`
2. Set the project's `image` field in `src/data/portfolio.js`:

```js
{ id: 'expense-tracker', image: '/projects/expense-tracker.png', /* ... */ }
```

Leave `image: ''` to keep the automatic gradient placeholder.

### Using your own CV file instead of the generated one

1. Put your PDF in `public/`, e.g. `public/Jannrey-Salioa-CV.pdf`
2. Set `resumeFile: '/Jannrey-Salioa-CV.pdf'` in the `profile` object.

---

## 5. Deploying to Vercel

### Option A — Vercel dashboard (recommended)

1. Push this folder to a GitHub repository.
2. Go to <https://vercel.com/new> and import the repository.
3. Vercel auto-detects **Vite**. Confirm the settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**. `vercel.json` in the repo already sets these values.
5. Open the generated URL (for example `https://your-project.vercel.app`) to verify.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel            # preview deployment
vercel --prod     # production deployment
```

---

## 6. Testing Checklist

Verified locally with `npm run dev` and `npm run build`, and again on the deployed Vercel URL:

- [x] All navigation links scroll to the correct section and highlight the active link
- [x] Mobile hamburger menu opens/closes; body scroll locks while open
- [x] Responsive layout at 320px, 768px, 1024px and 1440px widths
- [x] Dark mode toggle works and the choice survives a page refresh
- [x] "View More" expands/collapses project details
- [x] Project category filter updates the grid and the result count
- [x] Resume tabs switch panels correctly
- [x] Contact form blocks submission when fields are empty or the email is invalid
- [x] Contact form shows inline errors, a loading state and a success message
- [x] "Download CV" downloads a valid, print-ready HTML file
- [x] Back-to-top button appears after scrolling and returns to the top
- [x] Production build completes with no errors

---

## 7. Project Structure

```
portfolio/
├─ index.html
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ vercel.json
├─ public/
│  ├─ favicon.svg
│  └─ projects/            # project screenshots (optional)
└─ src/
   ├─ main.jsx
   ├─ App.jsx              # layout + dark mode + scroll-spy
   ├─ index.css            # Tailwind layers and shared component classes
   ├─ data/
   │  └─ portfolio.js      # >>> all editable content <<<
   ├─ hooks/
   │  ├─ useInView.js
   │  └─ useScrollSpy.js
   ├─ utils/
   │  └─ downloadCV.js
   └─ components/
      ├─ Navbar.jsx
      ├─ Hero.jsx
      ├─ About.jsx
      ├─ Projects.jsx
      ├─ Resume.jsx
      ├─ Contact.jsx
      ├─ Footer.jsx
      ├─ BackToTop.jsx
      ├─ SectionHeading.jsx
      ├─ SkillBar.jsx
      └─ Icons.jsx
```

---

## 8. CvSU Vision & Mission

**Vision** — The premier university in historic Cavite globally recognized for excellence in character development, academics, research, innovation and sustainable community engagement.

**Mission** — Cavite State University shall provide excellent, equitable, and relevant educational opportunities in the arts, sciences, and technology through quality instruction and responsive research and development activities. It shall produce professional, skilled, and morally upright individuals for global competitiveness.
