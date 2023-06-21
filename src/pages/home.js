import React from 'react';
import mainImage from '../images/main.jpg'; 
import flowerImage from '../images/flower.png'; 
import image47 from '../images/img47.jpg'; 
import image53 from '../images/img53.jpg'; 
import image51 from '../images/img51.jpg'; 
import About from '../images/about.jpg';
import Hotel from '../images/hotel.jpg';
import SPA from '../images/img55.jpg';
import S1 from '../images/s1.png';
import S2 from '../images/s2.png';
import S3 from '../images/s3.png';
import WhySL from '../images/wsl.jpg'
import News1 from '../images/n1.jpg';
import News2 from '../images/n2.jpg';
import News3 from '../images/n3.jpg';
import Arrow from '../images/arrow.png'
import Carousel from 'react-bootstrap/Carousel';
import './home.css'
import './../App.css'
import {LinkContainer} from 'react-router-bootstrap';

export default function Home() {
  return (
    <div>
        
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={mainImage}
          alt="First slide"
        />
        <Carousel.Caption >
          <h1>Discover The Best Aurvada</h1>
          <h1>Hotels In Sri Lanka</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          
        </Carousel.Caption> 
      </Carousel.Item>
      </Carousel>

      <div >
      <div class="text-center mt-5">  
      <img class="mb-4"
          src={flowerImage}/>
          
        </div>
        <div class="text-center">
          <p class="me-5 ms-5 text-sm-center header-text-xx">FIND THE PERFECT FIT</p>
          <p class="me-5 ms-5 text-sm-center content-text">FindMyAyurveda.lk is a Sri-Lankan based team of German Travel Agent and local IT Specialist.
               More than  <br></br>a decade of experience working in and with Ayurveda.</p>
        </div>

      </div>

      <div className='row me-5 ms-5 '>  
      <div className='col-md-4 mb-5'>
        <img className="d-block w-100 "  src={image47}  alt="First slide" />
        <div className='w-100 card-background'>       
          <div className='left'>
          <LinkContainer to="/beauty-and-wellness-program">
          <span className="text-sm-left">BUEATY AND WELNESS PROGRAM </span>
          </LinkContainer>
          </div> 
          <div className='right'><img width={30} height={30}  src={Arrow} alt="Arr" /></div>        
        </div>
        </div>

        <div className='col-md-4 mb-5'>
          <img className="d-block w-100" src={image53} alt="First slide"/>
        <div className='card-background'>
        <div className='left'>
        <LinkContainer to="/panchakarma-treatment">
        <span className="text-sm-left ">PANCHAKARMA TREATMENT</span>
        </LinkContainer>
        </div>
		    
        <div className='right'><img width={30} height={30}  src={Arrow} alt="Arr" /></div>  
        </div>
        </div>

        <div className='col-md-4 mb-5'><img
          className="d-block w-100 "
          src={image51}
          alt="First slide"/>
           <div className='d-block card-background '>
           <div className='left'>
           <LinkContainer to="/not-sure-what-i-want">
           <span className="text-sm-center">NOT SURE WHAT I WANT</span>
           </LinkContainer>
           </div>
           <div className='right'><img width={30} height={30}  src={Arrow} alt="Arr" /></div>  
          </div>
          </div>

      </div>

      <div className='row ms-5'>
            <div className='col-md-6'>
              <span className='header-text-xx'>ABOUT US</span>
              <div className='mt-5'>
              <span className='content-text'>FindMyAyurveda.Lk Is A Sri-Lankan Based Team Of German Travel Agent And Local IT Specialist. More Than A Decade Of Experience Working In And With Ayurveda Hotels In Sri Lanka We Are Confident To Find The Best Matching Place For Your Needs And Wishes.</span>
              
              </div>

              <div>
              <button className='btn btn-custom mt-5' data-mdb-toggle="button" autocomplete="off">EXPLORE</button>
              </div>

            </div>
            <div className='col-md-6'>
              <img src={About} height={500} className='col-md-12'></img>
            </div>

          </div>

     

      <div>
         <img className='d-block w-100 ' src={SPA}></img>
      </div>

      <div className='row spa-content-box'>
      <div className='col-md-4 mt-5  text-center'>
        <img src={S1} width={100} height={100}></img>
        <div>
        <span>Text </span>        
        </div>
        <div>
        <span>Description</span>
        </div>
      </div>
      <div className='col-md-4 mt-5  text-center'>
      <img src={S2} width={100} height={100}></img>
        <div>
        <span>Text </span>        
        </div>
        <div>
        <span>Description</span>
        </div>
      </div>
      <div className='col-md-4 mt-5  text-center'>
      <img src={S3} width={100} height={100}></img>
      <div>
        <span>Text </span>        
        </div>
        <div>
        <span>Description</span>
        </div>
      </div>
      </div>


      <div className='row'>
            <div className='col-md-6 p-5'>
              <span className='header-text-xx'>WHY SRI LANKA</span>
              <div className='mt-5'>
              <span className='content-text'>FindMyAyurveda.Lk Is A Sri-Lankan Based Team Of German Travel Agent And Local IT Specialist. More Than A Decade Of Experience Working In And With Ayurveda Hotels In Sri Lanka We Are Confident To Find The Best Matching Place For Your Needs And Wishes.</span>
              </div>

            </div>
            <div className='col-md-6'>
              <img src={WhySL} height={400} className='col-md-12'></img>
            </div>

          </div>


      <div >
      <div class="text-center mt-5">  
      <img class="mb-4"
          src={flowerImage}/>
          
        </div>
        <div class="text-center">
          <p class="me-5 ms-5 text-sm-center header-text-xx">LATEST NEWS AND EVENTS</p>
          <p class="me-5 ms-5 text-sm-center">FindMyAyurveda.lk is a Sri-Lankan based team of German Travel Agent and local IT Specialist.
               More than  <br></br>a decade of experience working in and with Ayurveda.</p>
        </div>

      </div>

      <div className='row me-5 ms-5 '>  
       <div className='col-md-4 mb-5'><img
          className="d-block w-100 "
          src={News1}
          alt="First slide"
        />
        <div className='card-background p-5'>
        <span class="text-sm-left ">BUEATY AND WELNESS PROGRAM</span>
        
        </div>
        </div>
       <div className='col-md-4 mb-5'><img
          className="d-block w-100 "
          src={News2}
          alt="First slide"
        />
        <div className='card-background p-5'>
        <span class="text-sm-left ">PANCHAKARMA TREATMENT</span>
        </div>
        </div>
       <div className='col-md-4 mb-5'><img
          className="d-block w-100 "
          src={News3}
          alt="First slide"/>
           <div className='card-background p-5'>
           <span class="text-sm-center">NOT SURE WHAT I WANT</span>
           
          </div>
          </div>
        </div>

        
        <div className='bg-image'>
      
         <img className='d-block w-100 img-fluid' src={Hotel} ></img>
         
       
          
          </div>
      <div>
        
      </div>
  
    </div>
  )
}
