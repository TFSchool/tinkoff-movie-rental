import { mapMovie } from './helpers/mapMovie.js';

// Components
import './components/currentYear.js';
import './components/movieCard.js';

const resultsContainer = document.querySelector('.results__grid');
const form = document.querySelector('.search__form');
const input = document.querySelector('.search__input');

const render = (movieData) => {
  // Используем компонент
  const movie = document.createElement('movie-card');

  // Добавим данные
  movie.poster = movieData.poster;
  movie.title = movieData.title;
  movie.year = movieData.year;
  movie.link = movieData.link;

  return movie;
};

const search = async (searchTerm) => {
  while (resultsContainer.firstChild) {
    resultsContainer.removeChild(resultsContainer.firstChild);
  }

  const { Search } = await fetch(
    `http://www.omdbapi.com/?apikey=7ea4aa35&type=movie&s=${searchTerm}`
  ).then((r) => r.json());
  const movies = Search.map((result) => render(mapMovie(result)));

  const fragment = document.createDocumentFragment();

  movies.forEach((movie) => fragment.appendChild(movie));
  resultsContainer.appendChild(fragment);
};

const subscribeToSubmit = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    search(input.value);
  });
};

subscribeToSubmit();
