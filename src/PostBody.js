import React, { Component } from 'react';

function PostBody(props) {
  return (
    <div className="PostBody">
      <p>{props.body}</p>
    </div>
  );
}

export default PostBody;