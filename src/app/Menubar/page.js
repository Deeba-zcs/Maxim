// MENUBAR STARTS


'use client';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Style from "./menubar.module.css";
function Menubar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"className='m-2 p-0 fs-5 '>Next</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <ul className={ ` ms-auto ${Style.navbarnav}`}>

            <li className={`m-3 p-1 fs-5  ${Style.navitem}`}>
              <Link href="/Home"className='text-decoration-none text-white'>Home</Link>
            </li>
            <li className={`m-3 p-1 fs-5  ${Style.navitem}`}>
              <li><Link href="/About" className='text-decoration-none text-white'>About</Link></li>
            </li>
            <li className={`m-3 p-1 fs-5  ${Style.navitem}`}>
              <Link href="/service" className='text-decoration-none text-white'>Services</Link>
            </li>
            <li className={`m-3 p-1 fs-5  ${Style.navitem}`}>
              <Link href="/Portfolio" className='text-decoration-none text-white'>Prtfolio</Link>
            </li>
            <li className={`  m-3 p-1 fs-5  ${Style.navitem}`}>
              <Link href="/Team" className='text-decoration-none text-white'>Team</Link>
            </li>
            <li className={`  m-3 p-1 fs-5  ${Style.navitem}`}>
              <Link href="/gallery" className='text-decoration-none text-white'>Gallery</Link>
            </li>
            <li className={`  m-3 p-1 fs-5  ${Style.navitem}`}>
              <Link href="/Checkout" className='text-decoration-none text-white'>Contact</Link>
            </li>
         
          </ul>
          
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;

//MENUBAR ENDS


