import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage';
import ToDoListPage from './To-Do List/ToDoListPage.tsx';
import TicTacToe from './Tic-Tac-Toe/TicTacToe.tsx';
import InfiniteScroll from './InfiniteScroll/InfiniteScroll.tsx';
import Projects from './Pages/Projects.tsx';
import { SideBar } from './SideBar/SideBar.tsx';

function Home() {
  return (
    <div>
      <h1 className='home-title'>Mostafa Mohamed</h1>
      <div><Link className='projects-link' to="/projects">Projects</Link></div>
    </div>
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
}])

export default function App() {
  return (
    <div>
      {/* <SideBar /> */}
      <RouterProvider router={router} />
    </div>
  );
}

