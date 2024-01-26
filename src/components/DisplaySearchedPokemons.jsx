import { useQuery } from '@apollo/client'
import { GET_POKEMONS_BY_NAME } from '../javascript/graphql/pokemonQueries'
import { PokemonCard } from './PokemonCard'
import { LoadingCard } from "./LoadingCard"
import { fakePokemonsData } from '../javascript/fakedata'

const DisplaySearchedPokemons = ({ name }) => {
  const { loading, error, data } = useQuery(GET_POKEMONS_BY_NAME(name))
  
  if (loading) return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {
          fakePokemonsData.map(({ id }) => {
            return (
              <LoadingCard key={"key-"+id} />
            )}
          )
        }
      </div>
    </>
  )

  if (error) return <p>There's been an error</p>

  if (data.pokemon_v2_pokemon) {
    return (
      <>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {
            data.pokemon_v2_pokemon.map((data) => (
                <PokemonCard key={"key-"+data.id} data={data} />
              )
            )
          }
        </div>
      </>
    )
  }
}

export default DisplaySearchedPokemons
