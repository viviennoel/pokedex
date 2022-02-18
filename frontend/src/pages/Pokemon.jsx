import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoaderSuspense from '../components/LoaderSuspense';
import {Button, Carousel} from 'react-bootstrap';

const Pokemon = () => {
    const params = useParams();
    const [pokemonHighlight, setPokemonHighlight] = useState(null);

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
                <Button variant="outline-light" className="text-right mb-5"><Link to="/">Back to homepage</Link></Button>
                
                {/* Title */}
                <h1 className="pb-5 pokemonHighlight_title">{pokemonHighlight.name}</h1>
                
                {/* Image */}
                <img
                    className="d-block m-auto py-5"
                    id="pokemonHighlight_image"
                    src={pokemonHighlight.sprite}
                    alt={pokemonHighlight.name}
                />

                {/* Paragraph */}
                <p>This pokemon is a pokemon of 
                    <b>
                        {pokemonHighlight.type.map((typeOfPokemon, index)=>{
                            console.log(index, pokemonHighlight.type.length-1)
                            return(index === pokemonHighlight.type.length-1 ? ` ${typeOfPokemon}` : ` ${typeOfPokemon} and`)
                        })}
                    </b>
                </p>

                {/* Carousel */}
                {/* <Carousel pokemonList={}></Carousel> */}
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