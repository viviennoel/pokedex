import CustomCarousel from "../components/CustomCarousel";
import CustomAccordion from "../components/CustomAccordion";
import DisplayAllData from "../components/DisplayAllData"

function Homepage() {
    const Carousel = DisplayAllData(CustomCarousel);
	const Accordion = DisplayAllData(CustomAccordion);
	return (
		<div className="container">
            {/* Thanks to the HOC, the components will fetch different information (props) */}
			<h2 className="mt-5">Pokemons of Water</h2>
			<p className="mb-5">The pokemons of water are the more resistant in case of a fight with a fire pokemon. They like to swim and are generally very friendly!</p>
			<Carousel dataFilter="water"></Carousel>

			<h2 className="mt-5">Pokemons of Fire</h2>
			<p className="mb-5">The pokemons of fire are very aggressive, but as well nice when they like the person. They are warm, of course, and they like to run and burn things.</p>			
            <Accordion dataFilter="fire"></Accordion>
		</div>
	);
}

export default Homepage;
