import React, { Component } from 'react'
import UpdateComponent from './withCounter'

 class ClickedCounter extends Component {
    
  render() {
    const {count, incrementCount}=this.props
    return (
      <div className='flex justify-center'>
        <button  onClick={incrementCount} className="rounded-md bg-[#009dfa] font-semibold text-black mt-4 ">{this.props.course}  clicked {count} times</button>
        
      </div>
    )
  }
}

export default UpdateComponent(ClickedCounter, 5) 
