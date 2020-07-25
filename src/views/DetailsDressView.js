import React, { Component } from 'react';
import { routes } from 'routes';
import { connect } from 'react-redux';
import NavbarTop from 'components/NavbarTop';
import JumbotronBar from 'components/JumbotronBar';
import Footer from 'components/Footer';
import DressPost from 'components/DressPost';

class DetailsDressView extends Component {
  state = {
    pageType: 'dresses',
    id: 0,
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.dress:
        this.setState({ pageType: 'dresses' });
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
        {pageType === 'dresses' && (
          <DressPost
            key={this.props.dress[id].id}
            pageType={pageType}
            url={this.props.dress[id].url}
            shop={this.props.dress[id].shop}
            name={this.props.dress[id].name}
            model={this.props.dress[id].model}
            price={this.props.dress[id].price}
            category={this.props.dress[id].category}
            descripion={this.props.dress[id].descripion}
            tags={this.props.dress[id].tags}
          />
        )}
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { dress } = state;
  return { dress };
};

export default connect(mapStateToProps)(DetailsDressView);
