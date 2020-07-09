import React, { Component } from 'react';
import { routes } from 'routes';
import { connect } from 'react-redux';
import NavbarTop from 'components/NavbarTop';
import JumbotronBar from 'components/JumbotronBar';
import Footer from 'components/Footer';
import MainPost from 'components/MainPost';


class DetailsMainView extends Component {
  state = {
    pageType: 'brides',
    id: 0,
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.bride:
        this.setState({ pageType: 'brides' });
        break;
      case routes.extra:
        this.setState({ pageType: 'extras' });
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
        {pageType === 'brides' && (
          <MainPost
            key={this.props.postbride[id].id}
            pageType={pageType}
            title={this.props.postbride[id].title}
            subtitle={this.props.postbride[id].subtitle}
            picHero={this.props.postbride[id].picHero}
            p1={this.props.postbride[id].p1}
            p2={this.props.postbride[id].p2}
            p3={this.props.postbride[id].p3}
            p4={this.props.postbride[id].p4}
            p5={this.props.postbride[id].p5}
            p6={this.props.postbride[id].p6}
            p7={this.props.postbride[id].p7}
            p8={this.props.postbride[id].p8}
            p9={this.props.postbride[id].p9}
            p10={this.props.postbride[id].p10}
            p11={this.props.postbride[id].p11}
            pic1={this.props.postbride[id].pic1}
            pic2={this.props.postbride[id].pic2}
            pic3={this.props.postbride[id].pic3}
            pic4={this.props.postbride[id].pic4}
            pic5={this.props.postbride[id].pic5}
            pic6={this.props.postbride[id].pic6}
            pic7={this.props.postbride[id].pic7}
            pic8={this.props.postbride[id].pic8}
            pic9={this.props.postbride[id].pic9}
            pic10={this.props.postbride[id].pic10}
          />
        )}
        {pageType === 'extras' && (
          <MainPost
            key={this.props.postextras[id].id}
            pageType={pageType}
            title={this.props.postextras[id].title}
            subtitle={this.props.postextras[id].subtitle}
            picHero={this.props.postextras[id].picHero}
            p1={this.props.postextras[id].p1}
            p2={this.props.postextras[id].p2}
            p3={this.props.postextras[id].p3}
            p4={this.props.postextras[id].p4}
            p5={this.props.postextras[id].p5}
            p6={this.props.postextras[id].p6}
            p7={this.props.postextras[id].p7}
            p8={this.props.postextras[id].p8}
            p9={this.props.postextras[id].p9}
            p10={this.props.postextras[id].p10}
            p11={this.props.postextras[id].p11}
            pic1={this.props.postextras[id].pic1}
            pic2={this.props.postextras[id].pic2}
            pic3={this.props.postextras[id].pic3}
            pic4={this.props.postextras[id].pic4}
            pic5={this.props.postextras[id].pic5}
            pic6={this.props.postextras[id].pic6}
            pic7={this.props.postextras[id].pic7}
            pic8={this.props.postextras[id].pic8}
            pic9={this.props.postextras[id].pic9}
            pic10={this.props.postextras[id].pic10}
          />
        )}

        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { postbride, postextras, postchurch } = state;
  return { postbride, postextras, postchurch };
};

export default connect(mapStateToProps)(DetailsMainView);
