import React from 'react'
import './footer.css'
import paperclip from "../../assets/paperclip.png";
import whitearrow from "../../assets/whitearrow.png";
import logo from "../../assets/Logo.svg";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-upper'>
        <div className='footer-upper-left'>
          <div className='footer-upper-left-text'>
            <p>Type your message</p>
          </div>
          <div className='footer-upper-left-image'><img src={paperclip} alt="paperclip" /></div>
        </div>

        <div className='footer-upper-right'>
          <div className='footer-upper-right-image'><img src={whitearrow} alt="arrow" /></div>
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
          <img src={logo} alt="logo" />
        </div>
        
      </div>
    </div>
  )
}

export default Footer
