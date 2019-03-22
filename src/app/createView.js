import { clearNode } from '../helpers/clearContainer.js';
import { getDeclension } from '../helpers/getDeclension.js';

const dMovies = getDeclension('фильм', 'фильма', 'фильмов');

export const createView = () => {
  // Search list
  const resultsContainer = document.querySelector('.results__grid');
  const resultsHeading = document.querySelector('.results__heading');

  // Form
  const searchForm = document.querySelector('.search__form');
  const searchInput = document.querySelector('.search__input');

  // Renderers
  const renderList = (results) => {
    const list = document.createDocumentFragment();

    results.forEach((movieData) => {
      const movie = document.createElement('movie-card');

      movie.poster = movieData.poster;
      movie.title = movieData.title;
      movie.year = movieData.year;
      movie.link = movieData.link;

      list.appendChild(movie);
    });

    clearNode(resultsContainer);
    resultsContainer.appendChild(list);
  };

  const renderCount = (count) => {
    resultsHeading.textContent = `Нашли ${count} ${dMovies(count)}`;
  };

  const renderError = (error) => {
    resultsHeading.textContent = error;
  };

  // Events
  const onSearchSubmit = (_listener) => {
    const listener = (event) => {
      event.preventDefault();
      _listener(searchInput.value);
      searchInput.value = '';
    };

    searchForm.addEventListener('submit', listener);

    return () => searchForm.removeEventListener('submit', listener);
  };

  return {
    renderList,
    renderCount,
    renderError,
    onSearchSubmit,
  };
};
