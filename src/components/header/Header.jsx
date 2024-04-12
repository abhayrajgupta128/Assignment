import React from 'react'
import './header.css'
import frame5606 from '../../assets/Frame 5606.png';
import vector from '../../assets/Vector.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <div className='header-left-image'>
          <img src={frame5606} alt="frame5606" />
        </div>
        <div className='header-left-text'>
          <div className='header-left-text-upper'>
            <div className='header-left-text-upper-1'>
              <p className='header-left-text-upper-1-name'>Timpu</p>
            </div>
            <img src={vector} alt="vector"/>
          </div>
          <div className='-header-left-text-lower'>
          <p className='header-left-text-lower-1-name'>Chat assistant</p>
          </div>
        </div>
      </div>

      <div className='header-right'>
        <div className='header-right-eclipse'></div>
        <p className='header-right-text'>Online</p>
      </div>
      
    </div>
  )
}

export default Header


