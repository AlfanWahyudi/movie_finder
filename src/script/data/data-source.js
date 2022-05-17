class DataSource {
  static searchMovie(title) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=5ec62d8854dd481b8284fa5a3af37f70&query=${title}&language=en-US`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.total_results !== 0) {
          return Promise.resolve(responseJson);
        }
        return Promise.reject(new Error(`${title} is not found`));
      });
  }
}

export default DataSource;
