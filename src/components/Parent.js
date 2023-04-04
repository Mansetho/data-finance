import React, { Component } from 'react'
import Memos from './Memos';
import Purecomp from './Purecomp';
import Regular from './Regular';

class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "mansetho"
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "mansetho"
            })
            
        }, 2000);
    }
   
  render() {
    console.log("**********parent comp rendering***************");
    
    return (
      <div>
        parent components
        <Purecomp />
        <Regular />
        <Memos />
        
      </div>
    )
  }
}

export default Parent
