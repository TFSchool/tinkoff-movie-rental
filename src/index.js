import { mapMovie } from './helpers/mapMovie.js';

const render = (movieData) => {
  // Создаем контейнер
  const movie = document.createElement('article');
  movie.classList.add('movie');

  // Добавляем innerHTML
  movie.innerHTML = ``;

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
