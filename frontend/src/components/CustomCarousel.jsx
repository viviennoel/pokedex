import { Carousel } from 'react-bootstrap';

function CustomCarousel(props){
    return(
		// The carousel component will display all the data passed as props
        <Carousel fade>
			{props.data.map((item)=>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={item.image}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
			)}
		</Carousel>
    )
}
export default CustomCarousel;