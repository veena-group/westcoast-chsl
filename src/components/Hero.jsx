import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, tapHover } from '../motion'
import MotionLink from './MotionLink'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <img
          className="hero__photo"
          src="/images/hero.jpg"
          alt=""
        />
      </div>
      <div className="hero__overlay"></div>
      <motion.div
        className="container hero__inner"
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero__eyebrow" variants={fadeUp}>
          Andheri West, Mumbai
        </motion.p>
        <motion.h1 className="hero__title" variants={fadeUp}>
          A community <span className="hero__title-accent">built on trust</span> since 1966
        </motion.h1>
        <motion.p className="hero__regn" variants={fadeUp}>
          Regn. No.: BOM/HSG/1172 of 1966
        </motion.p>
        <motion.p className="hero__text" variants={fadeUp}>
          West Coast Avinash Co-operative Housing Society has been home to generations of families at 7
          Bungalows, Andheri West. A well-managed society, a well-kept building, and neighbours who
          look out for one another.
        </motion.p>
        <motion.div className="hero__actions" variants={fadeUp}>
          <MotionLink className="btn btn--accent" to="/login" {...tapHover}>
            Member Login
          </MotionLink>
          <motion.a className="btn btn--ghost-light" href="#about" {...tapHover}>
            Learn More
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.a
        className="hero__scroll"
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.9 },
          y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 1 },
        }}
      >
        <span className="hero__scroll-label">Scroll</span>
        <span className="hero__scroll-line"></span>
      </motion.a>
    </section>
  )
}

export default Hero
