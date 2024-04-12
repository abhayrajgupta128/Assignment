import React from 'react'
import './text2.css'
import Tag from '../tag/Tag'
import arrow from '../../assets/chevron-right.png'

const Text2 = () => {

  return (
    <div className='tags'>

      <p className='tags-heading'>Popular tags for handbag</p>
      
      <div className='tags-in'>
        <div className='tags-in-inside'>
            <div className='tag1'>
                <Tag name="Clutch"/>
            </div>
            <div className='tag2'>
                <Tag name="Fabric lining"/>
            </div>
            <div className='tag3'>
                <Tag name="Baggit"/>
            </div>
            <div className='tag4'>
                <Tag name="Multi"/>
            </div>
            <div className='arrow'>
                <img src={arrow} alt="arrow" />
            </div>
        </div>
        <div className='tags-in-arrow'></div>
      </div>
    </div>
  )
}

export default Text2
