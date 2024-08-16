import React from 'react'
import code from "../assets/code.jpg";
import { CheckCircle2 } from 'lucide-react';
import { checklistItems } from '../constants';


const Workflow = () => {
  return (
    <div className='mt-20'>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wider"> Accelerate Your 
            <span className='bg-gradient-to-r from-orange-500 to-purple-800 text-transparent bg-clip-text'>
                 {""}   Coding Workflow
            </span>   
        </h2>
        <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-1/2 p-2">
                <img src={code} alt="Code Image" />
            </div>
            <div className="w-full lg:w-1/2 pt-12">
                { checklistItems.map((item , index)=>(
                    <div key={index} className="flex mb-12">
                        <div className="text-green-600 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full hover:scale-150 transition-all duration-200 hover:bg-neutral-500 hover:text-green-300">
                            <CheckCircle2 />
                        </div>
                        <div className="">
                            <h5 className='mt-1 mb-2 text-xl'>
                                {item.title}
                            </h5>
                            <p className="text-md text-neutral-500"> { item.description }</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Workflow