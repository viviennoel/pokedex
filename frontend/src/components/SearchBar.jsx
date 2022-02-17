import {Form, FormControl, Button} from 'react-bootstrap';
import pokemonList from './../data/data.json';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = (props) => {
    const [matchingPokemons, setMatchingPokemons] = useState(null);
    
    // Function triggered on change of SearchBar value
    const handleSearch = (value) => {
        let matchingPokemonsSearch = pokemonList.filter(pokemon => {
            return(
                pokemon.name && pokemon.name.startsWith(value) // Check the input
                && pokemon.name // Return the value if it matches the search
            )
        });
        setMatchingPokemons(value==="" ? null : matchingPokemonsSearch); // Update the state
    }
    return(
        <div>
            <Form className="d-flex pt-5 pt-lg-0">
                <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={e => handleSearch(e.target.value)}/>
                <Button variant="outline-light">Search</Button>
            </Form>
            {/* We add a field to present the matching pokemons to the user */}
            <div id={`SearchBar_options${props.idSearch}`} className={matchingPokemons ? 'SearchBar_options px-4 py-1' : ''}>
                {matchingPokemons && matchingPokemons.map((pokemon)=>{
                    return(
                        <div key={pokemon.name}><Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link></div>
                    )
                })}
            </div>
        </div>
        
    )
}

export default SearchBar;