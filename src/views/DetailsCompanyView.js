import React, { Component } from 'react';
import { routes } from 'routes';
import { connect } from 'react-redux';
import NavbarTop from 'components/organisms/NavbarTop';
import JumbotronBar from 'components/molecules/JumbotronBar';
import Footer from 'components/organisms/Footer';
import CompaniesPost from 'components/molecules/CompaniesPost';

class DetailsCompanyView extends Component {
  state = {
    pageType: 'dekoracje',
    id: 0,
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.company:
        this.setState({ pageType: 'company' });
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
        <CompaniesPost
          key={this.props.company[id].id}
          pageType={pageType}
          title={this.props.company[id].title}
          subtitle={this.props.company[id].subtitle}
          city={this.props.company[id].city}
          price={this.props.company[id].price}
          url={this.props.company[id].url}
          tags={this.props.company[id].tags}
          category={this.props.company[id].category}
          description={this.props.company[id].description}
          pageName={this.props.company[id].pageName}
        />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { company } = state;
  return { company };
};

export default connect(mapStateToProps)(DetailsCompanyView);
