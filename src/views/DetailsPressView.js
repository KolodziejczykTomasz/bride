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
          />
        )}
        {pageType === 'pannamloda' && (
          <PressPost
            key={this.props.pannamloda[id].id}
            pageType={pageType}
            url={this.props.pannamloda[id].url}
            title={this.props.pannamloda[id].title}
            number={this.props.pannamloda[id].number}
          />
        )}
        {pageType === 'uroczystosc' && (
          <PressPost
            key={this.props.uroczystosc[id].id}
            pageType={pageType}
            url={this.props.uroczystosc[id].url}
            title={this.props.uroczystosc[id].title}
            number={this.props.uroczystosc[id].number}
          />
        )}
        {pageType === 'wedding' && (
          <PressPost
            key={this.props.wedding[id].id}
            pageType={pageType}
            url={this.props.wedding[id].url}
            title={this.props.wedding[id].title}
            number={this.props.wedding[id].number}
          />
        )}
        {pageType === 'omsvadba' && (
          <PressPost
            key={this.props.omsvadba[id].id}
            pageType={pageType}
            url={this.props.omsvadba[id].url}
            title={this.props.omsvadba[id].title}
            number={this.props.omsvadba[id].number}
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
