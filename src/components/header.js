import React, { Component } from 'react'
import './header.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'; 
import {LinkContainer} from 'react-router-bootstrap';

const handleClick = () => {
  window.location.replace('https://docs.google.com/forms/d/1OxJ33CelOAaAEtf-mZZQtpHsbI1Pq2PCA7DiYj2OkqM/prefill');
};

export default class Header extends Component {

  

  render() {
    return (
      <Navbar bg="white" expand="lg" >
      <Container >
      <LinkContainer to="/">
      <Navbar.Brand >
            <img responsive
              src={logo}
             
              height="80"
              className="d-inline-block align-top"              
            />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto"  >
          <LinkContainer to="/home">
            <Nav.Link >HOME</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about-us">
            <Nav.Link>ABOUT US</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/why-sri-lanka">
            <Nav.Link>WHY SRI LANKA</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/faq">
            <Nav.Link>FAQ</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
            <Nav.Link>BLOG</Nav.Link>     
            </LinkContainer>               
          </Nav>
          <Nav>
          
            <Nav.Link onClick={handleClick}>REGISTER YOUR HOTEL</Nav.Link>
            
            <LinkContainer to="/login" >
            <Nav.Link >
              LOGIN
            </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
}
