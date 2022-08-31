import React from 'react';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div className='bg-light'>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <h2 className='font-weight' href="#home">Ahmmed<span className='ps-1 good'>.</span></h2>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">

          <Nav.Link as={Link} href="#home" to="/home" className="nav-bar" >Home</Nav.Link>

          <Nav.Link className="nav-bar" as={Link} to="/about"href="#about">About</Nav.Link> 

          <Nav.Link as={Link} href='#skills' to="/skills" className="nav-bar"  >Skills</Nav.Link>

          <Nav.Link className="nav-bar" as={Link} to="/services" href="#services">Resume</Nav.Link>

          <Nav.Link className="nav-bar" as={Link} to="/projects" href="#projects">Projects</Nav.Link>
           

          </Nav>   
          <Nav>
          <Navbar.Brand className="button px-4 py-2" href="#contact" as={Link}  to='/about'>Contact me</Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    <hr className='line'></hr>
    

    </div>
  );
};

export default Header;