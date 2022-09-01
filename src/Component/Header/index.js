
import React  from "react";
import {Link} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';



export default function HeaderComponent(){
    
    return(
        <>
        <Navbar  sticky="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Quiz App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll"/>
        <Navbar.Collapse id="navbarScroll" >
          <Nav className="me-auto" >

          <NavLink  eventKey="1" as={Link} to="/">Home</NavLink>
          <NavLink  eventKey="1" as={Link} to="/contact">Contact Us</NavLink>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}