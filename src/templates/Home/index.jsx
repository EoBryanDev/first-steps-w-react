import { Component } from 'react';

import './styles.css';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';

//Class component returning JSX
class Home extends Component {

  state = {
    counter: 0,
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
  };

  //<LIFECYCLE METHODS = LIFECYCLE>
  async componentDidMount() {            //COMPONENT BUILT
    await this.loadPosts();
  }
  //</LIFECYCLE METHODS>

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    })
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts

    } = this.state

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage })
  }

  render() {
    //const name = this.state.name;
    const { posts , page ,postsPerPage ,allPosts} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length ;

    return (
      <section className='container'>
        <Posts posts={posts} />
        <div className='button-container'>
          <Button
            text="Load More posts"
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
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

export default Home;
