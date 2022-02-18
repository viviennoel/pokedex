import { Carousel } from 'react-bootstrap';
import { Link}  from 'react-router-dom';
import LoaderSuspense from './LoaderSuspense'

function CustomCarousel(props){
    if(props.pokemonList){
		return(
			// The carousel component will display all the data passed as props
			<Carousel className="py-4">
				{props.pokemonList.map((pokemon)=>
					
						<Carousel.Item key={pokemon.name}>
						<img
							data-testid={`image_${pokemon.name}`}
							className="d-block m-auto pb-1"
							src={pokemon.sprite}
							alt={pokemon.name}
						/>
						<Carousel.Caption>
						<Link to={`/pokemon/${pokemon.name}`} data-testid={`name_${pokemon.name}`}>
							<h3>{pokemon.name}</h3>
							<p data-testid={`description_${pokemon.name}`}>This pokemon is a pokemon of 
								<b>
								{pokemon.type.map((typeOfPokemon, index)=>{
									return(index === pokemon.type.length-1 ? ` ${typeOfPokemon}` : ` ${typeOfPokemon} and`)
								})}
							</b>
							</p>
						</Link>
						</Carousel.Caption>
					</Carousel.Item>
				)}
			</Carousel>
		)
	} else {
		return(
			<LoaderSuspense></LoaderSuspense>
		)
	}
}
export default CustomCarousel;