class CurrentYear extends HTMLElement {
  constructor() {
    super();
    this.textContent = `${new Date().getFullYear()}`;
  }
}

customElements.define('current-year', CurrentYear);
