import React, { Component } from "react";
export default class Middle extends Component {

   //fayza
    guessedWord() {
    return this.state.data
      .toString()
      .split("")
      .map((char) => (this.state.guessed.has(char) ? char : " _ "));
  }

handleGuess(event) {
    let char = event.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(char),
      wrongGuess: st.wrongGuess + (st.data.includes(char) ? 0 : 1)
    }));
  }

  render() {
    return (
      <div className="text-center">
      <p>{this.props.getta}</p>
      <button onClick={this.props.fun}></button>
      </div>
    );
  }
}
