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
            picHeader={this.props.postbride[id].picHeader}
            title={this.props.postbride[id].title}
            subtitle={this.props.postbride[id].subtitle}
            header={this.props.postbride[id].header}
            header1={this.props.postbride[id].header1}
            p1={this.props.postbride[id].p1}
            pic1={this.props.postbride[id].pic1}
            header2={this.props.postbride[id].header2}
            p2={this.props.postbride[id].p2}
            pic2={this.props.postbride[id].pic2}
            header3={this.props.postbride[id].header3}
            p3={this.props.postbride[id].p3}
            pic3={this.props.postbride[id].pic3}
            header4={this.props.postbride[id].header4}
            p4={this.props.postbride[id].p4}
            pic4={this.props.postbride[id].pic4}
            header5={this.props.postbride[id].header5}
            p5={this.props.postbride[id].p5}
            pic5={this.props.postbride[id].pic5}
            header6={this.props.postbride[id].header6}
            p6={this.props.postbride[id].p6}
            pic6={this.props.postbride[id].pic6}
            header7={this.props.postbride[id].header7}
            p7={this.props.postbride[id].p7}
            pic7={this.props.postbride[id].pic7}
            header8={this.props.postbride[id].header8}
            p8={this.props.postbride[id].p8}
            pic8={this.props.postbride[id].pic8}
            header9={this.props.postbride[id].header9}
            p9={this.props.postbride[id].p9}
            pic9={this.props.postbride[id].pic9}
            header10={this.props.postbride[id].header10}
            p10={this.props.postbride[id].p10}
            pic10={this.props.postbride[id].pic10}
            header11={this.props.postbride[id].header11}
            p11={this.props.postbride[id].p11}
            pic11={this.props.postbride[id].pic11}
            gallery={this.props.postbride[id].gallery}
          />
        )}
        {pageType === 'extras' && (
          <MainPost
            key={this.props.postextras[id].id}
            pageType={pageType}
            picHeader={this.props.postextras[id].picHeader}
            title={this.props.postextras[id].title}
            subtitle={this.props.postextras[id].subtitle}
            header={this.props.postextras[id].header}
            header1={this.props.postextras[id].header1}
            p1={this.props.postextras[id].p1}
            pic1={this.props.postextras[id].pic1}
            header2={this.props.postextras[id].header2}
            p2={this.props.postextras[id].p2}
            pic2={this.props.postextras[id].pic2}
            header3={this.props.postextras[id].header3}
            p3={this.props.postextras[id].p3}
            pic3={this.props.postextras[id].pic3}
            header4={this.props.postextras[id].header4}
            p4={this.props.postextras[id].p4}
            pic4={this.props.postextras[id].pic4}
            header5={this.props.postextras[id].header5}
            p5={this.props.postextras[id].p5}
            pic5={this.props.postextras[id].pic5}
            header6={this.props.postextras[id].header6}
            p6={this.props.postextras[id].p6}
            pic6={this.props.postextras[id].pic6}
            header7={this.props.postextras[id].header7}
            p7={this.props.postextras[id].p7}
            pic7={this.props.postextras[id].pic7}
            header8={this.props.postextras[id].header8}
            p8={this.props.postextras[id].p8}
            pic8={this.props.postextras[id].pic8}
            header9={this.props.postextras[id].header9}
            p9={this.props.postextras[id].p9}
            pic9={this.props.postextras[id].pic9}
            header10={this.props.postextras[id].header10}
            p10={this.props.postextras[id].p10}
            pic10={this.props.postextras[id].pic10}
            header11={this.props.postextras[id].header11}
            p11={this.props.postextras[id].p11}
            pic11={this.props.postextras[id].pic11}
            gallery={this.props.postextras[id].gallery}
          />
        )}
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { postbride, postextras } = state;
  return { postbride, postextras };
};

export default connect(mapStateToProps)(DetailsMainView);
