import React, { Component } from 'react'

export default class Letters_Btn extends Component {

    constructor() {
        super()
        this.state = {
        alpha: ['A', 'B', 'C', 'D','E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        }
    }

    render() {
        return (
            <div>
                <h1>HANGMAN</h1>
                <h3>REACT HANGMAN GAME</h3>
                <p>Use the alphabet below to guess the word, or click hint to get a clue.</p>
                {this.state.alpha.map( item => <button>{item}</button>)
            }
            </div>
        )
    }
}