import React from 'react';
import { MovieList } from '../MovieList/MovieList';
import { Outlet } from 'react-router-dom';
import './Movies.css';

export const Movies = () => {
  return (
    <div className="movies">
      <h1>Movies</h1>
      <div className="movies-container">
        <nav className="movie-list">
          <MovieList />
        </nav>
        <Outlet />
      </div>
    </div>
  );
};
