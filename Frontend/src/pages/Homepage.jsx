import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import HowitWorks from '../components/HowitWorks'
import Features from '../components/Features'
import Footer from '../components/Footer'
import { assets } from '../assets/assets'

const Homepage = () => {
  return (
    <>
    <Hero />
    <Features />
    <HowitWorks />
    <Footer />
    </>
  )
}

export default Homepage