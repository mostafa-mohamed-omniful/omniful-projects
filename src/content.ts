import blurtHome from './assets/work/blurt-home.jpg';
import blurtReview from './assets/work/blurt-review.jpg';
import blurtShopping from './assets/work/blurt-shopping.jpg';
import jackarooLoop from './assets/work/jackaroo-loop.mp4';
import jackarooPoster from './assets/work/jackaroo-poster.jpg';
import omnifulLogo from './assets/logos/omniful.webp';
import orangeLogo from './assets/logos/orange.webp';
import gucLogo from './assets/logos/guc.webp';
import nefertariLogo from './assets/logos/nefertari.webp';

export const contact = {
  email: 'mostafa12.official@gmail.com',
  phone: '+201067073657',
  github: 'https://github.com/12tifa12',
  linkedin: 'https://www.linkedin.com/in/mostafa-mohamed-272bb8372/',
  cv: '/Mostafa-Mohamed-CV.pdf',
};

export const blurt = {
  title: 'Blurt',
  tagline: 'Say it. It sorts itself.',
  description: 'Tap the orb and say whatever’s on your mind: “dentist Thursday at 4, buy eggs and milk, finish the report.” Blurt splits it into Calendar, Reminders, To-dos, Shopping and Notes, and you check it before anything saves.',
  features: [
    'AI sorting with Claude on a Node server, with the API key kept off the phone',
    'Built-in sorting rules when there’s no AI or no signal',
    'Reminders with Done and Snooze, plus calendar export',
    'Shopping lists that merge repeats and group by aisle',
    'Installs on your phone and opens offline',
  ],
  facts: [
    { value: '5', label: 'lists it sorts into' },
    { value: '2,482', label: 'lines, no framework' },
    { value: '1', label: 'dependency, the Claude SDK' },
  ],
  built: 'JavaScript, Node, Claude API, speech recognition, service workers',
  note: 'The copy on this page sorts with its built-in rules. AI sorting runs by invite.',
  app: '/blurt/index.html',
  code: 'https://github.com/12tifa12/Blurt',
  home: { src: blurtHome, alt: 'Blurt’s home screen: a glowing orb to tap and talk, above a stack of colored list cards' },
  review: { src: blurtReview, alt: 'Blurt’s review step: a spoken sentence split into an event, two shopping items and a to-do' },
  shopping: { src: blurtShopping, alt: 'Blurt’s shopping list, grouped by store aisle: produce, bakery, dairy and eggs, meat and fish, pantry' },
};

export const jackaroo = {
  title: 'Jackaroo',
  tagline: 'Marbles, cards and a little mayhem.',
  description: 'The marbles-and-cards board game, written in Java for a university project. You play three CPU opponents: race all four marbles around the track and into your safe zone first.',
  features: [
    'The full rules: splitting Sevens, swaps, burns and safe zones',
    'CPU players that score each legal move before choosing',
    'A Balatro-style pixel interface with an animated board and sound',
  ],
  facts: [
    { value: '5,334', label: 'lines of Java' },
    { value: '49', label: 'source files' },
    { value: '3', label: 'CPU opponents' },
  ],
  built: 'Java, JavaFX',
  code: 'https://github.com/12tifa12/Jackaroo',
  loop: jackarooLoop,
  poster: jackarooPoster,
};

export type Role = {
  name: string;
  role: string;
  years: string;
  description: string;
  /** The organisation's logo, on a transparent background. */
  logo: { src: string; width: number; height: number };
};

export const roles: Role[] = [
  {
    name: 'Omniful',
    role: 'Front-end development intern',
    years: '2025',
    description: 'Worked in the front-end team on Omniful’s web apps, improving the existing code and shipping changes through Git and GitHub code review.',
    logo: { src: omnifulLogo, width: 498, height: 98 },
  },
  {
    name: 'Orange',
    role: 'Cloud and networks intern',
    years: '2024',
    description: 'Worked with Orange’s cloud and network teams and got hands-on with enterprise cloud infrastructure and networking.',
    logo: { src: orangeLogo, width: 447, height: 447 },
  },
  {
    name: 'German University in Cairo',
    role: 'Computer Science and Engineering',
    years: '2023 to now',
    description: 'Now in the fourth year of the degree, learning advanced programming and how software gets built.',
    logo: { src: gucLogo, width: 631, height: 289 },
  },
  {
    name: 'Nefertari International School',
    role: 'IGCSE and A-level Computer Science',
    years: '2022 to 2023',
    description: 'Studied Computer Science at IGCSE and A-level and learned the basics of programming.',
    logo: { src: nefertariLogo, width: 125, height: 200 },
  },
];

