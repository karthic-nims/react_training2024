import { Component } from "react"

const JokeGenerator = InputComponent => {

    return class extends Component {

        constructor(props) {
            super(props)
            this.state = {
                question: '',
                answer: ''
            }
        }

        componentDidMount() {
            fetch('https://official-joke-api.appspot.com/random_joke')
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this.setState({
                        question: data.setup,
                        answer: data.punchline
                    })
                })
        }

        customMethod = () => {
            console.log('customMethod')
        }

        render() {
            const {question, answer} = this.state
            return (
                <InputComponent 
                    {...this.props}
                    question={question}
                    answer={answer}
                    utilMethod={this.customMethod}
                />
            )
        }
    }
}

export default JokeGenerator