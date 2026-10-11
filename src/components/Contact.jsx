import { useEffect, useRef, useState } from 'react'
import SectionHeading from './SectionHeading'
import {
  Icon,
  SendIcon,
  CheckIcon,
  AlertIcon,
  SpinnerIcon,
} from './Icons'
import { contact, profile, socials } from '../data/portfolio'

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/

/** Pure validation function -> returns an object of field: message pairs. */
function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  } else if (values.name.trim().length < 2) {
    errors.name = 'Your name is a little too short.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'That does not look like a valid email address.'
  }

  if (!values.subject) {
    errors.subject = 'Please choose a subject.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please write a message.'
  } else if (values.message.trim().length < 20) {
    errors.message = `Please write at least 20 characters (${values.message.trim().length}/20).`
  } else if (values.message.length > 600) {
    errors.message = 'Please keep your message under 600 characters.'
  }

  return errors
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [submitted, setSubmitted] = useState(null)
  const timerRef = useRef(null)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    // Clear the error for this field as soon as the user starts fixing it.
    setErrors((prev) => {
      if (!prev[name]) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  const handleBlur = (event) => {
    const { name } = event.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const fieldErrors = validate(values)
    setErrors((prev) => {
      const next = { ...prev }
      if (fieldErrors[name]) next[name] = fieldErrors[name]
      else delete next[name]
      return next
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const fieldErrors = validate(values)
    setErrors(fieldErrors)
    setTouched({ name: true, email: true, subject: true, message: true })

    if (Object.keys(fieldErrors).length > 0) {
      setStatus('error')
      return
    }

    setStatus('sending')

    // Simulate an async submission. Replace this block with a real API call
    // (e.g. fetch('/api/contact', { method: 'POST', body: ... })) if you have one.
    timerRef.current = setTimeout(() => {
      const entry = { ...values, at: new Date().toISOString() }
      try {
        const key = 'portfolio-messages'
        const saved = JSON.parse(window.localStorage.getItem(key) || '[]')
        saved.push(entry)
        window.localStorage.setItem(key, JSON.stringify(saved))
      } catch {
        /* storage is optional — ignore failures */
      }

      setSubmitted(values.name.trim().split(' ')[0])
      setValues(EMPTY_FORM)
      setTouched({})
      setErrors({})
      setStatus('success')
    }, 1200)
  }

  const resetForm = () => {
    clearTimeout(timerRef.current)
    setValues(EMPTY_FORM)
    setErrors({})
    setTouched({})
    setStatus('idle')
    setSubmitted(null)
  }

  const showError = (field) => (touched[field] && errors[field] ? errors[field] : null)
  const messageLength = values.message.length

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact Information"
          title="Get in touch"
          description={contact.blurb}
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ---- Contact details ---- */}
          <div className="space-y-4">
            {contact.details.map((detail) => {
              const Wrapper = detail.href ? 'a' : 'div'
              return (
                <Wrapper
                  key={detail.label}
                  {...(detail.href
                    ? {
                        href: detail.href,
                        className:
                          'card card-hover flex items-center gap-4 p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
                      }
                    : { className: 'card flex items-center gap-4 p-4' })}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">
                    <Icon name={detail.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {detail.label}
                    </p>
                    <p className="truncate text-sm font-medium text-slate-800 dark:text-slate-200">
                      {detail.value}
                    </p>
                  </div>
                </Wrapper>
              )
            })}

            {/* Social row */}
            <div className="card p-5">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                Follow my work
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                I post school projects and experiments on these platforms.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target={social.url.startsWith('http') ? '_blank' : undefined}
                      rel={social.url.startsWith('http') ? 'noreferrer noopener' : undefined}
                      className="btn-icon"
                      aria-label={social.label}
                      title={social.label}
                    >
                      <Icon name={social.icon} className="h-5 w-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability note */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-500/25 dark:bg-emerald-500/10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-200">
                  Currently available
                </p>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-emerald-700 dark:text-emerald-300/80">
                {profile.availability}. I usually reply within one working day.
              </p>
            </div>
          </div>

          {/* ---- Contact form ---- */}
          <div className="card p-6 sm:p-8">
            {status === 'success' ? (
              /* ---- Success state (conditional rendering) ---- */
              <div className="flex animate-pop-in flex-col items-center py-10 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
                  <CheckIcon className="h-8 w-8" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                  Message sent{submitted ? `, ${submitted}` : ''}!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-slate-600 dark:text-slate-400">
                  Thank you for reaching out. Your message has been recorded and I will get back to
                  you at the email address you provided.
                </p>
                <button type="button" onClick={resetForm} className="btn-primary mt-6">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="label">
                      Full name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your full name"
                      aria-invalid={Boolean(showError('name'))}
                      aria-describedby={showError('name') ? 'name-error' : undefined}
                      className={`field ${showError('name') ? 'field-error' : ''}`}
                    />
                    {showError('name') && (
                      <p id="name-error" className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-500">
                        <AlertIcon className="h-3.5 w-3.5" />
                        {showError('name')}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="label">
                      Email address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(showError('email'))}
                      aria-describedby={showError('email') ? 'email-error' : undefined}
                      className={`field ${showError('email') ? 'field-error' : ''}`}
                    />
                    {showError('email') && (
                      <p id="email-error" className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-500">
                        <AlertIcon className="h-3.5 w-3.5" />
                        {showError('email')}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="label">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(showError('subject'))}
                    aria-describedby={showError('subject') ? 'subject-error' : undefined}
                    className={`field ${showError('subject') ? 'field-error' : ''} ${
                      values.subject ? '' : 'text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    <option value="">Choose a topic…</option>
                    {contact.subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  {showError('subject') && (
                    <p id="subject-error" className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-500">
                      <AlertIcon className="h-3.5 w-3.5" />
                      {showError('subject')}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-baseline justify-between">
                    <label htmlFor="message" className="label">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <span
                      className={`text-xs tabular-nums ${
                        messageLength > 600
                          ? 'font-semibold text-rose-500'
                          : 'text-slate-400 dark:text-slate-500'
                      }`}
                    >
                      {messageLength}/600
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell me a little about your project, question, or opportunity…"
                    aria-invalid={Boolean(showError('message'))}
                    aria-describedby={showError('message') ? 'message-error' : undefined}
                    className={`field resize-y ${showError('message') ? 'field-error' : ''}`}
                  />
                  {showError('message') && (
                    <p id="message-error" className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-500">
                      <AlertIcon className="h-3.5 w-3.5" />
                      {showError('message')}
                    </p>
                  )}
                </div>

                {/* Global error banner */}
                {status === 'error' && (
                  <div
                    role="alert"
                    className="flex items-start gap-2.5 rounded-xl border border-rose-200 bg-rose-50 p-3.5 text-sm text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300"
                  >
                    <AlertIcon className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>Please fix the highlighted fields before sending your message.</span>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary min-w-[160px]"
                  >
                    {status === 'sending' ? (
                      <>
                        <SpinnerIcon className="h-4 w-4" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <SendIcon className="h-4 w-4" />
                        Send message
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    Fields marked <span className="text-rose-500">*</span> are required.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
