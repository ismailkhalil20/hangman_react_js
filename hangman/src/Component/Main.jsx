import React, { Component } from "react";


export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      word: "",
      isHanged: false,
      
    };
  }

  componentDidMount() {
    fetch("https://random-word-api.herokuapp.com/word?number=1")
      .then((res) => res.json())
      .then((data) => this.setState({ word: data[0] }));
  }

  handlePlayAgain = () => {
    this.setState({})
  }

  render() {
    console.log(this.state);
    return (
      <div>
      
        <div>
          <button > Hint</button>
          <button onClick={this.handlePlayAgain}> Play Again</button>
        </div>
      </div>
    );
  }
}
