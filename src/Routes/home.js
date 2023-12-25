import React from 'react'
import Navbar from '../Components/navbar'
import Hero from '../Components/Hero'
import Footer from "../Components/Footer"
import WorkCard from "../Components/WorkCard"

const home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <WorkCard/>
    <Footer/>
    </>
  )
}

export default home