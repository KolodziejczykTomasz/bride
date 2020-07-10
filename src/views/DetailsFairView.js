import React, { Component } from 'react';
import { routes } from 'routes';
import { connect } from 'react-redux';
import NavbarTop from 'components/NavbarTop';
import JumbotronBar from 'components/JumbotronBar';
import Footer from 'components/Footer';
import FairPost from 'components/FairPost';

class DetailsFairView extends Component {
  state = {
    pageType: 'targikrakow',
    id: 0,
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.targikrakow:
        this.setState({ pageType: 'targikrakow' });
        break;
      case routes.targikatowice:
        this.setState({ pageType: 'targikatowice' });
        break;
      case routes.targikielce:
        this.setState({ pageType: 'targikielce' });
        break;
      case routes.targikrakowarena:
        this.setState({ pageType: 'targikrakowarena' });
        break;
      case routes.targilodz:
        this.setState({ pageType: 'targilodz' });
        break;
      case routes.targirybnik:
        this.setState({ pageType: 'targirybnik' });
        break;
      case routes.targihalaorbita:
        this.setState({ pageType: 'targihalaorbita' });
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
        {pageType === 'targikrakow' && (
          <FairPost
            key={this.props.targikrakow[id].id}
            pageType={pageType}
            url={this.props.targikrakow[id].url}
            city={this.props.targikrakow[id].city}
            street={this.props.targikrakow[id].street}
            place={this.props.targikrakow[id].place}
            data={this.props.targikrakow[id].data}
            year={this.props.targikrakow[id].year}
            name={this.props.targikrakow[id].name}
          />
        )}
        {pageType === 'targikatowice' && (
          <FairPost
            key={this.props.targikatowice[id].id}
            pageType={pageType}
            url={this.props.targikatowice[id].url}
            city={this.props.targikatowice[id].city}
            street={this.props.targikatowice[id].street}
            place={this.props.targikatowice[id].place}
            data={this.props.targikatowice[id].data}
            year={this.props.targikatowice[id].year}
            name={this.props.targikatowice[id].name}
          />
        )}
        {pageType === 'targikielce' && (
          <FairPost
            key={this.props.targikielce[id].id}
            pageType={pageType}
            url={this.props.targikielce[id].url}
            city={this.props.targikielce[id].city}
            street={this.props.targikielce[id].street}
            place={this.props.targikielce[id].place}
            data={this.props.targikielce[id].data}
            year={this.props.targikielce[id].year}
            name={this.props.targikielce[id].name}
          />
        )}
        {pageType === 'targikrakowarena' && (
          <FairPost
            key={this.props.targikrakowarena[id].id}
            pageType={pageType}
            url={this.props.targikrakowarena[id].url}
            city={this.props.targikrakowarena[id].city}
            street={this.props.targikrakowarena[id].street}
            place={this.props.targikrakowarena[id].place}
            data={this.props.targikrakowarena[id].data}
            year={this.props.targikrakowarena[id].year}
            name={this.props.targikrakowarena[id].name}
          />
        )}
        {pageType === 'targilodz' && (
          <FairPost
            key={this.props.targilodz[id].id}
            pageType={pageType}
            url={this.props.targilodz[id].url}
            city={this.props.targilodz[id].city}
            street={this.props.targilodz[id].street}
            place={this.props.targilodz[id].place}
            data={this.props.targilodz[id].data}
            year={this.props.targilodz[id].year}
            name={this.props.targilodz[id].name}
          />
        )}
        {pageType === 'targirybnik' && (
          <FairPost
            key={this.props.targirybnik[id].id}
            pageType={pageType}
            url={this.props.targirybnik[id].url}
            city={this.props.targirybnik[id].city}
            street={this.props.targirybnik[id].street}
            place={this.props.targirybnik[id].place}
            data={this.props.targirybnik[id].data}
            year={this.props.targirybnik[id].year}
            name={this.props.targirybnik[id].name}
          />
        )}
        {pageType === 'targihalaorbita' && (
          <FairPost
            key={this.props.targihalaorbita[id].id}
            pageType={pageType}
            url={this.props.targihalaorbita[id].url}
            city={this.props.targihalaorbita[id].city}
            street={this.props.targihalaorbita[id].street}
            place={this.props.targihalaorbita[id].place}
            data={this.props.targihalaorbita[id].data}
            year={this.props.targihalaorbita[id].year}
            name={this.props.targihalaorbita[id].name}
          />
        )}
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    targikrakow,
    targikatowice,
    targikielce,
    targikrakowarena,
    targilodz,
    targirybnik,
    targihalaorbita,
  } = state;
  return {
    targikrakow,
    targikatowice,
    targikielce,
    targikrakowarena,
    targilodz,
    targirybnik,
    targihalaorbita,
  };
};

export default connect(mapStateToProps)(DetailsFairView);
