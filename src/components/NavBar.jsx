/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/logo.svg"

const Nav = () => {
  const[showMenu,setShowMenu]=useState(false);

  const toggleMenu=()=> {
    setShowMenu(!showMenu)
  }
  return (
    <>
    <div className='navigation'>
    <div className='logo'> 
    
  <img src={Logo} alt="Company logo" />
  <div className={`menu-icon ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
           
            <span className="material-symbols-outlined menu-icon">
menu
</span>
          </div>
          <div className={`links ${showMenu ? 'open' : ''}`}>
            
      <Link to ="/features">
    Features
    </Link>
    <Link to ="/prices">
    Prices
    </Link>
    <Link to ="/resource">
    Resources
    </Link>
    </div>
    <div className='loginSection' >
        <Link to ="/login">
        login
        </Link>
        <Link to ="/signup"className='signupNav' >
        signup
        </Link>
       
        </div>
    </div>
   </div>
    
  
  
    
   
    
    
    </>
  )
}

export default Nav