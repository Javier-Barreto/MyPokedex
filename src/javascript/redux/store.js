import { configureStore } from '@reduxjs/toolkit'
import pokemonSliceReducer from './slices/pokemonSlice'

export default configureStore({
  reducer: {
    pokedux: pokemonSliceReducer
  }
})