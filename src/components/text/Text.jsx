import React from 'react';
import './text.css';

const Text = ({ text,  time }) => {
  return (
    <div className='box-inside'>
      
      <div className='box-inside-textbox'>
        <p className='box-inside-textbox-text'>{text}</p>
      </div>
      
      <div className='box-inside-time'>
        <p className='box-inside-time-textbox'>{time}</p>
      </div>

      
    </div>
  );
};

export default Text;

