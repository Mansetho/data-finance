import React, { Component } from 'react'

 class HoveredCounterTwo extends Component {
  render() {
    const {count, incrementCount}= this.props
    return (
      <div>
        <button onMouseOver={incrementCount}>hovered {count} times</button>
        
      </div>
    )
  }
}

export default HoveredCounterTwo
