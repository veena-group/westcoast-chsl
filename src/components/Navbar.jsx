import { useEffect, useState } from 'react'
import { tapHover } from '../motion'
import MotionLink from './MotionLink'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isSolid = isScrolled || isOpen

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className={`nav${isSolid ? ' nav--solid' : ''}`}>
      <div className="container nav__inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand__mark">W</span>
          <span className="brand__text">
            <span className="brand__name">West Coast Avinash</span>
            <span className="brand__sub">Est. 1966 &middot; Andheri (W)</span>
          </span>
        </a>

        <nav className={`nav__links${isOpen ? ' is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} className="nav__link" href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <MotionLink
            className="btn btn--accent nav__cta"
            to="/login"
            onClick={closeMenu}
            {...tapHover}
          >
            Member Login
          </MotionLink>
        </nav>

        <button
          className="nav__burger"
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className={isOpen ? 'is-open' : ''}></span>
          <span className={isOpen ? 'is-open' : ''}></span>
          <span className={isOpen ? 'is-open' : ''}></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
