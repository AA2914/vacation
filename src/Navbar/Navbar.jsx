import React from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function navbar() {
  return (
    <>
    <div id='div'></div>
 <Navbar expand="lg" className='Navbar'>
      <Container >
       
        <Navbar.Brand id='Brand'  href="#home" style={{color:'black'}}>Vacation<span style={{ color: '#fd7792'}}>Rental</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  style={{fontWeight:600,fontSize:'16px'}} >
            <Nav.Link className='ms-2'  href="/">Home</Nav.Link>
            <Nav.Link className='ms-2'  href="about">About</Nav.Link>
            <Nav.Link className='ms-2'  href="services">Services</Nav.Link>
            <Nav.Link className='ms-2'  href="apartment">Apartment Room</Nav.Link>
            <Nav.Link className='ms-2'  href="blog">Blog</Nav.Link>
            <Nav.Link className='ms-2'  href="contact">Contact</Nav.Link>

            <Nav.Link className='ms-2' href="/adminlogin" >Profile</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </>
  )
}

export default navbar

