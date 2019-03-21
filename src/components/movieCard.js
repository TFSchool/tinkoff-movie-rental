const movieTemplate = document.createElement('template');
movieTemplate.innerHTML = `
  <article class="movie">
    <a href="" class="movie__link">
      <img class="movie-image" src="" alt="poster" />
      <div class="movie-description">
        <div class="movie-rating"></div>
        <h3 class="movie-title"></h3>
        <footer class="movie-footer">
          <div class="movie-genre"></div>
          <div class="movie-year"></div>
        </footer>
      </div>
    </a>
  </article>
`;

class MovieCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const template = movieTemplate.content.cloneNode(true);

    shadow.appendChild(template);
  }

  get movieTitle() {
    return this.getAttribute('title');
  }

  get moviePoster() {
    return this.getAttribute('poster');
  }

  get movieLink() {
    return this.getAttribute('link');
  }

  get movieYear() {
    return this.getAttribute('year');
  }

  get movieGenre() {
    return this.getAttribute('genre');
  }

  get movieRating() {
    return this.getAttribute('rating');
  }

  set movieTitle(value) {
    this.setAttribute('title', value);
    this.shadowRoot.querySelector('.movie-title').textContent = value;
  }

  set moviePoster(value) {
    this.setAttribute('poster', value);
    this.shadowRoot.querySelector('.movie-image').src = value;
  }

  set movieLink(value) {
    this.setAttribute('link', value);
    this.shadowRoot.querySelector('.movie-link').href = value;
  }

  set movieYear(value) {
    this.setAttribute('year', value);
    this.shadowRoot.querySelector('.movie-year').textContent = value;
  }

  set movieGenre(value) {
    this.setAttribute('genre', value);
    this.shadowRoot.querySelector('.movie-genre').textContent = value;
  }

  set movieRating(value) {
    this.setAttribute('rating', value);
    this.shadowRoot.querySelector('.movie-rating').textContent = value;
  }
}

customElements.define('movie-card', MovieCard);
