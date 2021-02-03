import React, { Component } from "react";

export default class Play extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div>
        <img src={this.props} alt=""/>
      
      </div>
    );
  }
}