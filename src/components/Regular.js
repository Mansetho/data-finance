import React, { Component } from 'react'

 class Regular extends Component {
  render() {
    console.log("Regular comp rendering");
    return (
      <div>
        Regular components {this.props.name}
        
      </div>
    )
  }
}

export default Regular
