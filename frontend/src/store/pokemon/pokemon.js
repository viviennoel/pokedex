import { combineReducers } from 'redux';

// Constant
const ADD_POKEMON = 'ADD_POKEMON';

// action objects that describe what happens in the app
export function addPokemon(pokemon) {
  return {
    type: ADD_POKEMON,
    pokemon,
  }
}

// Reducer functions that calculate updated state based on existing state and actions
const defaultPokemon = [
  {
    name: null
  }
];

function pokemonHighlight(state=defaultPokemon, action) {
  switch (action.type) {
    case ADD_POKEMON:
      return (action.pokemon);
    default:
      return state;
  }
}

const pokemonApp = combineReducers({
  pokemonHighlight
});

export default pokemonApp;