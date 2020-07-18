import React, { Component } from 'react';
import { routes } from 'routes';
import { connect } from 'react-redux';
import NavbarTop from 'components/NavbarTop';
import JumbotronBar from 'components/JumbotronBar';
import Footer from 'components/Footer';
import PressPost from 'components/PressPost';


class DetailsPressView extends Component {
  state = {
    pageType: 'mlodapara',
    id: 0,
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.mlodapara:
        this.setState({ pageType: 'mlodapara' });
        break;
      case routes.pannamloda:
        this.setState({ pageType: 'pannamloda' });
        break;
      case routes.uroczystosc:
        this.setState({ pageType: 'uroczystosc' });
        break;
      case routes.wedding:
        this.setState({ pageType: 'wedding' });
        break;
      case routes.omsvadba:
        this.setState({ pageType: 'omsvadba' });
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
        {pageType === 'mlodapara' && (
          <PressPost
            key={this.props.mlodapara[id].id}
            pageType={pageType}
            url={this.props.mlodapara[id].url}
            title={this.props.mlodapara[id].title}
            number={this.props.mlodapara[id].number}
            category={this.props.mlodapara[id].category}
            year={this.props.mlodapara[id].year}
            download={this.props.mlodapara[id].download}
            shop={this.props.mlodapara[id].shop}
            price={this.props.mlodapara[id].price}
            publisher={this.props.mlodapara[id].publisher}
            description={this.props.mlodapara[id].description}
          />
        )}
        {pageType === 'pannamloda' && (
          <PressPost
            key={this.props.pannamloda[id].id}
            pageType={pageType}
            url={this.props.pannamloda[id].url}
            title={this.props.pannamloda[id].title}
            number={this.props.pannamloda[id].number}
            category={this.props.pannamloda[id].category}
            year={this.props.pannamloda[id].year}
            download={this.props.pannamloda[id].download}
            shop={this.props.pannamloda[id].shop}
            price={this.props.pannamloda[id].price}
            publisher={this.props.pannamloda[id].publisher}
            description={this.props.pannamloda[id].description}
          />
        )}
        {pageType === 'uroczystosc' && (
          <PressPost
            key={this.props.uroczystosc[id].id}
            pageType={pageType}
            url={this.props.uroczystosc[id].url}
            title={this.props.uroczystosc[id].title}
            number={this.props.uroczystosc[id].number}
            category={this.props.uroczystosc[id].category}
            year={this.props.uroczystosc[id].year}
            download={this.props.uroczystosc[id].download}
            shop={this.props.uroczystosc[id].shop}
            price={this.props.uroczystosc[id].price}
            publisher={this.props.uroczystosc[id].publisher}
            description={this.props.uroczystosc[id].description}
          />
        )}
        {pageType === 'wedding' && (
          <PressPost
            key={this.props.wedding[id].id}
            pageType={pageType}
            url={this.props.wedding[id].url}
            title={this.props.wedding[id].title}
            number={this.props.wedding[id].number}
            category={this.props.wedding[id].category}
            year={this.props.wedding[id].year}
            download={this.props.wedding[id].download}
            shop={this.props.wedding[id].shop}
            price={this.props.wedding[id].price}
            publisher={this.props.wedding[id].publisher}
            description={this.props.wedding[id].description}
          />
        )}
        {pageType === 'omsvadba' && (
          <PressPost
            key={this.props.omsvadba[id].id}
            pageType={pageType}
            url={this.props.omsvadba[id].url}
            title={this.props.omsvadba[id].title}
            number={this.props.omsvadba[id].number}
            category={this.props.omsvadba[id].category}
            year={this.props.omsvadba[id].year}
            download={this.props.omsvadba[id].download}
            shop={this.props.omsvadba[id].shop}
            price={this.props.omsvadba[id].price}
            publisher={this.props.omsvadba[id].publisher}
            description={this.props.omsvadba[id].description}
          />
        )}

        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { omsvadba, wedding, uroczystosc, pannamloda, mlodapara } = state;
  return { omsvadba, wedding, uroczystosc, pannamloda, mlodapara };
};

export default connect(mapStateToProps)(DetailsPressView);
