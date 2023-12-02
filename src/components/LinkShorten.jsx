/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react';
import Button from './Button';

const generateHash = (str)=> {
  let hash = 0;
  if (str.length === 0) {
    return hash;
  }
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }
  return hash;
};

const LinkShorten = ({updateNumLinks}) => {
  const [originalLink, setOriginalLink] = useState('');
  const [shortenedLinks, setShortenedLinks] = useState([]);

  // Inside LinkShorten component
// After setting shortened links
//const numShortenedLinks = shortenedLinks.length;
//updateNumLinks(numShortenedLinks); // Pass the number of links to the parent component
 

//useEffect(() => {
//  const numShortenedLinks = shortenedLinks.length;
//  updateNumLinks(numShortenedLinks);
//}, [shortenedLinks, updateNumLinks]);

  const handleChange = (e) => {
    setOriginalLink(e.target.value);
  };

  const handleShortenItClick = (e) => {
    e.preventDefault();
    const hash = generateHash(originalLink);
    const shortened = `https://shortened.url/${hash}`; 
   

    setShortenedLinks([...shortenedLinks, { original: originalLink, shortened, copied: false }]);
    setOriginalLink(''); // Clear input field after shortening
  };

  
  const handleCopyLink = (linkIndex) => {
    const updatedLinks = [...shortenedLinks];
    navigator.clipboard.writeText(shortenedLinks[linkIndex].shortened)
      .then(() => {
        updatedLinks[linkIndex].copied = true;
        setShortenedLinks(updatedLinks);
      })
      .catch((err) => {
        console.error('Failed to copy link:', err);
        // Handle the error, show a message, etc.
      });
  };

  


  return (
    <div className='shorten-link'>
      <form onSubmit={handleShortenItClick}>
        <label htmlFor='linkInput' />
        <input
          type='text'
          id='linkInput'
          value={originalLink}
          placeholder='Shorten a link here...'
          onChange={handleChange}
        />
        <div>
          <Button type='submit' className='shorten-it-button'>
            Shorten It!
          </Button>
        </div>
        <div className='shortened'>
        <div className='returned_link'>
        {shortenedLinks.map((link, index) => (
          <div key={index} className='form' >
            <div>
            <a href={link.original} target='_blank' rel='noopener noreferrer'>
              {link.original}
            </a>
            </div>
            <div>
            <a href={link.shortened} target='_blank' rel='noopener noreferrer'>
              {link.shortened}
            </a>
            </div>
            <div>
            <Button
            className="copy-shortened-button"
            onClick={() => handleCopyLink(index)}
              disabled={link.copied}
            >
              {link.copied ? 'Copied!' : 'Copy Link'}
            </Button>
            </div>
            
          </div>
          
        ))}
        </div>
        </div>
        
      
      </form>
    </div>
  );
};

export default LinkShorten;

