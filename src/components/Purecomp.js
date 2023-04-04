import React, { PureComponent } from 'react'

 class Purecomp extends PureComponent {
  render() {
    console.log("pure component rendering");
    return (
      <div>
        pure components {this.props.name}
        
      </div>
    )
  }
}

export default Purecomp
