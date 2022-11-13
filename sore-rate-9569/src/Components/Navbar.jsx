import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillBagFill } from "react-icons/bs";
import {Link,NavLink} from "react-router-dom"




function NavbarCom() {
  return (
    <>
      
     


      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"   fixed="top">
      <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Gurjazz Wear"
              src="/logo1.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Gurjazz Wear
          </Navbar.Brand>
    

       

    
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  className='me-auto' > 
          <Nav.Link>  <Link to="/">HOME</Link></Nav.Link>
            <Nav.Link><Link to="/women">WOMEN</Link></Nav.Link>
            <Nav.Link><Link to="/men">MEN</Link></Nav.Link>
            <Nav.Link><Link to="/kids">KIDS</Link></Nav.Link>
            <Nav.Link><Link to="/acc">TOP ITEMS</Link></Nav.Link>
           
          
          </Nav>
            <Nav>
            <Nav.Link ><Link to="/login">LOGIN</Link></Nav.Link>
            <Nav.Link> <BsFillBagFill/><Link to="/bag">Shoping Bag</Link></Nav.Link>
           
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}

export default NavbarCom;