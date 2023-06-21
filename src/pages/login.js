import React from 'react'
import './../App.css'
import './login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function login() {
  return (
    <div  className='login-background p-10'>
       <div className='row mt-5'>
        <span className='col-md-12 header-text-x text-center'>LOGIN</span>
      </div>
      <div className='row text-center ms-5 me-5'>
      <p>Our aim is to show that there is no an enormous range od SPA offers, which makes</p>
      </div>

      <div>
      <Container>
      <Row>
      <Col md={3}></Col>
        <Col md={6}>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username or Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter username or email address" />        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 mt-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
        <Form.Label>Forgot your password ? </Form.Label>
      </Form.Group>
      <Button variant="primary" type="submit"  className='custom-btn'>
        Login
      </Button>
    </Form>
    </Col>
    <Col md={3}></Col>
    </Row>
    </Container>
      </div>
    </div>
  )
}
