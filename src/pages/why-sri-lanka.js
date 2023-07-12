import React from 'react'
import WSL from '../images/wsl.jpg'
import WSLB from '../images/wsl2.jpg'
import './why-sri-lanka.css'
import './../App.css'


export default function whySriLanka() {

  
  return (   
  
    <div>
     <img
          className="d-block w-100 " src={WSL} alt="WSL" />

      <div className='row mt-5'>
        <span className='col-md-12 header-text-xx text-center'>WHY SRI LANKA</span>
      </div>

      <div className='row text-center content-text ms-5 me-5'>
      <p>Sri Lanka, the pearl of the Indian Ocean, is considered one of the most beautiful islands on our planet.</p>

      <p>The lush vegetation and nature, the fascinating landscapes with their seemingly endless rice fields and tea 
        plantations, waterfalls, national parks and miles of palm-fringed dream beaches, the magical royal sites and 
        ancient and modern temples of Buddhism and Hinduism are of unique beauty. You will find practically everything 
        Asia has to offer here.</p>

        

      

      </div>

      <div className='album-back-drop'>

      </div>

      <div className='row mt-5'>
        <span className='col-md-12 header-text-xx text-center'>WHAT WE CAN OFFER</span>
      </div>

      <div className='row text-center content-text ms-5 me-5'>
      <p>We would be happy to organize for you, preferably before your Ayurveda treatment, 
        a multi-day tour in an air-conditioned minibus tailored to your wishes, during which you 
        can experience the beauty and abundance of Sri Lanka and the warm and heartfelt hospitality 
        of the islanders up close.</p>

      <p>Admire the rich cultural heritage of a civilization with over 2000 years of written history.
        Sri Lanka's cultural wealth has been recognized by UNESCO, which has designated seven sites in the country as World Archaeological Heritage Sites:
        The holy city of Anuradhapura, The ancient city of Polonnaruwa, The Golden Temple of Dambulla, The ancient city of Sigiriya,
        The holy city of Kandy, The old town of Galle and its fortress, The Sinharaja Forest - a rainforest</p>

        <p>There is also a lot to see and discover in the vicinity of our Ayurveda hotels. We organize smaller excursions 
            and group excursions in your free time during the treatment on site.</p>

      </div>

      <img
          className="d-block w-100 " src={WSLB} alt="WSL" />




    </div>
  )
}
