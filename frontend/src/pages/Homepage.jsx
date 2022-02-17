import CustomCarousel from "../components/CustomCarousel";
import CustomAccordion from "../components/CustomAccordion";
import DisplayAllData from "../components/DisplayAllData"

function Homepage() {
    const Carousel = DisplayAllData(CustomCarousel);
	const Accordion = DisplayAllData(CustomAccordion);
	return (
		<div className="container">
            {/* Thanks to the HOC, the components will fetch different information (props) */}
			{/* <h2 className="my-5">Earth powers</h2> */}
			{/* <Carousel dataFilter="earth"></Carousel> */}

			<h2 className="my-5">List of all the data</h2>			
            <Accordion dataFilter="aquatic"></Accordion>
		</div>
	);
}

export default Homepage;
