import { CheckCircle2 } from 'lucide-react'
import React from 'react'
import { pricingOptions } from '../constants'



const PriceSection = () => {
  return (
    <div className='mt-20'>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wider">Pricing</h2>
            <div className="flex flex-wrap">
                {
                    pricingOptions.map(( item , index )=>(
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                                <div className="p-10 rounded-xl border border-neutral-800">
                                    <p className="text-4xl mb-8">
                                        {item.title}
                                        {item.title==="Pro" && <span className='bg-gradient-to-r from-orange-600 to-red-700 text-transparent bg-clip-text text-xl
                                        mb-4 ml-2'>(Most Popular)</span> }
                                    </p>
                                    <p className="mb-8">
                                        <span className='text-5xl mt-6 mr-2'>{item.price}</span>
                                        <span className='text-neutral-400'>/Monthly</span>
                                    </p>
                                    <ul>
                                        {
                                            item.features.map((feature , index)=>(
                                                <li key={index} className='mt-8 flex items-center'>
                                                    <CheckCircle2 />
                                                    <span className='ml-1'>{feature} </span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                        <a href="#" className="inline-flex justify-center w-full h-12 p-5 tracking-tight 
                                        items-center text-center mt-20 text-xl hover:bg-gradient-to-r from-orange-600 to-red-700  border border-orange-900 rounded-lg transition duration-300">
                                            Subscribe
                                        </a>
                                </div>
                        </div>
                    ))
                }
            </div>
    </div>
  )
}

export default PriceSection