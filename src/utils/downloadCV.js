import {
  profile,
  about,
  education,
  experience,
  certifications,
  resumeSkills,
} from '../data/portfolio'

/** Turns "Jannrey Salioa" into "jannrey-salioa". */
function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * Builds a self-contained, print-ready HTML resume from the portfolio data
 * and triggers a download. No external libraries required.
 *
 * The downloaded file can be opened in any browser and printed to PDF
 * (Ctrl + P -> Save as PDF).
 */
export function downloadCV() {
  const { name, role, email, phone, location } = profile

  const educationRows = education
    .map(
      (item) => `
        <div class="row">
          <div class="when">${escapeHtml(item.period)}</div>
          <div class="what">
            <h3>${escapeHtml(item.title)}</h3>
            <p class="org">${escapeHtml(item.org)}</p>
            <p>${escapeHtml(item.detail)}</p>
          </div>
        </div>`,
    )
    .join('')

  const experienceRows = experience
    .map(
      (item) => `
        <div class="row">
          <div class="when">${escapeHtml(item.period)}</div>
          <div class="what">
            <h3>${escapeHtml(item.title)}</h3>
            <p class="org">${escapeHtml(item.org)}</p>
            <p>${escapeHtml(item.detail)}</p>
            ${
              item.points
                ? `<ul>${item.points.map((p) => `<li>${escapeHtml(p)}</li>`).join('')}</ul>`
                : ''
            }
          </div>
        </div>`,
    )
    .join('')

  const skillBlocks = Object.entries(resumeSkills)
    .map(
      ([group, list]) => `
        <div class="skill-group">
          <h4>${escapeHtml(group)}</h4>
          <p>${list.map(escapeHtml).join(' &middot; ')}</p>
        </div>`,
    )
    .join('')

  const certList = certifications
    .map(
      (c) =>
        `<li><strong>${escapeHtml(c.title)}</strong> — ${escapeHtml(c.org)} (${escapeHtml(c.year)})</li>`,
    )
    .join('')

  const interestList = about.interests.map(escapeHtml).join(' &middot; ')

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(name)} — Curriculum Vitae</title>
<style>
  :root { --ink:#0f172a; --muted:#475569; --line:#e2e8f0; --brand:#4f46e5; }
  * { box-sizing: border-box; }
  body {
    margin: 0; padding: 40px 28px; color: var(--ink); background: #fff;
    font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.55; font-size: 14px;
  }
  .page { max-width: 860px; margin: 0 auto; }
  header { border-bottom: 3px solid var(--brand); padding-bottom: 18px; margin-bottom: 26px; }
  h1 { margin: 0; font-size: 30px; letter-spacing: -0.5px; }
  .role { margin: 4px 0 10px; color: var(--brand); font-weight: 600; }
  .meta { color: var(--muted); font-size: 13px; }
  .meta span { margin-right: 14px; white-space: nowrap; }
  h2 {
    font-size: 13px; text-transform: uppercase; letter-spacing: 1.4px;
    color: var(--brand); margin: 30px 0 14px; padding-bottom: 6px;
    border-bottom: 1px solid var(--line);
  }
  .row { display: flex; gap: 20px; margin-bottom: 18px; }
  .when { flex: 0 0 130px; color: var(--muted); font-size: 12.5px; font-weight: 600; padding-top: 2px; }
  .what { flex: 1 1 auto; }
  h3 { margin: 0 0 2px; font-size: 15px; }
  .org { margin: 0 0 4px; color: var(--brand); font-size: 13px; font-weight: 600; }
  p { margin: 0 0 6px; }
  ul { margin: 6px 0 0; padding-left: 18px; }
  li { margin-bottom: 2px; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 28px; }
  .skill-group h4 { margin: 0 0 2px; font-size: 13px; }
  .skill-group p { color: var(--muted); font-size: 12.5px; }
  .interests { color: var(--muted); }
  footer { margin-top: 34px; padding-top: 12px; border-top: 1px solid var(--line); color: var(--muted); font-size: 11.5px; }
  @media print {
    body { padding: 0; font-size: 12.5px; }
    h2 { page-break-after: avoid; }
    .row { page-break-inside: avoid; }
  }
</style>
</head>
<body>
  <div class="page">
    <header>
      <h1>${escapeHtml(name)}</h1>
      <p class="role">${escapeHtml(role)}</p>
      <p class="meta">
        <span>✉ ${escapeHtml(email)}</span>
        <span>✆ ${escapeHtml(phone)}</span>
        <span>⚲ ${escapeHtml(location)}</span>
      </p>
    </header>

    <h2>Profile</h2>
    <p>${escapeHtml(about.paragraphs[0])}</p>

    <h2>Education</h2>
    ${educationRows}

    <h2>Experience</h2>
    ${experienceRows}

    <h2>Skills</h2>
    <div class="grid">${skillBlocks}</div>

    <h2>Certifications &amp; Trainings</h2>
    <ul>${certList}</ul>

    <h2>Interests</h2>
    <p class="interests">${interestList}</p>

    <footer>
      Generated from the e-portfolio of ${escapeHtml(name)}. Open this file in a browser and print
      (Ctrl + P → Save as PDF) to create a PDF copy.
    </footer>
  </div>
</body>
</html>`

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${slugify(name)}-cv.html`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  setTimeout(() => URL.revokeObjectURL(url), 1500)
}
