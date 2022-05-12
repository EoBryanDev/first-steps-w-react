import { Component } from 'react';

import './styles.css';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

//Class component returning JSX
class Home extends Component {

  state = {
    counter: 0,
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: ''
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
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  }
  render() {
    //const name = this.state.name;
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase()
          .includes(searchValue.toLowerCase());
      })
      : posts;

    return (
      <section className='container'>
        <div className='search-container'>
          {!!searchValue && (
            <h3>Search value: {searchValue}</h3>
          )}
          <TextInput
            searchValue={searchValue}
            handleChange={this.handleChange}
          />
        </div>
        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p>There were not found any post!</p>
        )}

        <div className='button-container'>
          {!searchValue && (
            <Button
              text="Load More posts"
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}

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
