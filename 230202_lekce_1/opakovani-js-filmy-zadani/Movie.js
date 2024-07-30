export const Movie = ({ title, url, posterUrl, genres, year }) => {
    return `
        <div class="movie">
          <img class="movie__img" src=${posterUrl} alt=${title}>
          <a href=${url} class="movie__title">${title}</a>
          <p class="movie__year">${year}</p>
          <p class="movie__genre">${genres}</p>
        </div>
    `;
};