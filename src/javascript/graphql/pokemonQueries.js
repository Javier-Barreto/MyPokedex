import { gql } from '@apollo/client';

const GET_POKEMONS = (limit) => gql`
  query getPokemons {
    pokemon_v2_pokemon(limit: ${limit}, offset: 0) {
      id
      name
      height
      base_experience
      weight
      pokemon_v2_pokemonstats {
        pokemon_v2_stat {
          name
        }
        base_stat
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`

const GET_POKEMONS_BY_NAME = (name) => gql`
  query getPokemonsByName {
    pokemon_v2_pokemon(where: {name: {_iregex: ${name}}}) {
      id
      name
      height
      base_experience
      weight
      pokemon_v2_pokemonstats {
        pokemon_v2_stat {
          name
        }
        base_stat
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`

export { GET_POKEMONS, GET_POKEMONS_BY_NAME }