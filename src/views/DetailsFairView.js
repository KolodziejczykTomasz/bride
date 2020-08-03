import React, { Component } from 'react';
import { routes } from 'routes';
import { connect } from 'react-redux';
import NavbarTop from 'components/organisms/NavbarTop';
import JumbotronBar from 'components/molecules/JumbotronBar';
import Footer from 'components/organisms/Footer';
import FairPost from 'components/molecules/FairPost';

class DetailsFairView extends Component {
  state = {
    pageType: 'targikrakow',
    id: 0,
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.targikrakow:
        this.setState({ pageType: 'fairs' });
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
        <FairPost
          key={this.props.fair[id].id}
          pageType={pageType}
          url={this.props.fair[id].url}
          city={this.props.fair[id].city}
          street={this.props.fair[id].street}
          place={this.props.fair[id].place}
          data={this.props.fair[id].data}
          year={this.props.fair[id].year}
          name={this.props.fair[id].name}
          description={this.props.fair[id].description}
          tags={this.props.fair[id].tags}
          category={this.props.fair[id].category}
          gallery={this.props.fair[id].gallery}
        />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { fair } = state;
  return { fair };
};

export default connect(mapStateToProps)(DetailsFairView);
