import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

//Class component returning JSX
class App extends Component{

    state = {
      name : 'Maurício Bryan',
      counter : 0
    };

  // ON CLICK CHANGE THE NAME STATE
  handlePClick = () => {
    //const { name } = this.state;
    //console.log(`<p> foi clicado por ${name}`)
    this.setState({ name : 'Bryan Please' })
  }
  // ON CLICK CHANGE COUNTER
  handleAClick = (event) => {
    event.preventDefault();
    const {counter} = this.state;
    this.setState({counter : counter + 1})
  }

  render(){
    //const name = this.state.name;
    const { name , counter} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name}
          </p>
          <a onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é o link clicado {counter} vez(es)
          </a>
        </header>
      </div>
    );
  }
}
//Function Component returning JSX

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
