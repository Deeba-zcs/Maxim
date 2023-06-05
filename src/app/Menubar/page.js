// MENUBAR STARTS


'use client';
import Link from 'next/link';
import {Container,Row ,Col} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Style from "./menubar.module.css";
function Menubar() {
  return (
    <Container>
      <Row>
        <Col>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="">
      <Container>
        <Navbar.Brand href="#home"className='m-2 p-0 fs-5 '>Next</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className=' ms-auto fw-bold'>
        <Link href="/Home" className='text-decoration-none text-white m-3 p-2'>Home</Link>
        <Link href="/About" className='text-decoration-none text-white m-3 p-2 '>About</Link>
       {/* <NavDropdown title ="Service" id="responsive-navbar-nav" className='text-decoration-none  bg-dark text-white m-3 p-2'>
       <Link href="/Service" className='text-decoration-none text-white ' >Services1</Link>
       <Link href="/Service"className='text-decoration-none text-white ' >Services2</Link>
       <Link href="/Service"className='text-decoration-none text-white ' >Services3</Link>
       </NavDropdown> */}
        <Link href="/Service" className='text-decoration-none text-white m-3 p-2'>Services</Link>
        <Link href="/Portfolio" className='text-decoration-none text-white m-3 p-2'>Prtfolio</Link>
        <Link href="/Team" className='text-decoration-none text-white m-3 p-2'>Team</Link>
        <Link href="/gallery" className='text-decoration-none text-white m-3 p-2'>Gallery</Link>
        <Link href="/Checkout" className='text-decoration-none text-white m-3 p-2'>Contact</Link>
        </Nav>
        </Navbar.Collapse>
       
        </Container>
    </Navbar>
    </Col>
      </Row>
      </Container>
  );
}

export default Menubar;

//MENUBAR ENDS


