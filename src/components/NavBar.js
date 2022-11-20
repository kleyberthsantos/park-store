import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <Navbar  expand="lg" id="navbackground">
      <Container>
        <Navbar.Brand className="customNavBar" href="#home">Palmilla Park</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="customNavBar" href="#home">Bikepark</Nav.Link>
            <Nav.Link className="customNavBar" href="#link">Padel</Nav.Link>
            <NavDropdown className="customNavBar" title="Tienda" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ticket</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cancha
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Trekking</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="#link"><IoCartOutline className="icon"/></Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;