import './AboutContent.css'
import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const AboutContent = () => {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
      };
  return (
    <div className='about'>
        <div className='left'>
    <h1>Who am i?</h1>
    <p>some big line of text here thoo idk</p>
    <Link to="/Contact">
        <button className='btn'>Contact</button>
    </Link>
        </div>
        <div className='right'>
            <div className='img-container' onClick={toggleClass} >
                <div className={isActive ? ' img-stack bottom': ' img-stack top'}>
                    <img src='../../Assets/ecosavvy.png' className='img' alt='true'/>
                </div>
                <div className={isActive ? ' img-stack top': ' img-stack bottom'}>
                    <img src='../../Assets/img2.png' className='img' alt='true'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent