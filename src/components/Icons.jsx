/* ============================================================================
 *  Inline SVG icon set — no icon library dependency required.
 *  Every icon inherits `currentColor` and sizes from the parent font size
 *  unless a `className` overriding width/height is supplied.
 * ========================================================================== */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': true,
}

function Svg({ children, className = 'h-5 w-5', ...rest }) {
  return (
    <svg {...base} className={className} {...rest}>
      {children}
    </svg>
  )
}

export const MenuIcon = (p) => (
  <Svg {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </Svg>
)

export const CloseIcon = (p) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Svg>
)

export const SunIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </Svg>
)

export const MoonIcon = (p) => (
  <Svg {...p}>
    <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
  </Svg>
)

export const DownloadIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5" />
    <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
  </Svg>
)

export const MailIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 7l8.5 6 8.5-6" />
  </Svg>
)

export const PhoneIcon = (p) => (
  <Svg {...p}>
    <path d="M4 4h4l2 5-2.5 1.5a12 12 0 006 6L15 14l5 2v4a1 1 0 01-1.1 1A17 17 0 013 5.1A1 1 0 014 4z" />
  </Svg>
)

export const PinIcon = (p) => (
  <Svg {...p}>
    <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </Svg>
)

export const ClockIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </Svg>
)

export const ArrowRightIcon = (p) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
)

export const ArrowUpIcon = (p) => (
  <Svg {...p}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </Svg>
)

export const ChevronDownIcon = (p) => (
  <Svg {...p}>
    <path d="M6 9l6 6 6-6" />
  </Svg>
)

export const ExternalIcon = (p) => (
  <Svg {...p}>
    <path d="M14 4h6v6M20 4l-8.5 8.5" />
    <path d="M18 14v4a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h4" />
  </Svg>
)

export const CheckIcon = (p) => (
  <Svg {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Svg>
)

export const AlertIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5v5.5M12 16.4v.2" />
  </Svg>
)

export const CodeIcon = (p) => (
  <Svg {...p}>
    <path d="M8.5 8L4.5 12l4 4M15.5 8l4 4-4 4M13.5 5l-3 14" />
  </Svg>
)

export const CapIcon = (p) => (
  <Svg {...p}>
    <path d="M2.5 9L12 4.5 21.5 9 12 13.5 2.5 9z" />
    <path d="M6.5 11v5c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-5" />
  </Svg>
)

export const SchoolIcon = (p) => (
  <Svg {...p}>
    <path d="M4 21V9l8-5 8 5v12" />
    <path d="M9 21v-6h6v6M4 21h16" />
  </Svg>
)

export const SparkIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
    <path d="M18.5 16.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z" />
  </Svg>
)

export const BriefcaseIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="7.5" width="18" height="12" rx="2" />
    <path d="M9 7.5V6a2 2 0 012-2h2a2 2 0 012 2v1.5M3 12.5h18" />
  </Svg>
)

export const AwardIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="M8.2 13.5L7 21l5-2.6L17 21l-1.2-7.5" />
  </Svg>
)

export const FolderIcon = (p) => (
  <Svg {...p}>
    <path d="M3 7.5A2 2 0 015 5.5h3.6l1.8 2.2H19a2 2 0 012 2v7.8a2 2 0 01-2 2H5a2 2 0 01-2-2V7.5z" />
  </Svg>
)

export const SendIcon = (p) => (
  <Svg {...p}>
    <path d="M21 3L10.5 13.5M21 3l-7 18-3.5-7.5L3 10l18-7z" />
  </Svg>
)

export const SpinnerIcon = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" className={`animate-spin ${className}`} aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2.5" />
    <path
      d="M21 12a9 9 0 00-9-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
)

/* ---- Brand / social icons (filled, not stroked) ---- */

export const GithubIcon = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.79-4.58 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.03 10.03 0 0022 12.25C22 6.58 17.52 2 12 2z" />
  </svg>
)

export const LinkedinIcon = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M6.94 8.5H3.56V21h3.38V8.5zM5.25 3a1.96 1.96 0 100 3.92 1.96 1.96 0 000-3.92zM20.44 21h-3.37v-6.09c0-1.45-.52-2.44-1.82-2.44-.99 0-1.58.67-1.84 1.31-.1.23-.12.55-.12.87V21H9.92s.05-11.34 0-12.5h3.37v1.77c.45-.69 1.25-1.68 3.04-1.68 2.22 0 3.89 1.45 3.89 4.57V21z" />
  </svg>
)

export const FacebookIcon = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-7.5h2.55l.38-2.96H13.5V8.66c0-.86.24-1.44 1.47-1.44h1.57V4.57c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.9v2.19H7.9v2.96h2.56V21h3.04z" />
  </svg>
)

export const GlobeIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
  </Svg>
)

/* ---- Named lookup used by the contact details / socials data ---- */
export const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  pin: PinIcon,
  clock: ClockIcon,
  globe: GlobeIcon,
  cap: CapIcon,
  school: SchoolIcon,
  spark: SparkIcon,
  code: CodeIcon,
  briefcase: BriefcaseIcon,
  award: AwardIcon,
  folder: FolderIcon,
}

export function Icon({ name, className }) {
  const Component = iconMap[name] || GlobeIcon
  return <Component className={className} />
}
