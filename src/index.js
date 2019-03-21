import { mapMovie } from './helpers/mapMovie.js';

const movieTemplate = document.querySelector('#movie');

const render = (movieData) => {
  // Клонируем шаблон
  const movie = movieTemplate.content.cloneNode(true);

  // Находим нужные элементы
  const link = movie.querySelector('.movie-link');
  const title = movie.querySelector('.movie-title');
  const poster = movie.querySelector('.movie-poster');
  const year = movie.querySelector('.movie-year');
  const genre = movie.querySelector('.movie-genre');
  const rating = movie.querySelector('.movie-rating');

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
