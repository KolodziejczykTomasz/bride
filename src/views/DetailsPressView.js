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
            year={this.props.mlodapara[id].year}
            download={this.props.mlodapara[id].download}
            shop={this.props.mlodapara[id].shop}
            price={this.props.mlodapara[id].price}
            publisher={this.props.mlodapara[id].publisher}
            description={this.props.mlodapara[id].description}
            tags={this.props.mlodapara[id].tags}
            category={this.props.mlodapara[id].category}
            gallery={this.props.mlodapara[id].gallery}
          />
        )}
        {pageType === 'pannamloda' && (
          <PressPost
            key={this.props.pannamloda[id].id}
            pageType={pageType}
            url={this.props.pannamloda[id].url}
            title={this.props.pannamloda[id].title}
            number={this.props.pannamloda[id].number}           
            year={this.props.pannamloda[id].year}
            download={this.props.pannamloda[id].download}
            shop={this.props.pannamloda[id].shop}
            price={this.props.pannamloda[id].price}
            publisher={this.props.pannamloda[id].publisher}
            description={this.props.pannamloda[id].description}
            tags={this.props.pannamloda[id].tags}
            category={this.props.pannamloda[id].category}
            gallery={this.props.pannamloda[id].gallery}
          />
        )}
        {pageType === 'uroczystosc' && (
          <PressPost
            key={this.props.uroczystosc[id].id}
            pageType={pageType}
            url={this.props.uroczystosc[id].url}
            title={this.props.uroczystosc[id].title}
            number={this.props.uroczystosc[id].number}        
            year={this.props.uroczystosc[id].year}
            download={this.props.uroczystosc[id].download}
            shop={this.props.uroczystosc[id].shop}
            price={this.props.uroczystosc[id].price}
            publisher={this.props.uroczystosc[id].publisher}
            description={this.props.uroczystosc[id].description}
            tags={this.props.uroczystosc[id].tags}
            category={this.props.uroczystosc[id].category}
            gallery={this.props.uroczystosc[id].gallery}
          />
        )}
        {pageType === 'wedding' && (
          <PressPost
            key={this.props.wedding[id].id}
            pageType={pageType}
            url={this.props.wedding[id].url}
            title={this.props.wedding[id].title}
            number={this.props.wedding[id].number}           
            year={this.props.wedding[id].year}
            download={this.props.wedding[id].download}
            shop={this.props.wedding[id].shop}
            price={this.props.wedding[id].price}
            publisher={this.props.wedding[id].publisher}
            description={this.props.wedding[id].description}
            tags={this.props.wedding[id].tags}
            category={this.props.wedding[id].category}
            gallery={this.props.wedding[id].gallery}
          />
        )}
        {pageType === 'omsvadba' && (
          <PressPost
            key={this.props.omsvadba[id].id}
            pageType={pageType}
            url={this.props.omsvadba[id].url}
            title={this.props.omsvadba[id].title}
            number={this.props.omsvadba[id].number}          
            year={this.props.omsvadba[id].year}
            download={this.props.omsvadba[id].download}
            shop={this.props.omsvadba[id].shop}
            price={this.props.omsvadba[id].price}
            publisher={this.props.omsvadba[id].publisher}
            description={this.props.omsvadba[id].description}
            tags={this.props.omsvadba[id].tags}
            category={this.props.omsvadba[id].category}
            gallery={this.props.omsvadba[id].gallery}
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
