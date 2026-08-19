import { motion } from 'framer-motion'
import { fadeUp, viewport, tapHover } from '../motion'
import MotionLink from './MotionLink'

const QUICK_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer__grid"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="footer__col footer__col--brand">
            <div className="footer__brand">
              <span className="footer__mark">W</span>
              <span className="footer__brand-text">
                <span className="footer__brand-name">West Coast Avinash</span>
                <span className="footer__brand-sub">Regn. No.: BOM/HSG/1172 of 1966</span>
              </span>
            </div>
            <p className="footer__about">
              West Coast Avinash Co-operative Housing Society Ltd., 7 Bungalows, Andheri West, Mumbai.
            </p>
            <MotionLink className="btn btn--accent footer__cta" to="/login" {...tapHover}>
              Member Login
            </MotionLink>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a className="footer__link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__list">
              <li>
                <a className="footer__link" href="tel:+91XXXXXXXXXX">
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li>
                <a className="footer__link" href="mailto:westcoastadmin@gmail.com">
                  westcoastadmin@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Address</h4>
            <address className="footer__address">
              5/121, J. P. Road, &ldquo;Avinash&rdquo;, 7 Bungalows,
              <br />
              Andheri (W), Mumbai - 400 053.
            </address>
          </div>
        </motion.div>

        <div className="footer__bottom">
          <p className="footer__copy">West Coast Avinash &copy; 2026. All rights reserved.</p>
          <p className="footer__credit">
            Designed and Developed by{' '}
            <a href="https://theveenagroup.com/" target="_blank" rel="noopener">
              Veena Infotech
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
