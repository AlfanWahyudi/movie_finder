/* eslint-disable no-underscore-dangle */
class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');
          .search-container {
            font-family: 'Poppins', sans-serif;;
            width: 70%;
            margin: 0 auto 80px auto;
            padding: 15px;
            display: flex;
          }
          .search-container > input {
            width: 80%;
            padding: 15px;
            font-weight: 400;
            border-radius: 20px;
            border: 0;
            border: 1px solid #3F3351;
            text-decoration: none;
          }
          .search-container > input:read-write {
            color: #686666;
          }
          .search-container > input:focus {
            appearance: none;
            outline: none;
            border: 1px solid #1F1D36;
            color: #686666;
          }
          .search-container > button {
            width: 18%;
            cursor: pointer;
            margin-left: auto;
            padding: 15px;
            background-color: #3F3351;
            border: 0;
            font-size: 18px;
            color: white;
            border-radius: 20px;
          }
          .search-container > button:hover {
            background-color: #1F1D36;
          }
          @media screen and (max-width: 767px){
            .search-container > input{
              width: 74%;
            }
            .search-container > button {
                width: 24%;
                font-size: 16px;
                font-weight: 500;
            }
          }
        </style>
        <div class="search-container">
            <input placeholder="Search some movies..." id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;
    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
