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

const bgColors = { "Moonmist": "#F5F5F0","Pantone": "#647942"};

export default class Header extends Component {  

  render() {
    return (
      <Navbar style={{padding: "0",marginLeft:"50px"}}>
      <Container style={{marginLeft: "0",padding: "0",maxWidth:'100%'}}>
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
        <Navbar.Collapse id="basic-navbar-nav" style={{textAlign:"center"}}>
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
          <Nav style={{marginRight: "0"}}>
          
            <Nav.Link className='nav-link'  style={{backgroundColor:bgColors.Moonmist, height:'100px', paddingTop :'35px'}} onClick={handleClick}>REGISTER YOUR HOTEL</Nav.Link>
            
            <LinkContainer to="/login" style={{backgroundColor:bgColors.Pantone, height:'100px',paddingTop :'35px',textAlign:'center',color:'white'}} >
            <Nav.Link className='nav-link'  >
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
