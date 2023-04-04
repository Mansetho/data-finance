import React, { Component } from 'react'

 class HeroError extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         haserror: false
      }
    }
    static getDerivedStateFromError(){
        return  
        haserror: true
        
    }
  render() {
    if (this.state.haserror) {
        return 
            <h1>something messed up</h1>
        
    }
    this.props.children
    return (
      <div>
        
      </div>
    )
  }
}

export default HeroError
