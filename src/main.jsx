import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/styles.scss'
import * as bootstrap from 'bootstrap' // Import all of Bootstrap's JS
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { pokemonClient } from './javascript/graphql/pokemonClient.js'
import store from './javascript/redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={pokemonClient} >
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
)
