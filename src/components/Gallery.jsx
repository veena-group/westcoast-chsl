import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '../motion'

const GALLERY_ITEMS = [
  {
    caption: 'The building',
    modifier: 'gallery__item--tall',
    image: 'https://images.pexels.com/photos/21284473/pexels-photo-21284473.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    caption: 'Entrance lobby',
    modifier: '',
    image: 'https://images.pexels.com/photos/19227221/pexels-photo-19227221.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    caption: 'Garden area',
    modifier: '',
    image: 'https://images.pexels.com/photos/27307398/pexels-photo-27307398.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    caption: 'Parking',
    modifier: '',
    image: 'https://images.pexels.com/photos/17000801/pexels-photo-17000801.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    caption: 'Terrace',
    modifier: '',
    image: 'https://images.pexels.com/photos/33415133/pexels-photo-33415133.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    caption: 'Society events',
    modifier: 'gallery__item--wide',
    image: 'https://images.pexels.com/photos/31874011/pexels-photo-31874011.jpeg?auto=compress&cs=tinysrgb&w=1400',
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
