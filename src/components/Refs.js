import React, { Component } from 'react'


 class Refs extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef=React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    focusHandler=()=>{
        alert(this.inputRef.current.value())
    }
  render() {
    return (
      <div className='text-white flex justify-center'>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.focusHandler}>focus input</button>
        
      </div>
    )
  }
}

export default Refs
