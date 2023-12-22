import "./Hero.css"

import React from 'react'
import introImg from "../Assets/Screenshot 2023-11-29 215651.png"
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
    <img className="into-img" src={introImg}/>
        </div>
        <div className="content">
            <p>HI, I'M Gaurav Bhatia</p>
            <h1>React Developer</h1>
            <div>
                <Link to='/Projects'
                className="btn">Projects</Link>
                <Link to='/Contact'
                className="btn btn-light">Contact</Link>

            </div>
             </div>
    </div>
  )
}

export default Hero