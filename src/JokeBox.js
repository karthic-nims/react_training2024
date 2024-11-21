import { Component } from "react";
import generateJokes from "./JokeGenerator";

class JokeBox extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {question, answer, utilMethod} = this.props
        return (
            <div>
                <div>{question}</div>
            <hr/>
            <div>{answer}</div>
            <button onClick={utilMethod}>Custom method call</button>
            </div>
        )
    }
}

export default generateJokes(JokeBox);