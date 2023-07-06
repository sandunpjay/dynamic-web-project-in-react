import React from 'react'
import About from '../images/about.jpg';
import './../App.css'
import Babara from '../images/about1.jpg'
import Buddhi from '../images/about3.jpg'
import Samitha from '../images/about2.jpg'
import BottomImg from '../images/about4.jpg'

export default function AboutUs() {
  return (
    <div>      
      <img
          className="d-block img-fluid" src={About}
          alt="First slide"
        />

      <div className='row mt-5'>
        <span className='col-md-12 header-text-x text-center'>ABOUT US</span>
      </div>

      <div className='row text-center'>
      <p>FindMyAyurveda.lk is a Sri-Lankan based team of German Travel Agent and local IT Specialist. </p>

      <p>More than a decade of experience working in and with Ayurveda Hotels in Sri Lanka we are confident to find the best matching place for your needs and wishes</p>

      <p>Without hours of searching, writing emails and calls, all your questions will be answered using our customer friendly platform to get the best option tailor-made for you. If there are unanswered questions your personal contact person is always there for you – before, during and after your journey. </p>

      <p>Enjoy exploring the world of Ayurveda in Sri Lanka!</p>

      </div>

      <div className='row div-background'>
      <div className='ms-5 col-md-6'>
              <span className='header-text-xx mt-5'>MEET BABARA</span>
              
              <p className='mt-5'>In 2002 I turned my vocation into a profession. I enjoyed training in various areas of 
                bodywork and life coaching, e.g. as an Ayurveda therapist, WATSU® practitioner 
                (body work in 35 degree warm water), practitioner for Tachyon Holistic Wellness as well as 
                sports and foot reflex zone therapist.</p>

              <p>In doing so, I discovered my instinct and fascination for the Ayurveda philosophy and therapy, 
                restoring balance and strengthening the life force that is in every single cell of the body. 
                This work fulfills my dream of supporting people, touching them, participating, and especially 
                learning from everything and everyone with joy and ease...</p>  

              <p>Several Ayurveda cures, many trips and finally the move to Sri Lanka at the end of 2010, 
                my love for this country and the people inspire me to advise and support you as your local 
                tour operator in matters of Ayurveda and Sri Lanka as well as Ayurveda trips and more.</p>
            </div>
            <div className='col-md-5'>
              <img src={Babara} className='d-block img-fluid'></img>
            </div>
      </div>

      <div className='row'>
        <div className='col-md-5'>
              <img src={Samitha} className='d-block img-fluid' height={300}></img>
            </div>

        <div className='ms-5 col-md-6 '>
             
              <span className='header-text-xx mt-5 ms-5'>MEET SAMITHA</span>
              
              <p className='mt-5 ms-5'>I Would Like To Describe Myself As An Entrepreneur And Software Developer. 
              With A Strong Passion For Entrepreneurship I Founded My Own IT Company, Summit Business Systems, 
              In 2011 And Have Been Successfully Operating It To Date.</p>

              <p className='ms-5'>I Would Like To Describe Myself As An Entrepreneur And Software Developer. With A Strong Passion
                 For Entrepreneurship I Founded My Own IT Company, Summit Business Systems, 
                In 2011 And Have Been Successfully Operating It To Date.</p>  

              <p className='ms-5'>I Would Like To Describe Myself As An Entrepreneur And Software Developer. With A Strong 
                Passion For Entrepreneurship I Founded My Own IT Company, Summit Business Systems, In 2011 
                And Have Been Successfully Operating It To Date</p>

                <p className='ms-5'>Contact Me: samitha@findmyayurveda.Com</p>
            </div>
            
      </div>

      <div className='row div-background'>
      <div className='ms-5 col-md-8'>
              <span className='header-text-xx mt-5'>MEET BUDDHI</span>
              
              <p className='mt-5'>Known In Hotel & Travel Trade As Buddhi My Total Experience In Hotel Management 
              Is 30 Years, In Managing Ayurveda Hotels More Than 20 Years.</p>

              <p>During My Work I Developed As A Pioneer In Establishing And Marketing Sri Lanka’s Premier 
                Ayurveda Resort At Beruwala Heritance Ayurveda Maha Gedara With Great Success, 
                Winning Many Awards For The Hotel Over The Years.</p>  

              <p>I Travelled To Many Countries And Established A Bunch Of Business Contacts In Germany, 
                Austria, Switzerland, Japan, Russia And Many More.</p>

                <p>Contact Me: buddhi@findmyayurveda.Com</p>


            </div>
            <div className='col-md-3 align-right'>
              <img src={Buddhi} className='d-block img-fluid'></img>
            </div>
      </div>

      <div className='row'>
              <img src={BottomImg} className='d-block w-100 img-fluid'></img>
       </div>
      
    </div>
  )
}
