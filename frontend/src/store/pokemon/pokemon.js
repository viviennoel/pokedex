import { combineReducers } from 'redux';
const UPDATE_POKEMON = 'UPDATE_POKEMON';

export function addPokemon(pokemonHighlight) {
  return {
    type: UPDATE_POKEMON,
    pokemonHighlight,
  }
}

const defaultPokemon = [
  {
      name:"unknown"
  }
];

function pokemon(state=defaultPokemon, action) {
  switch (action.type) {
    case UPDATE_POKEMON:
        console.log('action',action.pokemonHighlight[0].name)
      return (
        {name: action.pokemonHighlight[0].name}
      )
    default:
      return state;
  }
}

const pokemonApp = combineReducers({
  pokemon
});

export default pokemonApp;