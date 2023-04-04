import React, { Component } from 'react'
import Seth from './Seth'

 class Students extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: this.props.name,
         course: "",
         age: ""
      }
    }
    myDetails=()=>{
        this.setState({
            course: this.props.course,
            age: this.props.age
        })
    }
  render() {
    return (
      <div>
        <Seth />
        <h1 className='text-bold text-black flex justify-between'>{this.state.name}</h1>
        <button onClick={this.myDetails}>more</button>
      </div>
    )
  }
}

export default Students
