/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Cards from './Cards'
import Brand from "../assets/images/icon-brand-recognition.svg";
import DetailedRecords from "../assets/images/icon-detailed-records.svg";
import FullyCustomizable from "../assets/images/icon-fully-customizable.svg";


const Info = () => {
    const cardData = [
        {
          logo:Brand ,
          title: "Brand Recognition",
          description: "Boost your brands recognition with each click . Generic links dont mean a thing. Branded links help instil confidence in your content.",
          bg:"#fff",
         
        },
          
         
        
        {
          logo:DetailedRecords,
          title: "Detailed Records",
          description: "Gain insight into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
          bg:"#fff",
        
       
          
        },
        {
          logo: FullyCustomizable,
          title: "Fully Customizable",
        description: "Improve brand awareness and content discoverability through customization links, supercharging audience engagement.",
        bg:"#fff",
       
        
       
        },
      ];
  return (
   <><div className='advance'>
    <div className='advance-text' >
    <h2>Advance Statistic</h2>
    <p>Track how your links are performing across the web with 

    our advanced statistic dashboard</p>
    </div>
    <div className='cardInfo'>
      {cardData.map((card, index) => (
             <div key={index} style={{ marginTop: index === 0 ? '0' : `${index * 2}rem`}}>
             <Cards
               icon={card.logo}
               title={card.title}
               desc={card.description}
               background={card.bg}
              
              
             />
           </div>
      ))}
      
      <hr  className='seperator'/>
    </div>
   </div>
   

   </>
  )
}

export default Info
