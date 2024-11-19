import React from 'react'
import Profile from "../../assets/Profile.png"
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className=" py-4 lg:py-6">
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div>
          <p className="text-3xl lg:text-4xl font-semibold">
            FOOD <span className="text-primary">EAT</span>
          </p>
        </div>
        {/*  */}
        <div className='flex items-center justify-center gap-10'>
          <ul className='md:flex gap-8 font-medium '>
            <li className='hover:border-b-2  hover:scale-110  bg-gradient-to-r
             from-orange-300 to-secondary/60 py-2 px-6 rounded-full '>Home</li>
            <li className='hover:border-b-2 hover:scale-110 bg-gradient-to-r
             from-orange-300 to-secondary/60 py-2 px-6 rounded-full '>Menu</li>
            <li className='hover:border-b-2  hover:scale-110  bg-gradient-to-r
             from-orange-300 to-secondary/60 py-2 px-6 rounded-full '>About</li>
          </ul>
          {/* login section */}
          <div className='flex items-center gap-4'>
            <img src={Profile} alt='' className='w-10 rounded-full' />
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
