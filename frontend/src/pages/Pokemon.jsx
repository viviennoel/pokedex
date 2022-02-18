import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoaderSuspense from '../components/LoaderSuspense';
import Carousel from '../components/CustomCarousel';

const Pokemon = () => {
    const params = useParams();
    const [pokemonHighlight, setPokemonHighlight] = useState(null);
    const [pokemonList, setpokemonList] = useState(null);

    // Get the data and display all the pokemons
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

    // At the mount of the component or update of the url
    useEffect(()=>{
        fetch(process.env.REACT_APP_API_ENDPOINT + '/api/pokemon/GetOneByName/' + params.pokemonName, { method: "GET" })
        .then(async (response) => {
            let pokemonInfo = await response.json()
            await setPokemonHighlight(pokemonInfo[0])
        })
        .catch(function (error) {
            console.log('GET ' + error.message) // TODO: Add a page 500
        })
    }, [params.pokemonName])
    
    // If the list of pokemon is accessible 
    if (pokemonHighlight) {
        return (
            <div className="container text-center mt-5">
                {/* Title */}
                <h1 className="pokemonHighlight_title">{pokemonHighlight.name}</h1>
                
                {/* Paragraph */}
                <p>This pokemon is a pokemon of 
                    <b>
                        {pokemonHighlight.type.map((typeOfPokemon, index)=>{
                            console.log(index, pokemonHighlight.type.length-1)
                            return(index === pokemonHighlight.type.length-1 ? ` ${typeOfPokemon}` : ` ${typeOfPokemon} and`)
                        })}
                    </b>
                </p>
                
                {/* Image */}
                <img
                    className="d-block m-auto py-5"
                    id="pokemonHighlight_image"
                    src={pokemonHighlight.sprite}
                    alt={pokemonHighlight.name}
                />

                {/* Carousel */}
                <h2 className="mt-5 mb-3">This is the list of all the pokemons!</h2>
                {pokemonList && <Carousel pokemonList={pokemonList ? pokemonList : null}></Carousel>}
            </div>  
        )
    // Otherwise loading in process
    } else {
        return(
            <LoaderSuspense></LoaderSuspense>
        )
    }
        
}
export default Pokemon;