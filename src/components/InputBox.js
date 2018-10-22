import React, { Component } from 'react'

export default class InputBox extends Component {
    constructor() {
        super()
        this.state = {
            userInput: ''
        }
        this.userInput = this.userInput.bind(this);
    }

    userInput(val) {
        this.setState({
            userInput: val
        })
    }

    handleKeyPress(e) {
        if (e === 'Enter') {
            this.props.buttonClick(this.state.userInput)
            this.setState({
                userInput: ""
            })
        }
    }

    handleClick(e) {
        this.props.buttonClick(e)
        this.setState({
            userInput: ""
        })
    }

    render() {
        return (
            <div>
                <input
                    className="input"
                    value={this.state.userInput}
                    onChange={(e) => this.userInput(e.target.value)}
                    onKeyPress={(e) => this.handleKeyPress(e.key)}
                    type="text"
                    placeholder="Property address"
                />
                <button
                    onClick={() => this.handleClick(this.state.userInput)}

                    className="submit"
                >Submit</button>
            </div>
        )
    }
}