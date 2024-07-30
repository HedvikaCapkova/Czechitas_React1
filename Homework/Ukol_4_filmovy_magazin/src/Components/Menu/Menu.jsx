import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Menu.css';

export const Menu = () => {
  return (
    <div className="menu">
      <nav>
        <Link to="/home">Home</Link>

        <Link to="/reviews">Reviews</Link>

        <Link to="/articles">Articles</Link>

        <Link to="/movies">Movies</Link>
      </nav>
      <Outlet />
    </div>
  );
};
