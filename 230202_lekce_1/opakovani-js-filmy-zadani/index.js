import { Movie } from "/Movie.js";

let movieList = document.querySelector('#movies');
let ascButton = document.querySelector(".asc");
let dscButton = document.querySelector(".desc");

const showMovies = (movieOrder) => {fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
.then((resp) => resp.json())
.then((data) => {
    data.sort((first, second) => first.title.toUpperCase() < second.title.toUpperCase() ? -1 : 0)

    data.forEach(movie => {
        movieList.innerHTML += Movie(movie);   
    });

    // movieList.innerHTML = data.map((element) => {
    //     return Movie(element);
    // }).join('');

});

};
showMovies();

ascButton.onClick = showMovies();

data.sort((a, b) => a.value - b.value)

// funkce bude mit sort type


