import React from 'react'
import stew from '../assets/stew.jpg'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-col-3 gap-8 '  >
        <div className='w-full shadow-xlflex flex-col p-4 my-4 rounded-lg hover:scale(105) duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={stew} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>single meal</h2>
          <p>$149</p>
          <div>
            <p>500 GB storage</p>
            <p>1 granted user</p>
            <p>send upto 2 GB</p>

          </div>
          <button>make order 1</button>

        </div>

      </div>
      
    </div>
  )
}

export default Cards
