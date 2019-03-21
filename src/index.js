import { mapMovie } from './helpers/mapMovie.js';

// Components
import './components/currentYear.js';
import './components/movieCard.js';

const movieTemplate = document.querySelector('#movie');

const render = (movieData) => {
  // Используем компонент
  const movie = document.createElement('movie-card');

  // Добавим данные
  movie.moviePoster = movieData.poster;

  return movie;
};

const resultsContainer = document.querySelector('.results__grid');

const main = async () => {
  const { Search } = await fetch('./src/data.json').then((r) => r.json());
  const movies = Search.map((result) => render(mapMovie(result)));

  const fragment = document.createDocumentFragment();

  movies.forEach((movie) => fragment.appendChild(movie));
  resultsContainer.appendChild(fragment);
};

main();
