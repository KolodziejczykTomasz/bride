import React, { Component } from 'react';
import { routes } from 'routes';
import { connect } from 'react-redux';
import NavbarTop from 'components/NavbarTop';
import JumbotronBar from 'components/JumbotronBar';
import Footer from 'components/Footer';
import CompaniesPost from 'components/CompaniesPost';

class DetailsCompanyView extends Component {
  state = {
    pageType: 'dekoracje',
    id: 0,
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.dekoracje:
        this.setState({ pageType: 'dekoracje' });
        break;
      case routes.atrakcje:
        this.setState({ pageType: 'atrakcje' });
        break;
      case routes.moda:
        this.setState({ pageType: 'moda' });
        break;
      case routes.zespoly:
        this.setState({ pageType: 'zespoly' });
        break;
      case routes.foto:
        this.setState({ pageType: 'foto' });
        break;
      case routes.lokale:
        this.setState({ pageType: 'lokale' });
        break;
      case routes.pozostale:
        this.setState({ pageType: 'pozostale' });
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
        {pageType === 'dekoracje' && (
          <CompaniesPost
            key={this.props.dekoracje[id].id}
            pageType={pageType}
            title={this.props.dekoracje[id].title}
            subtitle={this.props.dekoracje[id].subtitle}
            city={this.props.dekoracje[id].city}
            price={this.props.dekoracje[id].price}
            url={this.props.dekoracje[id].url}
            description={this.props.dekoracje[id].description}
          />
        )}
        {pageType === 'atrakcje' && (
          <CompaniesPost
            key={this.props.atrakcje[id].id}
            pageType={pageType}
            title={this.props.atrakcje[id].title}
            subtitle={this.props.atrakcje[id].subtitle}
            city={this.props.atrakcje[id].city}
            price={this.props.atrakcje[id].price}
            url={this.props.atrakcje[id].url}
            description={this.props.atrakcje[id].description}
          />
        )}
        {pageType === 'moda' && (
          <CompaniesPost
            key={this.props.moda[id].id}
            pageType={pageType}
            title={this.props.moda[id].title}
            subtitle={this.props.moda[id].subtitle}
            city={this.props.moda[id].city}
            price={this.props.moda[id].price}
            url={this.props.moda[id].url}
            description={this.props.moda[id].description}
          />
        )}
        {pageType === 'zespoly' && (
          <CompaniesPost
            key={this.props.zespoly[id].id}
            pageType={pageType}
            title={this.props.zespoly[id].title}
            subtitle={this.props.zespoly[id].subtitle}
            city={this.props.zespoly[id].city}
            price={this.props.zespoly[id].price}
            url={this.props.zespoly[id].url}
            description={this.props.zespoly[id].description}
          />
        )}
        {pageType === 'foto' && (
          <CompaniesPost
            key={this.props.foto[id].id}
            pageType={pageType}
            title={this.props.foto[id].title}
            subtitle={this.props.foto[id].subtitle}
            city={this.props.foto[id].city}
            price={this.props.foto[id].price}
            url={this.props.foto[id].url}
            description={this.props.foto[id].description}
          />
        )}
        {pageType === 'lokale' && (
          <CompaniesPost
            key={this.props.lokale[id].id}
            pageType={pageType}
            title={this.props.lokale[id].title}
            subtitle={this.props.lokale[id].subtitle}
            city={this.props.lokale[id].city}
            price={this.props.lokale[id].price}
            url={this.props.lokale[id].url}
            description={this.props.lokale[id].description}
          />
        )}
        {pageType === 'pozostale' && (
          <CompaniesPost
            key={this.props.pozostale[id].id}
            pageType={pageType}
            title={this.props.pozostale[id].title}
            subtitle={this.props.pozostale[id].subtitle}
            city={this.props.pozostale[id].city}
            price={this.props.pozostale[id].price}
            url={this.props.pozostale[id].url}
            description={this.props.pozostale[id].description}
          />
        )}
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { pozostale, lokale, foto, zespoly, moda, atrakcje, dekoracje } = state;
  return { pozostale, lokale, foto, zespoly, moda, atrakcje, dekoracje };
};

export default connect(mapStateToProps)(DetailsCompanyView);
