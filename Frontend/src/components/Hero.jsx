import React from 'react'
import { assets } from '../assets/assets'
import Navbar from '../components/Navbar'
import GradientText from '../components/GradientText'
import ShinyText from '../components/ShinyText'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover scale-110 xl:h-max"
        src={assets.hero_bg}
        alt="hero"
      />

      {/* Navbar */}
      <div className='absolute top-[7%] left-1/2 translate-x-[-50%] translate-y-[-50%]'>
        <Navbar />
      </div>

      {/* Main Heading */}
      <div className="absolute mt-24 inset-0 flex flex-col items-center justify-center px-4 text-center text-white z-10">
        <h1 className="font-semibold text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[9rem]">
          <GradientText
            colors={["#e3e3e3", "#459ddc", "#459ddc", "#459ddc"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            Memory Lane
          </GradientText>
        </h1>

        <h3 className="text-xs sm:text-sm md:text-base text-neutral-400 max-w-2xl">
          Upload, search, and chat with your audio files.
          Get instant answers without scrubbing through hours of sound.
        </h3>

        {/* CTA Button */}
        <div className="mt-24 bg-neutral-900 items-center border-2 border-neutral-600 hover:border-neutral-400 text-neutral-300 rounded-lg py-2 px-5 sm:py-3 sm:px-6 transition-all duration-300">
          <Link to="/chat">
            <button className="text-sm sm:text-base">
              <ShinyText text="Get Started →" disabled={false} speed={2} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
