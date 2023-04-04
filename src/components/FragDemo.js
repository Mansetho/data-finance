import React, { Component } from 'react'

 class FragDemo extends Component {
  render() {
    return (
        <React.Fragment className='text-white '>
      <h1 className='hover:text-green font-bold uppercase flex justify-center cursor-pointer'>
        fragment demo
      </h1>
      <p className='flex justify-center text-red-300 hover:text-lg'>description on vitality fragment</p>
      </React.Fragment>
    )
  }
}

export default FragDemo
