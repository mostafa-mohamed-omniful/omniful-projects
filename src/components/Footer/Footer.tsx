import { contact } from '../../content';
import './Footer.css';

export const Footer = () => (
  <footer className="footer">
    <div className="footer-line">
      <span className="footer-what">Mostafa Mohamed, front-end developer</span>
      <nav className="footer-links" aria-label="Footer">
        <a className="site-navlink" href="#work">Work</a>
        <a className="site-navlink" href="#experience">Experience</a>
        <a className="site-navlink" href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="site-navlink" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
      <span className="footer-year">© {new Date().getFullYear()}</span>
    </div>
  </footer>
);
