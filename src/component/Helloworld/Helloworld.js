import React, { Component } from "react";

export default class Helloworld extends Component {
  render() {
    return ( 
         <div> 
             <div>{this.props.text}</div>
         </div>
    )
  }
}
