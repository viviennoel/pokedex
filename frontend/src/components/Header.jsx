import {Link} from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap';
import SearchBar from './SearchBar';

const Header = (props) => {
	return (
		<Navbar bg="dark" expand="lg" variant="dark">
			<Container fluid className="container">
				<Navbar.Brand><h1>Pokemon</h1></Navbar.Brand>
				<SearchBar idSearch="allPokemon"></SearchBar>
			</Container>
		</Navbar>
	);
};
export default Header;
