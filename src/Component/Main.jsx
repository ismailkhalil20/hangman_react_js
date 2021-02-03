import React, { Component } from "react";
import Image from "./Image"; 
export default class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
       alpha: ['A', 'B', 'C', 'D','E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] ,
       data: [],
       guessed: new Set(),
       wrongGuess: 0,
      isHanged:false,
     };
       this.handleGuess = this.handleGuess.bind(this);
  }
    componentDidMount() {
    fetch("https://random-word-api.herokuapp.com/word?number=1")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }
 
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
  handlePlayAgain=()=>{
    this.setState({})
  }
  render() {
    console.log(this.state);
    return (
      <div>
      <h1>HANGMAN</h1>
                <h3>REACT HANGMAN GAME</h3>
                <p>Use the alphabet below to guess the word, or click hint to get a clue.</p>
                 <p>Wrong Guessed : {this.state.wrongGuess}</p>
                {this.guessedWord()}
                 <br/>
             {this.state.alpha.map( item => <button key={item} value={item} disabled={this.state.guessed.has(item)} onClick={this.handleGuess}>{item} </button>) }
        <Image isHanged={this.state.isHanged}/>
        <div>
          <button > Hint</button>
          <button onClick={this.handlePlayAgain}> Play Again</button>
        </div>
      </div>
    );
  }
}
