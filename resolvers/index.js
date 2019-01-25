// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Movie: {
    similar: ({ id }, args, { dataSources }) => {
      return dataSources.moviesAPI.getSimilarMovies(id);
    }
  },
  Query: {
    movie: async (_source, { id }, { dataSources }) => {
      return dataSources.moviesAPI.getMovie(id);
    },
    myFavMovies: async (_source, { id }, { dataSources }) => {
      return dataSources.moviesAPI.myFavMovies();
    }
  }
};
module.exports = resolvers;
