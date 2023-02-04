const Movie = ({ id, title, url, posterUrl, genres, year }) => {
    return `
        <div class="movie">
          <img class="movie__img" src=${posterUrl} alt="Vykoupení z věznice Shawshank">
          <h2 class="movie__title">${title}</h2>
          <p class="movie__year">${year}</p>
          <p class="movie__genre">${genres}</p>
        </div>
    `;
};

const showMovies = (items) => {
    document.querySelector('#movies').innerHTML = items.map((item) => {
        return Movie(item);
    }).join('');
}

const getMovie = () => {fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
.then((resp) => resp.json())
.then((data) => showMovies(data));
};

getMovie();




