import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { movies } from '../../movie-database';

export const Movie = () => {
  const { movieId } = useParams();
  const movieData = movies.find((movie) => movie.id === Number(movieId));

  return (
    <div className="movie">
      <h2>{movieData.title}</h2>
      <img
        src={movieData.poster}
        alt={movieData.title}
      />

      <p>{movieData.storyline}</p>
    </div>
  );
};
