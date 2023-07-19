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
import WhySL from '../images/img57.jpg'
import News1 from '../images/n1.jpg';
import News2 from '../images/n2.jpg';
import News3 from '../images/n3.jpg';
import Arrow from '../images/arrow.png'
import Carousel from 'react-bootstrap/Carousel';
import './home.css'  
import './../App.css'
import {LinkContainer} from 'react-router-bootstrap';

const handleClick = () => {
  window.location.replace('https://docs.google.com/forms/d/1OxJ33CelOAaAEtf-mZZQtpHsbI1Pq2PCA7DiYj2OkqM/prefill');
};

export default function Home() {
  
  return (

    
    <div>     
        
      <Carousel>
      <Carousel.Item active>
        <img
          className="d-block w-100 "
          src={mainImage}
          alt="First slide"
        />
        <Carousel.Caption >
          <h1> Searching for the best matching Ayurveda Hotel in Sri Lanka?</h1>          
          <p>Only a few steps and we present you the solution</p>
          
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={mainImage}
          alt="Second slide"
        />
        <Carousel.Caption >
          <h1> Searching for the best matching Ayurveda Hotel in Sri Lanka?</h1>          
          <p>Only a few steps and we present you the solution</p>
          
        </Carousel.Caption> 
      </Carousel.Item>
      </Carousel>

      <div >
      <div className="text-center mt-5">  
      <img className="mb-4"
          src={flowerImage}/>
          
        </div>
        <div className="text-center">
          <p className="me-5 ms-5 text-sm-center header-text-xx">FIND THE PERFECT FIT</p>
          <p className="me-5 ms-5 text-sm-center content-text">Without hours of searching, writing emails and calls, all your questions will be answered using our customer-friendly platform to get the best <br></br>
          option tailor-made for you. If there are unanswered questions your personal contact person is always there for <br></br>
          you – before, during and after your journey. </p>
          <p className="me-5 ms-5 text-sm-center content-text">Enjoy exploring the world of Ayurveda in Sri Lanka! Let’s go…..</p>
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
              <p className='content-text'>FindMyAyurveda.com is a Sri-Lankan based team of German Travel Agent, very passionate former Ayurveda Hotel Manager and local IT Specialist.
              <br></br>More than two decades of experience working in and with Ayurveda Hotels in Sri Lanka we are conﬁdent to ﬁnd the best matching place for your needs and wishes and get the best deals for you</p>
              
              </div> 

              <div>
                <LinkContainer to="/about-us">
                  <button className='btn btn-custom mt-5' data-mdb-toggle="button" autoComplete="off" >EXPLORE</button>
                </LinkContainer>
              </div>

            </div>
            <div className='col-md-6'>
              <img src={About}  className='col-md-12 img-fluid'></img>
            </div>

          </div>

     

      
        <div class="thumbnail">
           <img className='d-block w-100 img-div img-fluid' src={SPA}></img>
           <div class="caption p-4">
              <h2> HOW DOES IT WORK?</h2>
              <p>Our system guides you through a small questionnaire and compares your answers with the parameters of our partner hotels. </p>
              <p>You will receive the best matching options immediately and can decide, which one you like most. 
                  After your selection we will contact the hotel, ask for availability and make the best deal you can get. </p>
              <p>You will receive our oﬀer and as soon as you conﬁrm, we will book the hotel for you.</p>
          </div>
        </div>  
      

      <div className='row'>
      <div className='col-md-4 mt-5  text-center'>
        <img src={S1} width={100} height={100}></img>
        <div>
        <span className='header-text-x'>BEST DEALS</span>        
        </div>
        <div>
        <span className='content-text'>Let’s get the best rates for your stay</span>
        </div>
      </div>
      <div className='col-md-4 mt-5  text-center'>
      <img src={S2} width={100} height={100}></img>
        <div>
        <span className='header-text-x'>LARGE VARIETY OF HOTELS</span>        
        </div>
        <div>
        <span className='content-text'>We partner with more than 50 Ayurveda Hotels in Sri Lanka</span>
        </div>
      </div>
      <div className='col-md-4 mt-5  text-center'>
      <img src={S3} width={100} height={100}></img>
      <div>
        <span className='header-text-x'>EASY PAYMENT OPTIONS</span>        
        </div>
        <div>
        <span className='content-text'>Comfortable online payment</span>
        </div>
      </div>
      </div>


      <div className='row mt-5'>
            <div className='col-md-6 p-5'>
              <span className='header-text-xx'>WHY SRI LANKA</span>
              <div className='mt-5'>
              <span className='content-text'>Two reasons that speak for treatments in Sri Lanka are:</span>
              <ul className='content-text'>
                <li>Authentic environment - This refers to the people, the climate, the vegetation, the food</li>
                <li>Lower personnel costs and lower manufacturing costs for oils, preparations. More performance for the same money</li>
              </ul>
              </div>

              <div>
                <LinkContainer to="/why-sri-lanka">
                  <button className='btn btn-custom mt-5' data-mdb-toggle="button" autoComplete="off" >MORE</button>
                </LinkContainer>
                <LinkContainer to="/sri-lanka-vs-india">
                  <button className='btn btn-custom mt-5 ms-5' data-mdb-toggle="button" autoComplete="off" > Sri Lanka vs. India</button>
                </LinkContainer>
              </div>

              

            </div>
            <div className='col-md-6'>
              <img src={WhySL}  className='col-md-12'></img>
            </div>

            

          </div>


      <div >
      <div className="text-center mt-5">  
      <img className="mb-4"
          src={flowerImage}/>
          
        </div>
        <div className="text-center">
          <p className="me-5 ms-5 text-sm-center header-text-xx">LATEST NEWS AND HELPFUL TIPS</p>
          <p className="me-5 ms-5 text-sm-center content-text">We’ll keep you updated with the latest trends and infos around Ayurveda and a healthy lifestyle. </p>
        </div>

      </div>

      <div className='row me-5 ms-5 '>  
       <div className='col-md-4 mb-5'><img
          className="d-block w-100 "
          src={News1}
          alt="First slide"
        />
        <div className='card-background '>
        <LinkContainer to="/ayurveda-in-everyday-life">       
            <span className="text-sm-left ">AYURVEDA IN EVERYDAY LIFE - PRANA UP YOUR LIFE</span>
        </LinkContainer>
        </div>
        </div>
       <div className='col-md-4 mb-5'><img
          className="d-block w-100 "
          src={News3}
          alt="First slide"
        />
        <div className='card-background '>
        <LinkContainer to="/why-you-should-drink-warm-water">     
           <span className="text-sm-left ">WHY YOU SHOULD DRINK WARM WATER?</span>
        </LinkContainer>
        </div>
        </div>
       <div className='col-md-4 mb-5'><img
          className="d-block w-100 "
          src={News2}
          alt="First slide"/>
           <div className='card-background'>
           <LinkContainer to="/ayurveda-and-historic-tourism-in-srilanka">     
             <span className="text-sm-center">AYURVEDA & HISTORIC TOURISM IN SRI LANKA</span>
           </LinkContainer>
          </div>
          </div>
        </div>

        
        <div className='bg-image'>
             <div class="thumbnail">      
                <img className='d-block w-100' src={Hotel} ></img>
                <div class="caption p-5">
                  <h2>  REGISTER YOUR HOTEL </h2>
                  
                  <p>If you like to partner with us, please register here and ﬁll our Google Form</p>
                  <button className='btn btn-custom mt-5' data-mdb-toggle="button" autoComplete="off" onClick={handleClick}>REGISTER</button>
                </div>
              </div>      
          
          </div>
      <div>
        
      </div>
  
    </div>
  )
}
