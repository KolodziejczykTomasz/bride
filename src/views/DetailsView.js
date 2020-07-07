import React, { Component } from 'react';
import { routes } from 'routes';
import { connect } from 'react-redux';
import NavbarTop from 'components/NavbarTop';
import JumbotronBar from 'components/JumbotronBar';
import Footer from 'components/Footer';
import Post from 'components/Post';
import ChurchItem from 'components/ChurchItem';

class DetailsView extends Component {
  state = {
    pageType: 'brides',
    id: 0,
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.bride:
        this.setState({ pageType: 'brides' });
        break;
      case routes.extra:
        this.setState({ pageType: 'extras' });
        break;
      case routes.church:
        this.setState({ pageType: 'churchs' });
        break;
      default:
        console.log('Something went wrong');
    }

    switch (match.params.id) {
      case '1':
        this.setState({ id: 0 });
        break;
      case '2':
        this.setState({ id: 1 });
        break;
      case '3':
        this.setState({ id: 2 });
        break;
      default:
        console.log('Something went wrong');
    }
  }

  render() {
    const { pageType, id } = this.state;

    return (
      <>
        <NavbarTop />
        <JumbotronBar />
        {pageType === 'brides' && (
          <Post
            key={this.props.postbride[id].id}
            pageType={pageType}
            title={this.props.postbride[id].title}
            subtitle={this.props.postbride[id].subtitle}
            picHero={this.props.postbride[id].picHero}
          />
        )}
        {pageType === 'extras' && (
          <Post
            key={this.props.postextras[id].id}
            pageType={pageType}
            title={this.props.postextras[id].title}
            subtitle={this.props.postextras[id].subtitle}
            picHero={this.props.postextras[id].picHero}
          />
        )}
        {pageType === 'churchs' && (
          <ChurchItem
            key={this.props.postchurch[id].id}
            pageType={pageType}
            title={this.props.postchurch[id].title}
            subtitle={this.props.postchurch[id].subtitle}
          />
        )}

        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { postbride, postextras, postchurch } = state;
  return { postbride, postextras, postchurch };
};

export default connect(mapStateToProps)(DetailsView);
