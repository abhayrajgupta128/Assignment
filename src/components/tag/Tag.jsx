import React from 'react'
import './tag.css'

const Tag = ({name}) => {
  return (
    <div className='tag'>
        <div className='tag-name'>
            <p className='tag-name-in'>{name} </p>
        </div>
    </div>
  )
}

export default Tag
