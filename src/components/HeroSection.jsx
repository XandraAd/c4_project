/* eslint-disable no-unused-vars */
import React from 'react'
import Illustration from "../assets/images/illustration-working.svg"
import Button from './Button';

const HeroSection = () => {
    const handleGetStartedClick = () => {
        // Functionality for "Shorten It" button

        console.log('get started clicked');
      };
  return (
   <>
   <div className='hero'>
    <div  className='heroLeft'>
        <h1>More than just shorter links</h1>
        <p>Build your brand&#39;s recognition and get detailed insights on how your links are performing</p>
        <Button onClick={handleGetStartedClick} className="get-started-button">
        Get Started
      </Button>

        
        </div>
    <div className='heroRight'>
        <img src={Illustration} alt="working" />
    </div>
    </div>
    </>
  )
}

export default HeroSection