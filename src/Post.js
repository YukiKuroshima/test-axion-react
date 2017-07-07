import React, { Component } from 'react';
import PostTitle from './PostTitle';
import PostBody from './PostBody';


class Post extends Component {
  render() {
    return (
      <div className="Post">
        <div className="Post-title">
          <PostTitle title={this.props.post.title}/>
        </div>
        <div className="Post-body">
          <PostBody body={this.props.post.body}/>
        </div>
      </div>
    );
  }
}

export default Post;