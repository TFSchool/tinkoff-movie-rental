const render = (movieData) => {
  // Создаем контейнер
  const movie = document.createElement('article');
  movie.classList.add('movie');

  // Создаем ссылку
  const link = document.createElement('a');
  link.classList.add('movie-link');
  link.setAttribute('target', '_blank');
  link.setAttribute('href', movieData.link);

  // Добавляем ссылку в контейнер
  movie.appendChild(link);

  // Создаем постер
  const poster = document.createElement('img');
  poster.classList.add('movie-image');
  poster.setAttribute('src', movieData.poster);
  poster.setAttribute('alt', 'poster');

  // Добавляем постер
  link.appendChild(poster);

  // Создаем контейнер для описания
  const description = document.createElement('div');
  description.classList.add('movie-description');

  // Добавляем описание
  link.appendChild(description);

  // Создаем рейтинг
  const rating = document.createElement('div');
  rating.classList.add('movie-rating');
  rating.textContent = '👍 8,9';

  // Добавляем рейтинг
  description.appendChild(rating);

  // Создаем заголовок
  const title = document.createElement('h3');
  title.classList.add('movie-title');
  title.textContent = movieData.title;

  // Добавляем заголовок
  description.appendChild(title);

  // Создаем подвал карточки
  const footer = document.createElement('footer');
  footer.classList.add('movie-footer');

  // Добавляем подвал
  description.appendChild(footer);

  // Жанр
  const genre = document.createElement('div');
  genre.classList.add('movie-genre');
  genre.textContent = 'Неизвестный жанр';

  // Добавляем жанр
  footer.appendChild(genre);

  // Год
  const year = document.createElement('div');
  year.classList.add('movie-year');
  year.textContent = movieData.year;

  // Добавляем год
  footer.appendChild(year);

  return movie;
};

const resultsContainer = document.querySelector('.results__grid');

const main = async () => {
  // Отрендерить
};

main();
