import React, { Component } from 'react';
import { routes } from 'routes';
import { connect } from 'react-redux';
import NavbarTop from 'components/organisms/NavbarTop';
import JumbotronBar from 'components/molecules/JumbotronBar';
import Footer from 'components/organisms/Footer';
import AccesoriesPost from 'components/molecules/AccesoriesPost';


class DetailsAccesoriesView extends Component {
  state = {
    pageType: 'accesories',
    id: 0,
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.accesories:
        this.setState({ pageType: 'accesories' });
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
        {pageType === 'accesories' && (
          <AccesoriesPost
            key={this.props.accesories[id].id}
            pageType={pageType}
            name={this.props.accesories[id].name}
            url={this.props.accesories[id].url}
            price={this.props.accesories[id].price}
            description={this.props.accesories[id].description}
            shop={this.props.accesories[id].shop}
            tags={this.props.accesories[id].tags}
            category={this.props.accesories[id].category}
            gallery={this.props.accesories[id].gallery}            
          />
        )}
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { accesories } = state;
  return { accesories };
};

export default connect(mapStateToProps)(DetailsAccesoriesView);
