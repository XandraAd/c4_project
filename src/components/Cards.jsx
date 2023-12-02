/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Cards = ({icon,title,desc,background}) => {
  const cardStyle = {
  
    backgroundColor: background,
  }

 



  

  
  
  return (

    <div className="card"  style={cardStyle}>
      <img src={icon} alt="Logo" />
      <h3>{title}</h3>
      <p>{desc}</p>
     
    </div>
  )
}

export default Cards