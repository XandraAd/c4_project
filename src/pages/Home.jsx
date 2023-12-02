/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import NavBar from '../components/NavBar'
import HeroSection from "../components/HeroSection"
import LinkShorten from '../components/LinkShorten'
import Info from '../components/info'
import Boost from '../components/Boost'
import Footer from '../components/Footer'




const Home = () => {
 
    
  return (
    <>
    <div>
    <NavBar/>
 
    </div>
    
    <div>
    <HeroSection/>
    </div>
    <div>
    <LinkShorten />
    <Info  />
    </div>
{ /* <div>
    <Info/>
  </div>*/}
  <div>
    <Boost/>
  </div>
  <div>
    <Footer/>
  </div>

    </>
  )
}

export default Home