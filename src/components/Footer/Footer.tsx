import { contact, credits } from '../../content';
import './Footer.css';

export const Footer = () => (
  <footer className="footer">
    <p className="footer-credits">
      Pictures:{' '}
      {credits.map((credit, index) => (
        <span key={credit.page}>
          <a href={credit.page}>“{credit.title}”</a> by {credit.author},{' '}
          <a href={credit.licenceUrl}>{credit.licence}</a>
          {index < credits.length - 1 ? '; ' : '. '}
        </span>
      ))}
      App screenshots and portrait are my own.
    </p>
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
