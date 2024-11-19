import React from 'react'
import HeroImg from "../../assets/1.png"

const Hero = () => {
  return (
    <div>
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]'>
        <div className='flex flex-col justify-center gap-8 text-center md:text-left pt-24 md:p-0 pb-10'>
          <h1 className='text-4xl lg:text-6xl font-bold'>
            Delicious Food Is <span className='text-gray-500'>Waiting For You</span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dicta assumenda qui ipsam id officiis modi cumque minus dolores
            placeat explicabo.
          </p>
          <div className='flex items-center justify-center md:justify-start gap-4'>
            <button className='btn-primary hover:scale-105 duration-200'>Food Menu</button>
            <button className='btn-secondary text-black hover:scale-105 duration-200'>Book Table</button>
          </div>
        </div>
        {/* img section */}
        <div className='flex flex-col justify-center'>
          <img
            src={HeroImg}
            alt=''
            className='animate-spin-slow hover:scale-105 img-shadow w-[400px] mx-auto' />
        </div>
      </div>
    </div>
  )
}

export default Hero