import React, { Component } from 'react';
import { routes } from 'routes';
import { connect } from 'react-redux';
import NavbarTop from 'components/NavbarTop';
import JumbotronBar from 'components/JumbotronBar';
import Footer from 'components/Footer';
import ChurchPost from 'components/ChurchPost';

class DetailsChurchView extends Component {
  state = {
    pageType: 'churchs',
    id: 1,
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.church:
        this.setState({ pageType: 'churchs' });
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
      case '14':
        this.setState({ id: 13 });
        break;
      case '15':
        this.setState({ id: 14 });
        break;
      case '16':
        this.setState({ id: 15 });
        break;
      case '17':
        this.setState({ id: 16 });
        break;
      case '18':
        this.setState({ id: 17 });
        break;
      case '19':
        this.setState({ id: 18 });
        break;
      case '20':
        this.setState({ id: 19 });
        break;
      case '21':
        this.setState({ id: 20 });
        break;
      case '22':
        this.setState({ id: 21 });
        break;
      case '23':
        this.setState({ id: 22 });
        break;
      case '24':
        this.setState({ id: 23 });
        break;
      case '25':
        this.setState({ id: 24 });
        break;
      case '26':
        this.setState({ id: 25 });
        break;
      case '27':
        this.setState({ id: 26 });
        break;
      case '28':
        this.setState({ id: 27 });
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
        {pageType === 'churchs' && (
          <ChurchPost
            key={this.props.postchurch[id].id}
            pageType={pageType}
            title={this.props.postchurch[id].title}
            subtitle={this.props.postchurch[id].subtitle}
            header1={this.props.postchurch[id].header1}
            f1={this.props.postchurch[id].f1}
            p1={this.props.postchurch[id].p1}
            p2={this.props.postchurch[id].p2}
            p3={this.props.postchurch[id].p3}
            p4={this.props.postchurch[id].p4}
            p5={this.props.postchurch[id].p5}
            p6={this.props.postchurch[id].p6}
            p7={this.props.postchurch[id].p7}
            p8={this.props.postchurch[id].p8}
            p9={this.props.postchurch[id].p9}
            p10={this.props.postchurch[id].p10}
            p11={this.props.postchurch[id].p11}
            p12={this.props.postchurch[id].p12}
            p13={this.props.postchurch[id].p13}
            p14={this.props.postchurch[id].p14}
            p15={this.props.postchurch[id].p15}
            p16={this.props.postchurch[id].p16}
            p17={this.props.postchurch[id].p17}
            p18={this.props.postchurch[id].p18}
            p19={this.props.postchurch[id].p19}
            p20={this.props.postchurch[id].p20}
            p21={this.props.postchurch[id].p21}
            p22={this.props.postchurch[id].p22}
            p23={this.props.postchurch[id].p23}
            p24={this.props.postchurch[id].p24}
            p25={this.props.postchurch[id].p25}
            p26={this.props.postchurch[id].p26}
            p27={this.props.postchurch[id].p27}
            p28={this.props.postchurch[id].p28}
            p29={this.props.postchurch[id].p29}
            p30={this.props.postchurch[id].p30}
            p31={this.props.postchurch[id].p31}
            p32={this.props.postchurch[id].p32}
            p33={this.props.postchurch[id].p33}
          />
        )}
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { postchurch } = state;
  return { postchurch };
};

export default connect(mapStateToProps)(DetailsChurchView);
