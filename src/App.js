import { Component } from 'react';
import './App.css'
import JokeBox from './JokeBox';

export class App extends Component{

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click count - {this.state.count}</button>
        <JokeBox />
      </div>
    )
  }
}

export default App;
