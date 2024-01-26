import { useState } from "react"
import { PokemonInfoModal } from "./components/PokemonInfoModal"
import DisplayPokemons from "./components/DisplayPokemons"
import DisplaySearchedPokemons from "./components/DisplaySearchedPokemons"

const App = () => {
  const [name, setSearchName] = useState("")

  return (
    <div className="bg-dark">
      <nav className="navbar bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">MyPokedex</a>
        </div>
      </nav>
      <div className="p-3">
        <div className="alert text-white border border border-black" role="alert">
          <span className="text-warning">Important!</span> Click the pokemon card to view more info about the pokemon
        </div>
        <div class="card bg-dark text-white m-3 p-3">
          <div class="card-header">
            Looking for a pokemon?
          </div>
          <div class="card-body text-white">
            <input type="text" className="form-control bg-dark border-secondary text-white" placeholder="Charizard"
                  onChange={(e) => setSearchName(e.target.value)} />
          </div>
        </div>
        {name.length > 0 ? 
          <DisplaySearchedPokemons name={name} />
          :
          <DisplayPokemons />  
        } 
      </div>
      <PokemonInfoModal />
    </div>    
  )
}

export default App
