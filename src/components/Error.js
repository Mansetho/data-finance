import React from 'react'

function Error(heroname) {
    if(heroname==='joker'){
        throw new Error('not a hero')
    }
  return (
    <div class='text-white'>
        {heroname}
      
    </div>
  )
}

export default Error
