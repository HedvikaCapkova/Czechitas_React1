import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  Link,
  Outlet,
} from 'react-router-dom';
import { movies } from '../../movie-database';
import './MovieList.css';

export const MovieList = () => {
  return movies.map((movie) => {
    return (
      <Link
        key={movie.id}
        to={movie.id.toString()}>
        {movie.title}
      </Link>
    );
  });
};
