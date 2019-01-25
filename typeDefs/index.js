const { gql } = require("apollo-server");
// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Movie" type can be used in other type declarations.
  type Movie {
    id: Int
    title: String
    poster_path: String
    overview: String
    genres: [Genre]
    similar: [Movie]
  }

  type Genre {
    id: Int
    name: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    movie(id: Int): Movie
    myFavMovies: [Movie]
  }
`;
module.exports = typeDefs;
