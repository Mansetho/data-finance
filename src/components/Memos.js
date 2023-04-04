import React from 'react'

function Memos({name}) {
    console.log("memo comp rendering");
  return (
    <div>
        memo comp {this.props.name}
      
    </div>
  )
}

export default React.memo(Memos) 
