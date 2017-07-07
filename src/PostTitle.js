import React, { Component } from 'react';

function PostTitle(props) {
  return (
    <div className="PostTitle">
      <h2>{props.title}</h2>
    </div>
  );
}

export default PostTitle;