import React from 'react'
import Typed from 'react-typed'

function Hero() {
  return (
    <div className='text-white'>
     <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className='text-[#00df9a] uppercase font-bold p-2'>growing with data analytics</p>
      <h1 className='md:text-7xl sm:text-6xl text-4xl uppercase font-bold md:py-6'>grow with data</h1>
      <div className='flex justify-center items-center'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>fast flexible financing for</p>
        <Typed
        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-blue-400 uppercase '
        
         strings={['seth', 'okeyo', 'orodi']} 
         typeSpeed={120}
          backSpeed={140} 
          loop/>
      </div>
      <div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>monitor your data analytics to increase your revenue for seth, okeyo, & arodi platforms</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>

     </div>
    </div>
  )
}

export default Hero
