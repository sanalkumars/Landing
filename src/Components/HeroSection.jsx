import React from 'react';
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className="text-4xl lg:text-7xl sm:text-6xl text-center tracking-wide">
                A LandingPage By 
                <span className='bg-gradient-to-r from-orange-500 to-purple-800 text-transparent bg-clip-text'>
                    {" "} REACT AND TAILWIND</span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
            A simple but attractive landing page created using REACT and styled using tailwindcss.Learn code and improve by each day.Happy coding. 
        </p>
        <div className="flex justify-center my-10 ">
            <a href="#" className='py-4 px-2 mx-3 rounded-md bg-gradient-to-r from-orange-500 to-purple-950'>Start Now</a>
            <a href="#" className='py-4 px-2 mx-3 rounded-md border' > Documentation</a>
        </div>

        <div className="flex justify-center mt-10">
            <video  
            autoPlay 
            loop 
            muted 
            className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'
            >
                <source src={video1} type="video/mp4" />
                Your Browser Does Not Support The Video
            </video>
            <video  
            autoPlay 
            loop 
            muted 
            className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'
            >
                <source src={video2} type="video/mp4" />
                Your Browser Does Not Support The Video
            </video>

        </div>

    </div>
  )
}

export default HeroSection