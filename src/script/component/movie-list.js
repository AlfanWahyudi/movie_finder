/* eslint-disable no-underscore-dangle */
import './movie-item';

class MovieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            :host {
                display: flex;
                flex-wrap: wrap;
                gap: 1.5em;
            }
            
            :host > * {
                flex: 1 1 12em;
            }
        </style>
    `;
    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement('movie-item');
      movieItemElement.movie = movie;
      this.shadowDOM.appendChild(movieItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `<center><h2>${message}</h2>`;
  }
}

customElements.define('movie-list', MovieList);
