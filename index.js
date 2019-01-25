const MoviesApi = require("./moviesApi/index");
const typeDefs = require("./typeDefs/index");
const resolvers = require("./resolvers/index");
const { ApolloServer } = require("apollo-server");
// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      moviesAPI: new MoviesApi()
    };
  },
  context: () => {
    return {
      token: "040618198b4fce660a65c6de7a8f26e9",
      lng: "es-ES"
    };
  }
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
