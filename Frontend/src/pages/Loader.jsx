import React, { useEffect } from 'react'
import CountUp from "../components/LoadCount"
import { assets } from '../assets/assets'


const Loader = () => {

  useEffect(() => {
    const img = new Image()
    img.src = assets.hero_bg
  }, [])


  return (
    <div className='flex min-h-screen justify-center items-center overflow-hidden'>
        <CountUp
        from={0}
        to={100}
        separator=","
        direction="up"
        duration={2}
        className="count-up-text font-sans font-medium text-9xl bg-gradient-to-r from-[#c7c7c7] to-[#3273a2] text-transparent bg-clip-text"
        delay={0}
        />
    </div>
  )
}

export default Loader