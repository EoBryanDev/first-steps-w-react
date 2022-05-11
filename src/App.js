import './App.css';
import { Component } from 'react';

//Class component returning JSX
class App extends Component {

  state = {
    counter: 0,
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

  timeoutUpdate = null;


  //<LIFECYCLE METHODS = LIFECYCLE>
  componentDidMount(){            //COMPONENT BUILT
    this.handleTimeout();
  }

  componentDidUpdate(){           //COMPONENT UPDATED
    this.handleTimeout(); 
   }

   componentWillUnmount(){         //COMPONENT UNSET
    clearTimeout(this.timeoutUpdate);
   }
  //</LIFECYCLE METHODS>


  //A METHOD EXECUTED WITH LIFECYCLE COMPONENT
  handleTimeout = () =>{
    const { posts, counter } = this.state;
    posts[0].title = 'Title changed up';
    this.timeoutUpdate = setTimeout(() => {
      this.setState({posts , counter: counter + 1})
    }, 1000);
  }



  render() {
    //const name = this.state.name;
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <p>{counter}</p>
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
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
