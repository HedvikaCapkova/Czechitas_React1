import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import { Contact } from './pages/Contact/Contact';
import { CentersPage } from './pages/CentersPage/CentersPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { CenterDetail } from './pages/CenterDetail/CenterDetail';

import './style.css';

const App = () => {
  return (
    <div className="container">
      <nav>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? 'active' : isPending ? 'pending' : ''
          }
          to="/home">
          Home
        </NavLink>
        <span> | </span>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? 'active' : isPending ? 'pending' : ''
          }
          to="/about">
          About
        </NavLink>
        <span> | </span>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? 'active' : isPending ? 'pending' : ''
          }
          to="/contact">
          Contact
        </NavLink>
        <span> | </span>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? 'active' : isPending ? 'pending' : ''
          }
          to="/centers">
          Pobočky
        </NavLink>
      </nav>
      <Outlet />

      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
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
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      {
        path: 'centers',
        element: <CentersPage />,
        children: [{ path: ':id', element: <CenterDetail /> }],
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
