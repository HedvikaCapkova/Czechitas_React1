import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import { Contact } from './pages/Contact/Contact';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <nav>
        <Link to="/home">Home</Link>
        <span> | </span>
        <Link to="/about">About</Link>
        <span> | </span>
        <Link to="/contact">Contact</Link>
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
    children: [
      { path: 'home', element: <Home /> },

      { path: 'about', element: <About /> },

      { path: 'contact', element: <Contact /> },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
