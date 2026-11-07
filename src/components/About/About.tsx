import portrait from '../../assets/profile.webp';
import { Reveal } from '../Reveal/Reveal';
import './About.css';

const paragraphs = [
  'I’m Mostafa, a fourth-year Computer Science and Engineering student at the German University in Cairo. I started programming in IGCSE and A-level Computer Science at school, and I haven’t stopped since.',
  'I build for the web with JavaScript, TypeScript and React, using Node when an app needs a server. At university I also work in Java and Python, which is where Jackaroo came from.',
  'Two internships showed me how real teams work. At Orange I worked with the cloud and network teams on enterprise infrastructure. At Omniful I worked on the front end of web apps people rely on.',
  'I’m taking on freelance projects now. If you need a site, a dashboard or a small app built with care, I’d like to hear about it.',
  'Away from the keyboard you’ll find me at the gym, watching football or gaming.',
];

export const About = () => (
  <section className="about" id="about" aria-labelledby="about-heading">
    <div className="about-letter">
      <Reveal>
        <img className="about-portrait" src={portrait} width={44} height={44} alt="" />
        <h2 className="about-heading site-display" id="about-heading">About me</h2>
      </Reveal>
      {paragraphs.map((text, index) => (
        <Reveal key={index} order={index + 1}>
          <p>{text}</p>
        </Reveal>
      ))}
      <Reveal order={paragraphs.length + 1}>
        <p className="about-signature">Mostafa Mohamed</p>
        <p className="about-role">Front-end developer, Cairo</p>
      </Reveal>
    </div>
  </section>
);
