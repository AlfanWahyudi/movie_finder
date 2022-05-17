/* eslint-disable no-underscore-dangle */
class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  /**
     * @param {any} movie
     */
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }         
            :host {
                box-shadow: 0 2px 7px 0 rgba(12, 12, 12, 0.2);
                border-radius: 8px;
                overflow: hidden;
            }
            
            img {
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                object-position: center;
                width: 100%;
                height: 275px;
            }
            
            .movie-info {
                margin: 5px;
                font-size: 16px;
                line-hegiht: 2;
            }
            
            .movie-info p:first-child{
                font-weight: 600;
                line-height: 120%;
            }
        </style>
        <img src="https://image.tmdb.org/t/p/original${this._movie.poster_path}">
        <div class="movie-info">
            <p>${this._movie.title}</p>
            <p>${this._movie.release_date}</p>
        </div>`;
  }
}
customElements.define('movie-item', MovieItem);
