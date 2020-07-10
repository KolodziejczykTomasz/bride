import React, { Component } from 'react';
import { routes } from 'routes';
import { connect } from 'react-redux';
import NavbarTop from 'components/NavbarTop';
import JumbotronBar from 'components/JumbotronBar';
import Footer from 'components/Footer';
import TravelPost from 'components/TravelPost';

class DetailsTravelView extends Component {
  state = {
    pageType: 'travel',
    id: 0,
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.travel:
        this.setState({ pageType: 'travel' });
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
      case '4':
        this.setState({ id: 3 });
        break;
      case '5':
        this.setState({ id: 4 });
        break;
      case '6':
        this.setState({ id: 5 });
        break;
      case '7':
        this.setState({ id: 6 });
        break;
      case '8':
        this.setState({ id: 7 });
        break;
      case '9':
        this.setState({ id: 8 });
        break;
      case '10':
        this.setState({ id: 9 });
        break;
      case '11':
        this.setState({ id: 10 });
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
        {pageType === 'travel' && (
          <TravelPost
            key={this.props.travel[id].id}
            pageType={pageType}
            url={this.props.travel[id].url}
            pleace={this.props.travel[id].pleace}
            price={this.props.travel[id].price}
            description={this.props.travel[id].description}
          />
        )}
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { travel } = state;
  return { travel };
};

export default connect(mapStateToProps)(DetailsTravelView);
