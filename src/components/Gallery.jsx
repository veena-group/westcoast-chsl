import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '../motion'

const GALLERY_ITEMS = [
  {
    caption: 'The building',
    modifier: 'gallery__item--tall',
    image: '/images/building-1.jpg',
  },
  {
    caption: 'The building',
    modifier: '',
    image: '/images/building-2.jpg',
  },
]

function Gallery() {
  return (
    <section className="section section--gray gallery" id="gallery">
      <div className="container">
        <motion.div
          className="section-head section-head--center"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            Gallery
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            A look around the society
          </motion.h2>
          <motion.p className="gallery__intro" variants={fadeUp}>
            Photographs of the building, the common areas and society events.
          </motion.p>
        </motion.div>

        <motion.div
          className="gallery__grid"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {GALLERY_ITEMS.map((item) => (
            <motion.figure
              key={item.caption}
              className={`gallery__item ${item.modifier}`.trim()}
              variants={fadeUp}
            >
              <img className="gallery__img" src={item.image} alt={item.caption} />
              <figcaption className="gallery__caption">
                <span>{item.caption}</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
