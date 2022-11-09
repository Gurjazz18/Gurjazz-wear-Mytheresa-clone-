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
          <Nav className="me-auto"  > 
            <Nav.Link  href="/women" >WOMEN</Nav.Link>
            <Nav.Link  href="/men" >MEN</Nav.Link>
            <Nav.Link  href="/kids" >KIDS</Nav.Link>
            <Nav.Link href="/life" >LIFE</Nav.Link>
          
          </Nav>
          <Nav>
            <Nav.Link href="/login">LOGIN</Nav.Link>
            <Nav.Link href="/bag"> <BsFillBagFill/> Shoping Bag</Nav.Link>
           
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}

export default NavbarCom;