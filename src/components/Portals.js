import React from 'react'
import ReactDOM from 'react-dom'


function Portals() {
  return ReactDOM.createPortal(
    <div>
        <h1 className='text-white'>
            portals demo
        </h1>, 
        document.getElementById('portal-root')
      
    </div>
  )
}

export default Portals
