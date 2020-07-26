import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.li`
  cursor: pointer;
`;

class FooterItem extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, title, pageType } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }

    return (
      <Wrapper pageType={pageType} onClick={this.handleCardClick}>
        {title}
      </Wrapper>
    );
  }
}

export default FooterItem;
