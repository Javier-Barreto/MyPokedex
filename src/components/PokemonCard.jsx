import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { setPokemonData } from '../javascript/redux/slices/pokemonSlice'


export const PokemonCard = (data) => {
  const dispatch = useDispatch()
  const { id, base_experience, name, height, weight, pokemon_v2_pokemonstats, pokemon_v2_pokemonsprites } = data.data
  const { sprites: { other: { home: { front_default } } } } = pokemon_v2_pokemonsprites[0]
  let img = front_default ? front_default : './assets/pokemonDefault.png' 

  const newData = {
    id: id,
    base_experience: base_experience,
    name: name,
    height: height,
    weight: weight,
    stats: pokemon_v2_pokemonstats,
    img: img
  }

  return (
    <>
      <div className="col mb-4">
        <a data-bs-toggle="modal" data-bs-target="#infoModal" onClick={() => {
          dispatch(setPokemonData({data: newData}))
        }} data-info={id} >
          <div className="card text-bg-dark p-3">
            <img src={img} className="card-img" alt={name} />
            <div className="card-img-overlay">
              <h5 className="card-title">{id}</h5>
              <p className="card-text">{name.toUpperCase()}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

PokemonCard.PropTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  weight: PropTypes.string,
  imgURL: PropTypes.string
}