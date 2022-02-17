import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import SearchBar from './SearchBar';

const Header = (props) => {
	return (
		<Navbar bg="dark" expand="lg" variant="dark">
			<Container fluid>
				<Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" expanded='false'>
					<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
						<Nav.Link href="#action1">Home</Nav.Link>
						<Nav.Link href="#action2">Link</Nav.Link>
						<NavDropdown title="Link" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
						</NavDropdown>
						
					</Nav>
                    <SearchBar idSearch="allPokemon"></SearchBar>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
export default Header;
