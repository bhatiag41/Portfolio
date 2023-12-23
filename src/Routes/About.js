import React from 'react'
import Footer from "../Components/Footer"
import Navbar from '../Components/navbar'
import Hero2 from "../Components/Hero2"

const About = () => {
  return (
    <div>
      <Navbar/>
    <Hero2 heading="About" text="About Me"/>
    <Footer/>
    </div>
  )
}

export default About