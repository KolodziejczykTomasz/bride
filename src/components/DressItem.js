import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react';

class DressItem extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, url, pageType } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }
    return (
      <Image
        onClick={this.handleCardClick}
        pageType="dresses"
        id={id}
        key={id}
        draggable={false}
        style={{ width: '96%', height: '90%', cursor: 'pointer' }}
        src={url}
        alt={id}
      />
    );
  }
}
const mapStateToProps = (state) => {
  const { dress } = state;
  return { dress };
};

export default connect(mapStateToProps)(DressItem);
