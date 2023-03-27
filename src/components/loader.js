class Loader extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.textContent = `
        <svg width="500px" height="500px" viewBox="0 0 500 500"> 
            <rect x="0" y="0" width="100" height="100" fill="#feac5e"> 
                <animate attributeName="x" from="0" to="500" dur="2s" repeatCount="indefinite" /> 
            </rect>
        </svg>
      `;
  }
}

customElements.define('loader', Loader);
