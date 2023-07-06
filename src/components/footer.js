import React from 'react'
import Call from '../images/call.png'
import Email from '../images/email.png'
import Location from '../images/location.png'
import FaceBook from '../images/fb.png'
import Youtube from '../images/ut.png'
import Inst from '../images/inst.png'
import Twitter from '../images/tw.png'
import LogoBalck from '../images/logo_black.png'
import {LinkContainer} from 'react-router-bootstrap';
import './footer.css'

export default function Footer() {
  return (
    <div>
      <div className='row ms-5 me-5'>
        <div className='col-md-4'>
            <img src={Call} alt=''/>
            <span className='footer-text'>+ 44 09000 234 00</span>
        </div>
        <div className='col-md-4'>
        <img src={Email} alt=''/>
        <span className='footer-text'>hello@findmyayurveda.com</span>
        </div>
        <div className='col-md-4' >
        <img src={Location} alt=''/>
        <span className='footer-text'>Jungle Beach, Ahungalla,Sri Lanka</span>
        </div>
      </div>
      <div className='row social-media-label-background '>
        <div className='col-md-6 text-center align-middle' >
            <span className='social-media-text align-middle' >FOLLOW US ON SOCIAL MEDIA<br></br>FOR THE LATEST UPDATES</span>
        </div>
        <div className='col-md-6 text-center'>
          <div className=' align-items-center'>
        <img className='d-inline p-3' alt='' src={FaceBook} width={80} height={80} />
        <img className='d-inline p-3' alt='' src={Youtube} width={80} height={80}/>
        <img className='d-inline p-3' alt='' src={Inst} width={80} height={80}/>
        <img className='d-inline p-3' alt='' src={Twitter} width={80} height={80}/>
          </div>
        </div>
      </div>
      
      
      <div className='footer-link-background text-center'>

        <div className='container d-flex justify-content-center align-items-center'>            
        <div className='d-inline w-25 p-3'>
        <LinkContainer to="/about-us">
          <a className='footer-link'>ABOUT</a>
          </LinkContainer>
          </div>          
        <div className='d-inline w-25 p-3'>
        <LinkContainer to="/why-sri-lanka">
          <a className='footer-link' >WHY SRI LANKA</a>
          </LinkContainer>
          </div>
        <div className='d-inline w-25 p-3' >
        <LinkContainer to="/">
          <a >
                <img src={LogoBalck}  height={80} alt=''/>              
            </a> 
            </LinkContainer>
            </div>
            <div className='d-inline w-25 p-3'>
            <LinkContainer to="/faq">
              <a className='footer-link'>FAQ</a> 
            </LinkContainer>
              </div>
            <div className='d-inline w-25 p-3'>
            <LinkContainer to="/blog">
              <a className='footer-link' href="#blog">BLOG</a> 
            </LinkContainer>

               </div>

            

        </div>

        <hr className="solid mt-5 mb-5"/>

        <div>            
        <div className='d-inline p-5 footer-text'>&copy;2023 All Rights Recerved</div>
        <div className='d-inline p-5 w-100'>
          <span className='text-end footer-text'>Designed By SummitBiz</span>
          </div>
        </div>

         



      </div>

    </div>
  )
}
