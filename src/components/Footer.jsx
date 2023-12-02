/* eslint-disable no-unused-vars */
import React from 'react'
import Facebook from "../assets/images/icon-facebook.svg"
import Twitter from "../assets/images/icon-twitter.svg"
import Pinterest from "../assets/images/icon-pinterest.svg"
import Instagram from "../assets/images/icon-instagram.svg"

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div><h3>Shortly</h3></div>
        <div className='footer-info'>
        <div>
            <p>Features</p>
            <ul>
                <li>Link shortening</li>
                <li>Brand Link</li>
                <li>Analytics</li>
            </ul>
            </div>
            <div>
            <p>Resources</p>
            <ul>
                <li>Blog</li>
                <li>Developer</li>
                <li>Support</li>
            </ul>
            </div>
            <div>
            <p>Company</p>
            <ul>
                <li>About</li>
                <li>Our Team</li>
                <li>Career</li>
                <li>Contact</li>
            </ul>
            </div>
        </div>
        <div className='social-icons'>
            <img src={Facebook} alt="facebook logo" />
            <img src={Twitter} alt="twitter logo" />
            <img src={Pinterest} alt="pinterest logo" />
            <img src={Instagram} alt="instagram logo" />
        </div>
        
    </div>
        
        
        </>
  )
}

export default Footer