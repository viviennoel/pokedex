import {Form, FormControl, Button} from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addPokemon } from '../store/pokemon/pokemon';

const SearchBar = (props) => {
    const [singleSelections, setSingleSelections] = useState([]);
    const [pokemonList, setpokemonList] = useState(null);
    const birds = useSelector(state => state.pokemonHighlight);
    console.log('dataREDUC', birds)
    const dispatch = useDispatch();

    console.log(singleSelections)
    
    // Get the data and display a list of suggestions
    useEffect(()=>{
        let isComponentMounted = true;
        const savePokemonList = async (pokemonListToCache) => {
            localStorage.setItem('pokemonList', JSON.stringify(pokemonListToCache));
            if(isComponentMounted) {
                setpokemonList(pokemonListToCache);
            }
            console.log(pokemonList)
        }
        const fetchData = () => {
            // Verify the cache
            const pokemonListCache = JSON.parse(localStorage.getItem('pokemonList'));
            console.log(pokemonListCache)
            if (pokemonListCache){
                console.log('cache again')
                setpokemonList(pokemonListCache)
            } else {
                // Get the data from the backend via fetch
                fetch(process.env.REACT_APP_API_ENDPOINT + '/api/pokemon/GetAll', { method: "GET" })
                .then(async (response) => {
                    const pokemonListToCache = await response.json()
                    await savePokemonList(pokemonListToCache);
                })
                .catch(function (error) {
                    console.log('GET ' + error.message)
                })
            }
        }
        fetchData();
        return () => {
            isComponentMounted = false;
          }
    }, [])

    return(
        <div className="w-100 SearchBar_container">
            <Form className="d-flex justify-content-around">
                <Typeahead
                    id="basic-typeahead-single"
                    labelKey="name"
                    onChange={setSingleSelections}
                    options={pokemonList}
                    placeholder="Choose a name"
                    selected={singleSelections}
                />
                <p className="m-auto">Or</p>
                <Typeahead
                    id="basic-typeahead-single"
                    labelKey="_id"
                    onChange={setSingleSelections}
                    options={pokemonList}
                    placeholder="Choose an ID"
                    selected={singleSelections}
                />
            </Form>

        <div>
          <button type="submit" onClick={(event)=>{
            event.preventDefault();
            dispatch(addPokemon(singleSelections))
        }}>Add</button>
        <h2>{birds}</h2>
        </div>
        </div>  
    )
}

export default SearchBar;