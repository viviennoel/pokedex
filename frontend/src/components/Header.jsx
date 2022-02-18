
import {Link} from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

const Header = (props) => {
	return (
		<Navbar bg="dark" expand="lg" variant="dark">
			<Container fluid className="container">
				<Navbar.Brand><Link to="/"><h1>Pokemon</h1></Link></Navbar.Brand>
			</Container>
		</Navbar>
	);
};
export default Header;
