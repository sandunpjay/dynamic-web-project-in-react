import React from 'react'

import './../App.css'
import './login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function registerYourHotel() {
  return (
    <div  className='login-background p-10'>
       <div className='row mt-5'>
        <span className='col-md-12 header-text-x text-center'>Register Your Hotel</span>
      </div>
      <div className='row text-center ms-5 me-5'>
      <p>Enter the login information for your account. You will be able to create additional users after registring</p>
      </div>

      <div>
      <Container>
      <Row>
      <Col md={3}></Col>
        <Col md={6}>
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="email" placeholder="First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="password" placeholder="Last Name" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>ContactNo</Form.Label>
          <Form.Control type="password" placeholder="Contact No" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="email" placeholder="Password" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
      </Row>
      
      <Button variant="primary" type="submit"  className='custom-btn w-30'>
        Register
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
