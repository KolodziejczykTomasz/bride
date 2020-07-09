import React, { Component } from 'react';
import { routes } from 'routes';
import { connect } from 'react-redux';
import NavbarTop from 'components/NavbarTop';
import JumbotronBar from 'components/JumbotronBar';
import Footer from 'components/Footer';
import ExtrasPost from 'components/ExtrasPost';


class DetailsExtrasView extends Component {
  state = {
    pageType: 'postextras',
    id: 0,
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.postextras:
        this.setState({ pageType: 'postextras' });
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
        {pageType === 'postextras' && (
          <ExtrasPost
            key={this.props.postextras[id].id}
            pageType={pageType}
            picHero={this.props.postextras[id].picHero}
            title={this.props.postextras[id].title}
            subtitle={this.props.postextras[id].subtitle}
          />
        )}

        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { postextras } = state;
  return { postextras };
};

export default connect(mapStateToProps)(DetailsExtrasView);
