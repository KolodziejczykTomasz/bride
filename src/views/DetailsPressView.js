import React, { Component } from 'react';
import { routes } from 'routes';
import { connect } from 'react-redux';
import NavbarTop from 'components/organisms/NavbarTop';
import JumbotronBar from 'components/molecules/JumbotronBar';
import Footer from 'components/organisms/Footer';
import PressPost from 'components/molecules/PressPost';

class DetailsPressView extends Component {
  state = {
    pageType: 'presses',
    id: 0,
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.press:
        this.setState({ pageType: 'presses' });
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
      case '12':
        this.setState({ id: 11 });
        break;
      case '13':
        this.setState({ id: 12 });
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
        <PressPost
          key={this.props.press[id].id}
          pageType={pageType}
          url={this.props.press[id].url}
          title={this.props.press[id].title}
          number={this.props.press[id].number}
          year={this.props.press[id].year}
          download={this.props.press[id].download}
          shop={this.props.press[id].shop}
          price={this.props.press[id].price}
          publisher={this.props.press[id].publisher}
          description={this.props.press[id].description}
          tags={this.props.press[id].tags}
          category={this.props.press[id].category}
          gallery={this.props.press[id].gallery}
        />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { press } = state;
  return { press };
};

export default connect(mapStateToProps)(DetailsPressView);
