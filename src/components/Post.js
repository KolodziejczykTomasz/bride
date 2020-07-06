import React, { Component } from 'react';
import MainTemplates from 'templates/MainTemplates';

class Post extends Component {
  render() {
    const { title, subtitle, picHero, pageType } = this.props;
    return (
      <MainTemplates pageType={pageType}>
        {title}, {subtitle}, {picHero}
      </MainTemplates>
    );
  }
}

export default Post;
