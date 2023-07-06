import React from 'react'
import './../App.css'
import BLOG from '../images/blog.jpg'
import BLOGB from '../images/blog1.jpg'
import image53 from '../images/img53.jpg'

export default function blog() {
  return (
    <div>
      <div className='main-banner'>
     <img
          className="d-block " src={BLOG}
          alt="First slide"
        />
        </div>

        <div className='row mt-5'>
        <span className='col-md-12 header-text-x text-center'>LATEST NEWS AND EVENTS</span>
      </div>

      <div className='row text-center ms-5 me-5'>
      <p>Sri Lanka, the pearl of the Indian Ocean, is considered one of the most beautiful islands on our planet.</p>
      </div>

      <div className='row ms-5 me-5'>
        <div className='col-md-4'>
        <img
          className="d-block w-100 "
          src={image53}
          alt="First slide"
        />
        <div className='card-background p-5'>
        <span class="text-sm-left ">Blog Title</span>
        </div>

        </div>
        <div className='col-md-4'>
        <img
          className="d-block w-100 "
          src={image53}
          alt="First slide"
        />
        <div className='card-background p-5'>
        <span class="text-sm-left ">Blog Title</span>
        </div>
          
        </div>
        <div className='col-md-4'>
        <img
          className="d-block w-100 "
          src={image53}
          alt="First slide"
        />
        <div className='card-background p-5'>
        <span class="text-sm-left ">Blog Title</span>
        </div>
          
        </div>

      </div>

      <div className='row ms-5 me-5 mt-5'>
        <div className='col-md-4'>
        <img
          className="d-block w-100 "
          src={image53}
          alt="First slide"
        />
        <div className='card-background p-5'>
        <span class="text-sm-left ">Blog Title</span>
        </div>

        </div>
        <div className='col-md-4'>
        <img
          className="d-block w-100 "
          src={image53}
          alt="First slide"
        />
        <div className='card-background p-5'>
        <span class="text-sm-left ">Blog Title</span>
        </div>
          
        </div>
        <div className='col-md-4'>
        <img
          className="d-block w-100 "
          src={image53}
          alt="First slide"
        />
        <div className='card-background p-5'>
        <span class="text-sm-left ">Blog Title</span>
        </div>
          
        </div>

      </div>
     <div className='main-banner mt-5'>
      <img
          className="d-block w-100 " src={BLOGB} alt="WSL" />
      </div>

    </div>
  )
}
