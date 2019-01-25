const { RESTDataSource } = require("apollo-datasource-rest");
const movieGenres = require("./movieGenres.js");

class MoviesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.themoviedb.org/3/";
  }

  willSendRequest(request) {
    request.params.set("api_key", this.context.token);
    request.params.set("language", this.context.lng);
  }

  async getMovie(movieId) {
    const { id, title, poster_path, overview, genres } = await this.get(
      `movie/${movieId}`
    );
    return {
      id,
      title,
      poster_path,
      overview,
      genres
    };
  }

  async getSimilarMovies(movieId) {
    const data = await this.get(`/movie/${movieId}/similar`);
    return data.results.map(movie => {
      const { id, title, poster_path, overview, genre_ids } = movie;
      console.log(genre_ids);
      return {
        id,
        title,
        poster_path,
        overview,
        genres: genre_ids.map(id => movieGenres.find(genre => genre.id === id))
      };
    });
  }

  async myFavMovies() {
    const movieIds = [421, 550, 450465];
    return movieIds.map(id => this.getMovie(id));
  }
}
module.exports = MoviesAPI;
