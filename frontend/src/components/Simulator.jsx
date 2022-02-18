
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Simulator = (props) => {
    const pokemonHighlight = useSelector(state => state.pokemonHighlight);
    
    return (
    <div id="Homepage_simulator-container">
        <div id="Homepage_simulator-bg">
        </div>
        <div className="container">
            <div className="Homepage_SearchBar">
                <SearchBar idSearch="allPokemon"></SearchBar>
            </div>
            {pokemonHighlight.name ?
                    // If the pokemon have been selected, display it
                    <div className="wrapper simulator_preview d-md-flex justify-content-between">
                        <div>
                            <Link to={`/pokemon/${pokemonHighlight.name}`}>
                                <h3>Discover {pokemonHighlight.name} !</h3>
                            </Link>
                            <p>This pokemon is a pokemon of 
                                <b>
                                    {pokemonHighlight.type.map((typeOfPokemon, index)=>{
                                        console.log(index, pokemonHighlight.type.length-1)
                                        return(index === pokemonHighlight.type.length-1 ? ` ${typeOfPokemon}` : ` ${typeOfPokemon} and`)
                                    })}
                                </b>
                            </p>
                            <p><i>Follow him with its ID : {pokemonHighlight._id}</i></p>
                        </div>
                        <img 
                            src={pokemonHighlight.sprite}
                            alt="pokemon preview"
                            className="simulator_preview-img"/>
                    </div>
                : // Otherwise display the message information
                <div className="wrapper d-md-flex" style={{color:"white"}}>
                    <img 
                        src="https://res.cloudinary.com/viviennoel07/image/upload/c_scale,h_90/v1645173315/pokemon/pokeball_mcp2kh.png"
                        alt="pokeball loading"
                        className="loading_pokeball"/>
                    <div className="px-1 px-md-5 py-md-0 py-4">
                        <h2>Display your pokemon Preview!</h2>
                        <p>This is your custom simulator</p>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Simulator;