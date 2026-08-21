import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, tapHover } from '../motion'

function UserIcon() {
  return (
    <svg className="login__input-icon" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg className="login__input-icon" viewBox="0 0 24 24">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  )
}

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const res = await fetch(`${import.meta.env.VITE_DASHBOARD_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const body = await res.json()

      if (!res.ok || !body.success) {
        throw new Error(body.message || 'Invalid username or password')
      }

      // Fragments (#...) are never sent to the server or logged, unlike query params.
      // encodeURIComponent guards against '+' / '/' / '=' in the base64 output being
      // misread (e.g. '+' as a literal space) when the callback parses the fragment.
      const encoded = encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(body.data)))))
      window.location.href = `${import.meta.env.VITE_DASHBOARD_APP_URL}/auth/callback#session=${encoded}`
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <section className="login">
      <div className="login__bg">
        <img
          className="login__photo"
          src="/images/hero.jpg"
          alt=""
        />
      </div>
      <div className="login__overlay"></div>

      <motion.div
        className="login__panel"
        variants={staggerContainer(0.08)}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp}>
          <Link to="/" className="login__logo">
            <span className="login__logo-mark">W</span>
          </Link>
        </motion.div>
        <motion.p className="login__logo-name" variants={fadeUp}>
          West Coast Avinash
        </motion.p>

        <motion.p className="login__subtitle" variants={fadeUp}>
          Sign in with your registered member credentials to access society services online.
        </motion.p>

        {error && (
          <motion.p className="login__error" variants={fadeUp}>
            {error}
          </motion.p>
        )}

        <motion.form className="login__form" variants={fadeUp} onSubmit={handleSubmit}>
          <label className="contact__field">
            <span className="contact__label">
              Email <em>*</em>
            </span>
            <div className="login__input">
              <UserIcon />
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
          </label>
          <label className="contact__field">
            <span className="contact__label">
              Password <em>*</em>
            </span>
            <div className="login__input">
              <LockIcon />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
          </label>

          <div className="login__meta">
            <label className="login__remember">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#forgot-password">Forgot password?</a>
          </div>

          <motion.button
            type="submit"
            className="btn btn--accent login__submit"
            disabled={submitting}
            {...tapHover}
          >
            {submitting ? 'Signing In…' : 'Sign In'}
            <svg className="login__submit-icon" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </motion.button>
        </motion.form>

        <motion.p className="login__note" variants={fadeUp}>
          Not a registered member yet, or having trouble signing in? Contact the society office for
          assistance.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Link className="login__back" to="/">
            &larr; Back to home
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Login
