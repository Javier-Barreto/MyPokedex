import { ApolloClient, InMemoryCache } from '@apollo/client'

const pokemonClient = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache(),
});

export { pokemonClient }