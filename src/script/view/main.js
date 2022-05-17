import '../component/search-bar';
import '../component/movie-list';
import $ from 'jquery';
import DataSource from '../data/data-source';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const movieListElement = document.querySelector('movie-list');

  const renderResult = (resultsAPI) => {
    const { results } = resultsAPI;
    movieListElement.movies = results;
  };

  const fallbackResult = (message) => {
    movieListElement.renderError(message);
  };

  const onButtonClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  $('h1').addClass('title');
  $('h2').addClass('little-text');

  searchElement.clickEvent = onButtonClicked;
};

export default main;
