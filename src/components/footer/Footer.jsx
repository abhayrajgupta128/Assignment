import React from 'react'
import './footer.css'
import {images} from '../../constants';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-upper'>
        <div className='footer-upper-left'>
          <div className='footer-upper-left-text'>
            <p>Type your message</p>
          </div>
          <div className='footer-upper-left-image'><img src={images.paperclip} alt="paperclip" /></div>
        </div>

        <div className='footer-upper-right'>
          <div className='footer-upper-right-image'><img src={images.whitearrow} alt="arrow" /></div>
        </div>
      </div>

      <div className='footer-lower'>
        
        <div className='footer-lower-para'>
          <div className='start'>
            <p >Powered by</p>
          </div>
          <div className='mid'>
            <p>Krunk.ai</p>
          </div>
        </div>

        <div className='footer-lower-icon'>
          <img src={images.logo} alt="logo" />
        </div>
        
      </div>
    </div>
  )
}

export default Footer
