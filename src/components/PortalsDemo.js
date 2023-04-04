import React from 'react'
import ReactDOM  from 'react-dom'

function PortalsDemo() {
  return ReactDOM.createPortal(
    <h1 className='bg-gray-400'>
      portals Demo
    </h1>,
    document.getElementById('portal-root')
  )
}

export default PortalsDemo
