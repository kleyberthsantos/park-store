import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import './NavBar.css'

import { Link } from 'react-router-dom';

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
            <Nav.Link> <Link to='/categoria/bikepark' className='navText'>Bike Park</Link></Nav.Link>
            <Nav.Link> <Link to='/categoria/padel' className='navText'>Padel</Link></Nav.Link>
            <Nav.Link> <Link to='/categoria/training' className='navText'>Trekking</Link></Nav.Link>
            {/* <Nav.Link> <CartWidget/> </Nav.Link> */}
          </Nav>
          <Navbar.Brand>
          <Link to='/' className='navText'><CartWidget/></Link>
        </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navBar;