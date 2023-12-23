import "./Hero.css"

import React from 'react'
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
        </div>
        <div className="content">
            <p>HI, I'M Gaurav Bhatia</p>
            <h1><span class="text_1">React Developer</span><span class="text_2">Front-end Developer</span></h1>
            <div>
                <Link to='/Project'
                className="btn">Projects</Link>
                <Link to='/Contact'
                className="btn btn-light">Contact</Link>

            </div>
             </div>
    </div>
  )
}

export default Hero