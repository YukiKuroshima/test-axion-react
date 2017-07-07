import React, { Component } from 'react';
import Post from './Post';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log("Fetched json" + res.data);
        const posts = res.data.slice();
        console.log("posts " + posts);
        this.setState({ posts });
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Getting json via API</h2>
        </div>
        <div>
          {this.state.posts.map(post =>
            <Post key={post.id} post={post} />
          )}
          <ul>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
