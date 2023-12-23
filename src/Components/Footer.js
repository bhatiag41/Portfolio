import React from 'react'
import "./Fotter.css"
import {FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaTwitter} from "react-icons/fa"
const Footer = () => {
  return (
    <div className='footer'>
        <div  className='footer-container'>
            <div className='left'>
                <div className='location'>
    <FaHome  size={20} style={{
        color:'white',marginRight:"2rem"
    }}/> <div>
        <p>Shubhash Nagar Ward-5</p>
        <p>Lalkuan</p>
    </div>
                </div>
                <div className='mail'>
                    <h4>
    <FaMailBulk  size={20} style={{
        color:'white',marginRight:"2rem"
    }}/>
   bhatiag41@gmail.com</h4>
        
                </div>
            </div>
            <div className='right'>
            <FaFacebook  size={30} style={{
        color:'white',marginRight:"1rem"
    }}/>
    <FaTwitter  size={30} style={{
        color:'white',marginRight:"1rem"
    }}/>
     <FaLinkedin  size={30} style={{
        color:'white',marginRight:"1rem"
    }}/>
            </div>
        </div>

    </div>
  )
}

export default Footer