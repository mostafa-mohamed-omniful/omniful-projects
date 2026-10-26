import { motion, useReducedMotion } from 'framer-motion';
import portrait from '../../assets/Profile.png';
import { contact } from '../../content';
import './Hero.css';

export const Hero = () => {
  const reduceMotion = useReducedMotion();
  // The parts arrive in reading order: nav, title, sentence, action.
  const enter = (order: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.15 + order * 0.09, ease: [0.2, 0.7, 0.2, 1] as const },
  });

  return (
    <header className="hero">
      <motion.nav className="hero-nav" aria-label="Main" {...enter(0)}>
        <a className="hero-wordmark site-display" href="/">Mostafa Mohamed</a>
        <div className="hero-nav-links">
          <a className="site-navlink" href="#work">Work</a>
          <a className="site-navlink" href="#experience">Experience</a>
          <a className="site-navlink" href="#about">About</a>
          <a className="site-navlink" href="#contact">Contact</a>
        </div>
      </motion.nav>

      <div className="hero-body">
        <div className="hero-main">
          <motion.h1 className="hero-title site-display" {...enter(1)}>
            React apps, built in Cairo
          </motion.h1>
          <motion.p className="hero-lead" {...enter(2)}>
            I’m Mostafa Mohamed, a Computer Science student at the German University in Cairo, taking on freelance front-end work.
          </motion.p>
          <motion.div {...enter(3)}>
            <a className="site-button" href={`mailto:${contact.email}`}>
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2.5 5h15v10h-15zM2.5 5.5 10 11l7.5-5.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
              Email me
              <svg className="site-button-arrow" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M3 9h11M9.5 4 14.5 9l-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </a>
          </motion.div>
        </div>

        <figure className="hero-photo">
          <motion.img
            src={portrait}
            width={614}
            height={614}
            alt="Mostafa Mohamed on a snowy ski slope, mountains behind him"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
          />
          <figcaption className="hero-photo-facts">
            <span>Cairo, Egypt</span>
            <span>Open to freelance work</span>
          </figcaption>
        </figure>
      </div>
    </header>
  );
};
