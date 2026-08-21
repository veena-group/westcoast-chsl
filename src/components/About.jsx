import { motion } from 'framer-motion'
import {
  fadeUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewport,
  tapHover,
} from '../motion'

const FEATURES = [
  'Elected managing committee',
  'Transparent maintenance accounts',
  'Regular upkeep of common areas',
  '24x7 security and visitor management',
  'Resident parking',
  'Online member portal',
]

const HIGHLIGHTS = [
  {
    value: '1966',
    label: 'Year established',
    note: 'Registered as a co-operative housing society',
  },
  {
    value: 'BOM/HSG/1172',
    label: 'Registration number',
    note: 'Registered with the Registrar of Societies',
  },
  {
    value: 'Andheri (W)',
    label: 'Location',
    note: 'J. P. Road, 7 Bungalows, Mumbai 400 053',
  },
]

function TickIcon() {
  return (
    <svg className="about__tick" viewBox="0 0 24 24">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__grid">
          <motion.div
            className="about__content"
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p className="eyebrow" variants={fadeInLeft}>
              About the society
            </motion.p>
            <motion.h2 className="section-title" variants={fadeInLeft}>
              Six decades of community living in the heart of Andheri West
            </motion.h2>
            <motion.p className="about__para" variants={fadeInLeft}>
              Registered in 1966 under registration number BOM/HSG/1172, West Coast Avinash Co-operative
              Housing Society Ltd. is one of the established residential societies of 7 Bungalows,
              Andheri West. The society is home to families who have lived here across generations.
            </motion.p>
            <motion.p className="about__para" variants={fadeInLeft}>
              The managing committee is elected by the members and is responsible for the upkeep of
              the building, the common areas and the amenities, along with the accounts, maintenance
              billing and statutory compliances of the society.
            </motion.p>
            <motion.ul
              className="about__features"
              variants={staggerContainer(0.06)}
            >
              {FEATURES.map((feature) => (
                <motion.li key={feature} className="about__feature" variants={fadeUp}>
                  <TickIcon />
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
            <motion.a
              className="btn btn--accent about__cta"
              href="#contact"
              variants={fadeInLeft}
              {...tapHover}
            >
              Contact the Society
            </motion.a>
          </motion.div>

          <motion.div
            className="about__media"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <img
              className="about__img"
              src="/images/building-1.jpg"
              alt="West Coast Avinash Co-operative Housing Society building"
            />
            <div className="about__badge">
              <span className="about__badge-num">1966</span>
              <span className="about__badge-label">Established</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about__highlights"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {HIGHLIGHTS.map((item) => (
            <motion.div key={item.label} className="about__card" variants={fadeUp}>
              <p className="about__card-value">{item.value}</p>
              <p className="about__card-label">{item.label}</p>
              <p className="about__card-note">{item.note}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
