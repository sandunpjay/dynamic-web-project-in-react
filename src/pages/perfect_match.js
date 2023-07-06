import React from 'react'
import './home.css'
import './../App.css'
import flowerImage from '../images/flower.png'; 
import perfect from '../images/perfect.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';
import HotelService from '../services/HotelService'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class PerfectMatch extends Component{
 
  constructor(props){
    super(props);
    this.state ={
      hotels :[]
    }
}

componentDidMount(){
  HotelService.getHotels().then((res)=>{
  this.setState({ hotels :res.data})
  });
}

  render() {
  return (
    <div>
      <div className="text-center mt-5">  
      <img className="mb-4"
          src={flowerImage}/>
          
        </div>
     <div className="text-center">
          <p className="me-5 ms-5 text-sm-center header-text-xx">WE FOUND THE PERFECT MATCH</p>
          <p className="me-5 ms-5 text-sm-center content-text">FindMyAyurveda.lk is a Sri-Lankan based team of German Travel Agent and local IT Specialist.
               More than  <br></br>a decade of experience working in and with Ayurveda.</p>
        </div>

        <div className='m-5 flex-d-inline'> 

        <Container fluid>
          <Row >
          {this.state.hotels.map(hotel => {  
            return (             
            <Col sm={3} key={hotel.hotelId} >
             <Card style={{ width: '18rem' }} className='mb-5' >
               <Card.Img variant="top" src= {require(`../images/${hotel.thumbnailImg}`)}/>
                <Card.Body>
                 <Card.Title className='hotel-card-title'>{hotel.name}</Card.Title>
                 <Card.Text className='hotel-card-desc'>
                    {hotel.description}
                 </Card.Text>
                 <Button variant="primary" className='btn btn-custom'>Get a Quote</Button>
               </Card.Body>
             </Card>



            </Col>
            );
            })
          }
          </Row>
        </Container>

          

          


        </div>


        <div className='bg-image'>      
           <img className='d-block w-100 img-fluid' src={perfect} alt=''>
            </img>        
        </div>

    </div>
  )
  }
}  

export default PerfectMatch
