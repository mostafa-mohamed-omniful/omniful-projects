import todoWhole from './assets/work/todo-whole.jpg';
import todoDetail from './assets/work/todo-detail.jpg';
import tictactoeWhole from './assets/work/tictactoe-whole.jpg';
import tictactoeDetail from './assets/work/tictactoe-detail.jpg';
import scrollWhole from './assets/work/scroll-whole.jpg';
import scrollDetail from './assets/work/scroll-detail.jpg';
import storeWhole from './assets/work/store-whole.jpg';
import storeDetail from './assets/work/store-detail.jpg';
import warehouse from './assets/found/warehouse.jpg';
import network from './assets/found/network.jpg';
import newCairo from './assets/found/new-cairo.jpg';
import cairoNile from './assets/found/cairo-nile.jpg';

export const contact = {
  email: 'mostafa12.official@gmail.com',
  phone: '+201067073657',
  github: 'https://github.com/12tifa12',
  linkedin: 'https://www.linkedin.com/in/mostafa-mohamed-272bb8372/',
};

export type Project = {
  title: string;
  discipline: string;
  path: string;
  whole: { src: string; alt: string };
  detail: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    title: 'Tifa’s Store',
    discipline: 'A shop with live products, search, filters and a cart',
    path: '/demo',
    whole: { src: storeWhole, alt: 'The store’s product grid with prices and Add to Cart buttons' },
    detail: { src: storeDetail, alt: 'The shopping cart open with three items' },
  },
  {
    title: 'To-do list',
    discipline: 'Add tasks, tick them off, clear what’s done',
    path: '/todo-list',
    whole: { src: todoWhole, alt: 'The to-do list with three open tasks' },
    detail: { src: todoDetail, alt: 'Close-up of the task input and the first tasks' },
  },
  {
    title: 'Tic-tac-toe',
    discipline: 'Two players, one board, the winner called',
    path: '/tic-tac-toe',
    whole: { src: tictactoeWhole, alt: 'A finished tic-tac-toe game' },
    detail: { src: tictactoeDetail, alt: 'Close-up of the board: X wins on the diagonal' },
  },
  {
    title: 'Infinite scroll',
    discipline: 'New cards load as you reach the bottom',
    path: '/infinite-scroll',
    whole: { src: scrollWhole, alt: 'A long column of numbered cards' },
    detail: { src: scrollDetail, alt: 'Close-up of cards loaded further down the page' },
  },
];

export type Role = {
  name: string;
  role: string;
  years: string;
  description: string;
  picture: { src: string; alt: string; caption: string };
};

export const roles: Role[] = [
  {
    name: 'Omniful',
    role: 'Software engineering intern',
    years: '2025',
    description: 'Worked on the Omniful dashboard, building and polishing the screens its users work in.',
    picture: {
      src: warehouse,
      alt: 'Tall orange pallet racks in a fulfilment warehouse',
      caption: 'A fulfilment warehouse, the kind of operation Omniful’s software runs.',
    },
  },
  {
    name: 'Orange',
    role: 'Networks intern',
    years: '2024',
    description: 'Trained with Orange’s network engineers and got hands-on with network security and network management.',
    picture: {
      src: network,
      alt: 'Blue network cables plugged into a rack-mounted switch',
      caption: 'A network switch in a rack.',
    },
  },
  {
    name: 'German University in Cairo',
    role: 'Computer Science and Engineering',
    years: '2023 to now',
    description: 'Now in the third year of the degree, learning advanced programming and how software gets built.',
    picture: {
      src: newCairo,
      alt: 'A road in New Cairo under a blue sign pointing straight ahead to GUC',
      caption: 'The road to GUC in New Cairo.',
    },
  },
  {
    name: 'Nefertari International School',
    role: 'IGCSE and A-level Computer Science',
    years: '2022 to 2023',
    description: 'Studied Computer Science at IGCSE and A-level and learned the basics of programming.',
    picture: {
      src: cairoNile,
      alt: 'The Nile with the Cairo skyline behind it',
      caption: 'Cairo from the Nile.',
    },
  },
];

export const credits = [
  { title: 'Warehousing environment storing, picking and packaging', author: 'allureconsulting', licence: 'CC0', licenceUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', page: 'https://wordpress.org/photos/photo/2246439c68/' },
  { title: 'Network cables and switch', author: 'ProjectManhattan', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', page: 'https://commons.wikimedia.org/w/index.php?curid=37336988' },
  { title: 'New Cairo', author: 'Faris knight', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', page: 'https://commons.wikimedia.org/w/index.php?curid=20527739' },
  { title: 'Cairo skyline, Nile River, Egypt', author: 'Vyacheslav Argenberg', licence: 'CC BY 4.0', licenceUrl: 'https://creativecommons.org/licenses/by/4.0/', page: 'https://commons.wikimedia.org/w/index.php?curid=121354651' },
];
