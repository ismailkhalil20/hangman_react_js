import React, { Component } from 'react'

export default class Middle extends Component {
    render() {
        return (
            <div>
                {console.log(this.props.gamma)}
                <button onClick={this.props.func} ></button>
            </div>
        )
    }
}
