/* ============================================================================
 *  PORTFOLIO DATA  —  EDIT THIS FILE
 * ----------------------------------------------------------------------------
 *  Everything shown on the website is driven by the values below.
 *  Replace the placeholder text with your own details and the whole
 *  website updates automatically. No other file needs to change.
 * ========================================================================== */

/* ----------------------------------------------------------------------------
 * 1. PROFILE  (Hero / Home + Footer + Contact)
 * -------------------------------------------------------------------------- */
export const profile = {
  name: 'Jannrey Salioa', // TODO: your full name
  firstName: 'Jannrey', // used in the welcome message
  monogram: 'JS', // 2 letters shown in the logo + project placeholders
  role: 'BS Information Technology Student', // main headline role
  roles: [
    'BS Information Technology Student',
    'Front-End Developer',
    'ReactJS Learner',
    'UI / UX Enthusiast',
  ],
  tagline:
    'I build clean, responsive, and user-friendly web interfaces with ReactJS and Tailwind CSS.',
  location: 'Cavite, Philippines',
  email: 'jannrey.salioa@example.com', // TODO: your email
  phone: '+63 912 345 6789', // TODO: your number
  availability: 'Open to internships and freelance projects',
  intro: [
    "Hello and welcome to my e-portfolio! I'm a Bachelor of Science in Information Technology student at Cavite State University with a genuine passion for building things for the web.",
    'I enjoy turning ideas and rough sketches into working interfaces — paying attention to layout, spacing, colour, and the small interactions that make a website feel polished and easy to use.',
  ],
  /* Quick numbers displayed under the hero. Edit or remove freely. */
  stats: [
    { label: 'Projects Built', value: '12+' },
    { label: 'Years Learning', value: '3' },
    { label: 'Technologies', value: '10+' },
    { label: 'CvSU GWA', value: '1.45' },
  ],
  /* Path to a real CV file placed inside /public (optional).
     Leave as '' to use the built-in "Download CV" generator instead. */
  resumeFile: '',
}

/* ----------------------------------------------------------------------------
 * 2. SOCIAL LINKS
 *    `icon` must be one of: github | linkedin | facebook | mail | phone | globe
 * -------------------------------------------------------------------------- */
