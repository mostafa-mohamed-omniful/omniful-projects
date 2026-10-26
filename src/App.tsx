import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage';
import Home from './Pages/Home';
import ToDoListPage from './To-Do List/ToDoListPage.tsx';
import TicTacToe from './Tic-Tac-Toe/TicTacToe.tsx';
import InfiniteScroll from './InfiniteScroll/InfiniteScroll.tsx';
import { Demo } from './Demo E-commerce/Demo.tsx';

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
  // The projects and experience pages are now sections of the home page.
  path: '/projects',
  element: <Navigate to="/#work" replace />,
}, {
  path: '/experience',
  element: <Navigate to="/#experience" replace />,
}, {
  path: '/demo',
  element: <Demo />,
}])

export default function App() {
  return <RouterProvider router={router} />;
}
