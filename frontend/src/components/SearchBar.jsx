import { Form } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { addPokemon } from '../store/pokemon/pokemon';

const SearchBar = (props) => {
    const [singleSelections, setSingleSelections] = useState([]);
    const [pokemonList, setpokemonList] = useState(null);
    const dispatch = useDispatch();
    
    // Get the data and display a list of suggestions
    useEffect(()=>{
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
        let isComponentMounted = true;
        const savePokemonList = async (pokemonListToCache) => {
            localStorage.setItem('pokemonList', JSON.stringify(pokemonListToCache));
            if(isComponentMounted) {
                setpokemonList(pokemonListToCache);
            }
        }
        fetchData();
        return () => {
            isComponentMounted = false;
          }
    }, [])

    useEffect(()=>{
        singleSelections[0] && dispatch(addPokemon(singleSelections[0]));
    }, [singleSelections, dispatch])

    return(
        <div className="w-100 SearchBar_container">
            <Form className="d-flex justify-content-around">
                {/* SearchBar Name */}
                <Typeahead
                    id="basic-typeahead-single"
                    labelKey="name"
                    onChange={setSingleSelections}
                    options={pokemonList ? pokemonList : ['loading']}
                    placeholder="Choose a name"
                    selected={singleSelections}
                />
                <p className="m-auto px-1">Or</p>
                {/* SearchBar Number */}
                <Typeahead
                    id="basic-typeahead-single"
                    labelKey="_id"
                    onChange={setSingleSelections}
                    options={pokemonList ? pokemonList : ['loading']    }
                    placeholder="Choose an ID"
                    selected={singleSelections}
                />
            </Form>
    </div>
    );
}

export default SearchBar;