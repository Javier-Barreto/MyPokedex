import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokeData: {},
  },
  reducers: {
    setPokemonData: (state, action) => {
      state.pokeData = action.payload.data
    }
  }
})

// Action creators are generated for each case reducer function
export const { setPokemonData } = pokemonSlice.actions

export default pokemonSlice.reducer