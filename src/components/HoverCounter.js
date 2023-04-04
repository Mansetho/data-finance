import React, { Component } from 'react'
import UpdateComponent from './withCounter'

 class ClickedCounter extends Component {
    
  render() {
    const {count, incrementCount}= this.props
    return (
      <div className='flex justify-center bg-[#000300] text-white'>
        <h1 onMouseOver={incrementCount}>{this.props.name} hovered {count} times</h1>
        
      </div>
    )
  }
}

export default UpdateComponent(ClickedCounter, 10) 
