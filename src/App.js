import './App.css';
import { Component } from 'react';

//Class component returning JSX
class App extends Component {

  state = {
    counter: 0,
    posts: []
  };

  //<LIFECYCLE METHODS = LIFECYCLE>
  componentDidMount() {            //COMPONENT BUILT
    this.loadPosts();
  }
  //</LIFECYCLE METHODS>

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');

    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts , photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post,index) => {
      return { ...post, cover: photosJson[index].url }
    });
    
    this.setState({ posts: postsAndPhotos})
  }

  render() {
    //const name = this.state.name;
    const { posts } = this.state;

    return (
      <section className='container'>
        <div className="posts">
          {posts.map(post => (
            <div className="post">
              <img src={post.cover} alt={post.title}></img>
              <div key={post.id} className="post-content">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
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
