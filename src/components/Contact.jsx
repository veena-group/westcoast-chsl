import { motion } from 'framer-motion'
import { fadeUp, fadeIn, fadeInRight, staggerContainer, viewport, tapHover } from '../motion'

function Contact() {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <motion.div
          className="section-head"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            Contact us
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Get in touch with the society office
          </motion.h2>
          <motion.p className="contact__intro" variants={fadeUp}>
            For maintenance queries, NOC requests, documentation or any other assistance, reach the
            society office using the details below.
          </motion.p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__details"
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.a className="contact__card" href="tel:+91XXXXXXXXXX" variants={fadeUp}>
              <span className="contact__icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span className="contact__card-body">
                <span className="contact__card-label">Call us</span>
                <span className="contact__card-value">+91 XXXXX XXXXX</span>
              </span>
            </motion.a>

            <motion.a
              className="contact__card"
              href="mailto:westcoastadmin@gmail.com"
              variants={fadeUp}
            >
              <span className="contact__icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 6 10-6" />
                </svg>
              </span>
              <span className="contact__card-body">
                <span className="contact__card-label">Email us</span>
                <span className="contact__card-value contact__card-value--break">
                  westcoastadmin@gmail.com
                </span>
              </span>
            </motion.a>

            <motion.div className="contact__card contact__card--static" variants={fadeUp}>
              <span className="contact__icon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span className="contact__card-body">
                <span className="contact__card-label">Address</span>
                <span className="contact__card-value">
                  West Coast Co-op. Housing Society Ltd.
                  <br />
                  5/121, J. P. Road, &ldquo;Avinash&rdquo;, 7 Bungalows,
                  <br />
                  Andheri (W), Mumbai - 400 053.
                </span>
              </span>
            </motion.div>

            <motion.div className="contact__card contact__card--static" variants={fadeUp}>
              <span className="contact__icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3.5 2" />
                </svg>
              </span>
              <span className="contact__card-body">
                <span className="contact__card-label">Office hours</span>
                <span className="contact__card-value">Monday to Saturday, 10:00 am to 6:00 pm</span>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact__form-wrap"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h3 className="contact__form-title">Send an enquiry</h3>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__row">
                <label className="contact__field">
                  <span className="contact__label">
                    Your name <em>*</em>
                  </span>
                  <input type="text" placeholder="Full name" />
                </label>
                <label className="contact__field">
                  <span className="contact__label">Flat / Unit no.</span>
                  <input type="text" placeholder="e.g. 5/121" />
                </label>
              </div>
              <label className="contact__field">
                <span className="contact__label">
                  Email address <em>*</em>
                </span>
                <input type="email" placeholder="you@example.com" />
              </label>
              <label className="contact__field">
                <span className="contact__label">
                  Message <em>*</em>
                </span>
                <textarea rows="5" placeholder="How can the society office help you?"></textarea>
              </label>
              <motion.button type="submit" className="btn btn--accent contact__submit" {...tapHover}>
                Send Enquiry
              </motion.button>
              <p className="contact__note">
                Existing members can also raise requests through the{' '}
                <a href="https://westcoastavinash.com/">member portal</a>.
              </p>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="contact__map"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.4231037011164!2d72.81812627527758!3d19.130564525496116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61c7d83a911%3A0x148f9f769c389485!2sAvinash%20Towers!5e0!3m2!1sen!2sin!4v1735826720099!5m2!1sen!2sin"
            title="Location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
