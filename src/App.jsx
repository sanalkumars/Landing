import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Features from './Components/Features'

const App = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6 ">
        <HeroSection />
        <Features />
    </div>
    </>
  )
}

export default App