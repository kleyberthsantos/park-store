import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

import './NavBar.css';



const navBar = () => {
  return (
      <Navbar className='navBarBody' expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to='/' className='navText'>Palmilla Park</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/category/bikepark' className='navText'>Bike Park</Link>
            <Link to='/category/padel' className='navText'>Padel</Link>
            <Link to='/category/training' className='navText'>Trekking</Link>
          </Nav>
          <Navbar.Brand>
          <Link to='/cart' className='navText'><CartWidget/></Link>
        </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navBar;