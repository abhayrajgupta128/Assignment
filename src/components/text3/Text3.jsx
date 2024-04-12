import React from 'react'
import './text3.css'
import Text from "../text/Text";
import Tag from "../tag/Tag";
import {images} from '../../constants';

const Text3 = () => {
  return (
    <div className='shopping'>
      <div className='shopping-cart'>

        <Text time="4:48 PM" />

        <div className='shopping-cart-bags'>
          <Text />
          <div className='shopping-cart-bags-image'>
            <img src={images.bag} alt="bag" />
          </div>
          
          <div className='shopping-cart-bags-products'>

            <div className='shopping-cart-bags-products-text1'>
              <div className='shopping-cart-bags-products-text1-in'>
                <p>Bags on <span  style={{ marginLeft: '3px' }}>Timpu</span></p>
              </div>
              <div className='shopping-cart-bags-products-text1-image'>
                <img src={images.vector} alt="vector" />
              </div>
            </div>

            <div className='shopping-cart-bags-products-text2'>
              <div><p>1123 products </p></div>
              <div><img src={images.arrow} alt="arrow" /></div>
            </div>
          </div>
        </div>
        
        <div className='shopping-text'>
          <p>Or set filter and help us choose the best bag for you.</p>
        </div>
      </div>

      <div className='shopping-filters'>

          <div className='shopping-filters-upper'>

            <div className='shopping-filters-upper-text'>
              <p>Select filters</p>
            </div>

            <div className='shopping-filters-upper-right'>
              <div className='shopping-filters-upper-right-image'><img src={images.slider} alt="slider" /></div>
              <div className='shopping-filters-upper-right-text'><p>Filter</p></div>
            </div>

          </div>

          <div className='shoping-filters-lower'>

            <div className='shopping-filters-lower1'>
              <div className='shopping-filters-lower-tag1'>
                <Tag name="Strap - Long x" />
              </div>

              <div className='shopping-filters-lower-tags'>
                <Tag name="Colour x"/>
              </div>

              <div className='shopping-filters-lower-tags'>
                <Tag name="Size x" />
              </div>
            </div>

            <div className='shopping-filters-lower1'>
              <div className='shopping-filters-lower-tags'>
                <Tag name="Brand x" />
              </div>

              <div className='shopping-filters-lower-tags'>
                <Tag name="Material x" />
              </div>
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default Text3
