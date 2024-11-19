import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TopList from './components/TopList/TopList'
import Banner from './components/Banner/Banner'
import BgImg from "./assets/2.png"
import OurServices from './components/OurServices/OurServices'


const bgImg = {
  backgroundImage: `url(${BgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
}

const App = () => {
  return (
    <div style={bgImg} className='overflow-x-hidden'>
      <div className='min-h-screen bg-white/50 backdrop-blur-3xl'>
        <Navbar />
        <Hero />
        <TopList />
        <Banner />
        <OurServices />
      </div>
    </div>
  )
}

export default App
