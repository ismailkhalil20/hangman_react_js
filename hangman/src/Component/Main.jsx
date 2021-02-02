import React, { Component } from 'react'
import Middle from './Middle'

export default class Main extends Component {

    constructor () {
        super()
        this.state = {
            beta = "ismail"
        }
    }

    func = () => {
        console.log("hello world")
    }

    render() {
        return (
            <div>
                <Middle gamma={this.func} />
            </div>
        )
    }
}
