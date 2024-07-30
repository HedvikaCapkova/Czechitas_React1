import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  Link,
  Outlet,
} from 'react-router-dom';
import { Reviews } from './Components/Reviews/Reviews';
import { Home } from './Components/Home/Home';
import { Articles } from './Components/Articles/Articles';
import { Movies } from './Components/Movies/Movies';
import { Movie } from './Components/Movie/Movie';
import { MovieList } from './Components/MovieList/MovieList';
import { ErrorPage } from './Components/ErrorPage/ErrorPage';
import { Menu } from './Components/Menu/Menu';
import './style.css';

const App = () => {
  return (
    <>
      <div className="container">
        <nav className="menu">
          <Menu />
        </nav>
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'reviews', element: <Reviews /> },
      { path: 'articles', element: <Articles /> },
      {
        path: 'movies',
        element: <Movies />,
        children: [{ path: ':movieId', element: <Movie /> }],
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
