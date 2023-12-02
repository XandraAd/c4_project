/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'

const Boost = () => {

    const handleGetStartedClick = () => {
        // Functionality for "Shorten It" button
        
        console.log('get started clicked');
      };
  return (
    <>
    <div className='boost_link'>
      <div>
      <h2>Boost your links today</h2>
      </div>
    
   
    <div>
    <Button onClick={handleGetStartedClick} className="get-started-button">
        Get Started
      </Button>
    </div>
    </div>
    </>
  )
}

export default Boost