import { useState } from "react"
import { useQuery } from '@apollo/client'
import { GET_POKEMONS } from '../javascript/graphql/pokemonQueries'
import { PokemonCard } from './PokemonCard'
import { LoadingCard } from "./LoadingCard"
import { fakePokemonsData } from '../javascript/fakedata'

const DisplayPokemons = () => {
  const [limit, setPokemonsLimit] = useState(50)
  const { loading, error, data } = useQuery(GET_POKEMONS(limit))

  const incrementLimit = () => {
    setPokemonsLimit(limit+50)
  }

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
      <div className="text-center">
        <a className="btn btn-outline-light" id="loadMore" onClick={() => incrementLimit()}>Load More</a>
      </div>
    </>
  )
}

export default DisplayPokemons
