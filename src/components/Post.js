import React, { Component } from 'react';


class Post extends Component {

  render() {
     const {       
       title,
       subtitle
     } = this.props;
    return (
      <>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </>
    );  
  }

}

export default Post;