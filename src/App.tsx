import './App.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage';
import ToDoListPage from './To-Do List/ToDoListPage.tsx';
import TicTacToe from './Tic-Tac-Toe/TicTacToe.tsx';
import InfiniteScroll from './InfiniteScroll/InfiniteScroll.tsx';
import Projects from './Pages/Projects.tsx';
import { NavBar } from './components/NavBar/NavBar.tsx';
import { Experience } from './Pages/Experience.tsx';
import { Hero } from './components/Hero/Hero.tsx';

function Home() {
  return (
    <>
    <NavBar />
    <Hero />
    </>
    
  );
}

const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
  errorElement: <NotFoundPage />,
}, {
  path: '/todo-list',
  element: <ToDoListPage />,
}, {
  path: '/tic-tac-toe',
  element: <TicTacToe />,
}, {
  path: '/infinite-scroll',
  element: <InfiniteScroll />,
}, {
  path: '/projects',
  element: <Projects />,
}, {
  path: '/experience',
  element: <Experience />,
}])

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