export const socials = [
  { label: 'GitHub', icon: 'github', url: 'https://github.com/your-username' },
  { label: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/your-username' },
  { label: 'Facebook', icon: 'facebook', url: 'https://facebook.com/your-username' },
  { label: 'Email', icon: 'mail', url: 'mailto:jannrey.salioa@example.com' },
]

/* ----------------------------------------------------------------------------
 * 3. NAVIGATION  (ids must match the section ids rendered in App.jsx)
 * -------------------------------------------------------------------------- */
export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

/* ----------------------------------------------------------------------------
 * 4. ABOUT  — background, skills and interests
 * -------------------------------------------------------------------------- */
export const about = {
  paragraphs: [
    'I am currently taking up BS Information Technology at Cavite State University. My journey into programming started with simple HTML pages, and it quickly grew into a fascination with how modern applications are structured, styled, and made interactive.',
    'Today I focus mostly on front-end development. I like breaking a design into reusable React components, styling them with Tailwind CSS utilities, and wiring up state so the interface responds instantly to the user. I am also comfortable working with the fundamentals of back-end logic and databases.',
    'Outside of class, I spend my time rebuilding interfaces I admire, joining online coding challenges, and reading documentation to keep my skills current. I care about writing code that is readable, accessible, and easy for a teammate to pick up.',
  ],
  /* Skill groups rendered as animated progress bars. level: 0 - 100 */
  skillGroups: [
    {
      title: 'Front-End',
      skills: [
        { name: 'HTML5 & Semantic Markup', level: 92 },
        { name: 'CSS3 & Responsive Layout', level: 88 },
        { name: 'JavaScript (ES6+)', level: 82 },
        { name: 'ReactJS', level: 78 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      title: 'Back-End & Tools',
      skills: [
        { name: 'Node.js & npm', level: 70 },
        { name: 'PHP & MySQL', level: 68 },
        { name: 'Git & GitHub', level: 80 },
        { name: 'REST APIs', level: 72 },
        { name: 'Figma / UI Design', level: 75 },
      ],
    },
  ],
  interests: [
    'Web Development',
    'UI / UX Design',
    'Open Source',
    'Mobile Apps',
    'Game Development',
    'Artificial Intelligence',
    'Photography',
    'Basketball',
  ],
  /* Short facts shown as a small grid beside the photo. */
  facts: [
    { icon: 'cap', label: 'Program', value: 'BS Information Technology' },
    { icon: 'school', label: 'University', value: 'Cavite State University' },
    { icon: 'pin', label: 'Based in', value: 'Cavite, Philippines' },
    { icon: 'spark', label: 'Focus', value: 'Front-End Development' },
  ],
}

/* ----------------------------------------------------------------------------
 * 5. PROJECTS / WORK SAMPLES
 *    - `image`: put a file in /public/projects and set e.g. '/projects/app.png'.
 *      Leave as '' to use an automatic gradient placeholder.
 *    - `accent`: any Tailwind gradient utility classes for the placeholder art.
 * -------------------------------------------------------------------------- */
export const projects = [
  {
    id: 'student-portal',
    title: 'CvSU Student Portal Redesign',
    category: 'Web App',
    year: '2026',
    summary:
      'A modernised, mobile-first redesign of the university student portal with a dashboard, grade viewer, and announcement feed.',
    description:
      'The original portal was difficult to use on phones. I rebuilt the interface as a component-driven React single page application with a collapsible sidebar, a summary dashboard, and accessible data tables. The layout adapts from a single column on mobile up to a multi-panel desktop view.',
    highlights: [
      'Reusable dashboard card and data-table components',
      'Fully responsive layout from 320px to 1920px',
      'Keyboard-accessible navigation and focus states',
      'Skeleton loading states while data is fetched',
    ],
    tech: ['ReactJS', 'Tailwind CSS', 'REST API'],
    image: '',
    accent: 'from-indigo-500 via-violet-500 to-purple-600',
    demo: '',
    repo: 'https://github.com/your-username',
    featured: true,
  },
  {
    id: 'expense-tracker',
    title: 'Personal Expense Tracker',
    category: 'Web App',
    year: '2025',
    summary:
      'A budgeting tool that records daily expenses, groups them by category, and visualises spending in real time.',
    description:
      'Built to practise React state management. Entries are held in state, filtered by month and category, and summarised with dynamically calculated totals. Data is persisted to localStorage so nothing is lost on refresh.',
    highlights: [
      'Add, edit, and delete transactions with instant UI updates',
      'Dynamic totals and category breakdowns computed from state',
      'Custom SVG donut chart — no chart library required',
      'localStorage persistence and CSV export',
    ],
    tech: ['ReactJS', 'Tailwind CSS', 'localStorage'],
    image: '',
    accent: 'from-emerald-500 via-teal-500 to-cyan-600',
    demo: '',
    repo: 'https://github.com/your-username',
    featured: true,
  },
  {
    id: 'enrollment-system',
    title: 'Online Enrollment System',
    category: 'School Project',
    year: '2025',
    summary:
      'A capstone-style enrolment system with subject scheduling, automatic conflict detection, and printable summaries.',
    description:
      'A team project where I handled the front-end and part of the database design. The interface guides a student through subject selection and blocks conflicting schedules before submission, with clear inline feedback on every step.',
    highlights: [
      'Multi-step form flow with per-step validation',
      'Schedule conflict detection before submission',
      'Printable enrolment summary (print-optimised CSS)',
      'Role-based admin and student views',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    image: '',
    accent: 'from-amber-500 via-orange-500 to-rose-500',
    demo: '',
    repo: 'https://github.com/your-username',
    featured: false,
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    category: 'Web App',
    year: '2025',
    summary:
      'A clean weather dashboard that fetches live forecasts for any city with search, saved locations, and unit toggling.',
    description:
      'A project focused on asynchronous JavaScript and error handling. It queries a public weather API, shows a loading state during requests, and handles network errors gracefully with a helpful message instead of a blank screen.',
    highlights: [
      'Live data from a public REST API',
      'Debounced city search to limit requests',
      'Loading, empty and error states handled explicitly',
      'Saved locations stored between sessions',
    ],
    tech: ['ReactJS', 'REST API', 'Tailwind CSS'],
    image: '',
    accent: 'from-sky-500 via-blue-500 to-indigo-600',
    demo: '',
    repo: 'https://github.com/your-username',
    featured: false,
  },
  {
    id: 'task-manager',
    title: 'Task Manager Mobile UI',
    category: 'UI / UX',
    year: '2024',
    summary:
      'A mobile task-manager concept designed in Figma and prototyped as an interactive click-through.',
    description:
      'A design-first project. I mapped the user flow, built a small design system (type scale, spacing, colour tokens), then produced high-fidelity screens and a working prototype to test the drag-to-reorder interaction.',
    highlights: [
      'Complete design system with reusable tokens',
      'High-fidelity screens for light and dark themes',
      'Interactive prototype used for usability testing',
      'Documented accessibility contrast checks',
    ],
    tech: ['Figma', 'Design Systems', 'Prototyping'],
    image: '',
    accent: 'from-fuchsia-500 via-pink-500 to-rose-500',
    demo: '',
    repo: '',
    featured: false,
  },
  {
    id: 'portfolio-site',
    title: 'This E-Portfolio Website',
    category: 'Web App',
    year: '2026',
    summary:
      'The site you are viewing now — a single page React application styled entirely with Tailwind CSS.',
    description:
      'Created for DCIT 26. It demonstrates reusable components, controlled forms with validation, conditional rendering, state management with useState, scroll-spy navigation, dark mode, and scroll-triggered animations.',
    highlights: [
      'Reusable, data-driven section and card components',
      'Contact form with live validation and success state',
      'Dark mode persisted to localStorage',
      'Scroll-spy nav, reveal-on-scroll and back-to-top button',
    ],
    tech: ['ReactJS', 'Tailwind CSS', 'Vite', 'Vercel'],
    image: '',
    accent: 'from-violet-500 via-indigo-500 to-blue-600',
    demo: '',
    repo: 'https://github.com/your-username',
    featured: true,
  },
]

/* ----------------------------------------------------------------------------
 * 6. RESUME  — education, experience, certifications, skills
 * -------------------------------------------------------------------------- */
export const education = [
  {
    id: 'cvs',
    period: '2024 — Present',
    title: 'BS Information Technology',
    org: 'Cavite State University — Tanza Campus',
    detail:
      'Major focus on application development, web technologies, data structures, and systems analysis. Consistent Dean\'s Lister.',
    tags: ['Programming', 'Web Development', 'Database Systems'],
  },
  {
    id: 'shs',
    period: '2022 — 2024',
    title: 'Senior High School — Computer Programming Strand',
    org: 'Tanza National Trade School',
    detail:
      'Specialised in Science, Technology, Engineering and Mathematics with a research capstone on educational technology.',
    tags: ['STEM', 'Research', 'Mathematics'],
  },
  {
    id: 'jhs',
    period: '2018 — 2022',
    title: 'Junior High School',
    org: 'Luis Y. Ferrer National High School',
    detail:
      'Completed with honors. First exposure to programming through ICT electives and school computer club activities.',
    tags: ['With Honors', 'ICT Club'],
  },
]

export const experience = [
  {
    id: 'freelance',
    period: '2025 — Present',
    title: 'Freelance Front-End Developer',
    org: 'Self-employed / Remote',
    detail:
      'Build and maintain responsive landing pages and small web applications for local clients using ReactJS and Tailwind CSS. Handle everything from layout implementation to deployment.',
    points: [
      'Delivered 5+ client websites on time',
      'Converted Figma designs into responsive, accessible interfaces',
      'Set up deployment pipelines on Vercel',
    ],
    tags: ['ReactJS', 'Tailwind CSS', 'Vercel'],
  },
  {
    id: 'org-officer',
    period: '2025 — 2026',
    title: 'Technical Officer',
    org: 'IT Students Society — CvSU',
    detail:
      'Handle the organisation\'s website, registration forms, and digital materials for events and seminars.',
    points: [
      'Maintained the organisation website and event pages',
      'Organised an introductory web development workshop',
    ],
    tags: ['Leadership', 'Web Development', 'Documentation'],
  },
  {
    id: 'intern',
    period: '2025',
    title: 'IT Support Intern (OJT)',
    org: 'Local Government Unit — IT Department',
    detail:
      'Assisted the IT team with hardware setup, basic network troubleshooting, and digitising paper records into spreadsheets.',
    points: [
      'Digitised 500+ records into structured spreadsheets',
      'Provided day-to-day hardware and software support',
    ],
    tags: ['Technical Support', 'Data Entry', 'Networking'],
  },
]

export const certifications = [
  { id: 'c1', title: 'Responsive Web Design', org: 'freeCodeCamp', year: '2024' },
  { id: 'c2', title: 'JavaScript Algorithms & Data Structures', org: 'freeCodeCamp', year: '2025' },
  { id: 'c3', title: 'React Basics', org: 'Online Course', year: '2025' },
  { id: 'c4', title: 'UI/UX Fundamentals', org: 'Online Course', year: '2026' },
]

/* Flat skill list shown in the Resume "Skills" tab. */
export const resumeSkills = {
  Languages: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'PHP', 'SQL', 'Python (basic)'],
  Frameworks: ['ReactJS', 'Tailwind CSS', 'Node.js', 'Express (basic)'],
  Tools: ['Git & GitHub', 'Vite', 'Figma', 'VS Code', 'Vercel', 'MySQL'],
  Soft: ['Teamwork', 'Problem Solving', 'Time Management', 'Communication', 'Adaptability'],
}

/* ----------------------------------------------------------------------------
 * 7. CONTACT FORM
 * -------------------------------------------------------------------------- */
export const contact = {
  heading: 'Let\'s build something together',
  blurb:
    'Whether it is an internship, a school collaboration, or a freelance project — my inbox is always open. Fill out the form below and I will get back to you as soon as I can.',
  details: [
    { icon: 'mail', label: 'Email', value: 'jannrey.salioa@example.com', href: 'mailto:jannrey.salioa@example.com' },
    { icon: 'phone', label: 'Phone', value: '+63 912 345 6789', href: 'tel:+639123456789' },
    { icon: 'pin', label: 'Location', value: 'Cavite, Philippines', href: '' },
    { icon: 'clock', label: 'Response Time', value: 'Usually within 24 hours', href: '' },
  ],
  subjects: [
    'Internship Opportunity',
    'Freelance Project',
    'School Collaboration',
    'General Inquiry',
    'Other',
  ],
}
