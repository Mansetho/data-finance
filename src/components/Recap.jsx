import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'

const Recap = () => {
    const [Nav, setnav]=useState(false)
    const handleNav=()=>{
        setnav(!nav)
    }
  return (
    <div>
        <ul>
            <li>home</li>
        </ul>
        <div className='flex justify-end '>
            <AiOutlineMenu />
        </div>
      
    </div>
  )
}

export default Recap
