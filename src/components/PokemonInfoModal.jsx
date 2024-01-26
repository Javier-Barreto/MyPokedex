import React from 'react'
import { useSelector } from 'react-redux'
import { fakePokemonData } from '../javascript/fakedata'

export const PokemonInfoModal = () => {
  let pokeData = useSelector((state) => state.pokedux.pokeData)
  pokeData.id ? pokeData = pokeData : pokeData = fakePokemonData
  
  const { 
    id,
    base_experience,
    height,
    name,
    weight,
    stats,
    img
  } = pokeData

  return (
    <div className="modal fade" id="infoModal" tabIndex="-1" aria-labelledby="infoModal" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content bg-dark">
          <div className="m-2 text-white" data-bs-theme="dark">
            <div className="card mb-3 border-0">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={img} className="img-fluid rounded-start" alt={name} />
                </div>
                <div className="col-md-8">
                  <div className="position-absolute top-0 start-0 p-2">
                    {id}
                  </div>
                  <div className="d-flex justify-content-end position-absolute top-0 end-0" data-bs-theme="dark">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{name.toUpperCase()}</h5>
                    <p className="m-0">Height: <span className="text-warning">{height/10}</span> m</p>
                    <p className="m-0">Weight: <span className="text-warning">{weight/10}</span> kg</p>
                    <p className="m-0">Base experience: <span className="text-warning">{base_experience}</span>xp</p>
                  </div>
                  <div className="mx-3">
                    <p className="m-0">Stats:</p>
                    <ul>
                      {
                        stats.map((value) => {
                          const { base_stat, pokemon_v2_stat: { name } } = value
                          return (<li key={name}>{name.toUpperCase()}: <span className="text-warning">{base_stat}</span></li>)
                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
