import React from 'react'
import WSL from '../images/n3.jpg'
import WSLB from '../images/wsl2.jpg'
import './why-sri-lanka.css'
import './../App.css'

export default function whyYouShouldDrinkWarmWater() {
  return (
    <div>
        <img
          className="d-block w-100 " src={WSL} alt="WSL" />

      <div className='row mt-5 ms-5'>
        <span className='col-md-12 header-text-xx'>WHY YOU SHOULD DRINK WARM WATER?</span>        
      </div>

      <div className='row mt-5 ms-5 me-5'>
          <p>The old, wise men of Sri Lanka had already realised that boiling changes the molecular structure of water. It becomes "lighter" through this process, the body absorbs it faster and it penetrates deeper into the tissues. In addition, it gently but intensively eliminates toxins. 
           Regularly drinking the boiled warm water has numerous healing eﬀects on the organism. Therefore, it is recommended to integrate this simple and digestible measure into everyday life, even beyond the temporary cleansing therapy.</p>
           
          <p className='fw-bold'>So here is our tip:</p>
            <p>Put about two litres of pure water, which has been boiled for 20 to 30 minutes, into a thermos ﬂask so that it stays warm for as long as possible. Then drink it in sips, as hot as possible, throughout the day. Simmering improves the taste of the water and additions such as ginger or lemon juice provide variations. 
            </p>

          
      </div>

      <img
          className="d-block w-100 " src={WSLB} alt="WSL" />
    </div>
  )
}
