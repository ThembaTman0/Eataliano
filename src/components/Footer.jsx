import React from 'react'
import { FaInstagram,FaFacebookF,FaMapMarkerAlt,FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <footer className='footer-div'>
        
        <ul>
          <li><FaInstagram/></li>
          <li><FaFacebookF/></li>
          <li><FaMapMarkerAlt/></li>
          <li><a href='https://github.com/ThembaTman0?tab=repositories' target="_blank"><FaGithub/></a></li>
        </ul>
        <p>© Themba Ngobeni™ . All Rights Reserved.</p>
    </footer>
  )
}

export default Footer