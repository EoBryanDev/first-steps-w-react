import './App.css';
import { Component } from 'react';

//Class component returning JSX
class App extends Component {

  state = {
    posts: [
      {
        id: 1,
        title: 'First title',
        body: 'First body'
      },
      {
        id: 2,
        title: 'Second title',
        body: 'Second body'
      },
      {
        id: 3,
        title: 'Third title',
        body: 'Third body'
      }
    ]
  };



  render() {
    //const name = this.state.name;
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
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
