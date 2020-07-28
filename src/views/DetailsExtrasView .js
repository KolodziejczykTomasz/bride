import React, { Component } from 'react';
import { routes } from 'routes';
import { connect } from 'react-redux';
import NavbarTop from 'components/organisms/NavbarTop';
import JumbotronBar from 'components/molecules/JumbotronBar';
import Footer from 'components/organisms/Footer';
import MainPost from 'components/molecules/MainPost';


class DetailsExtrasView extends Component {
  state = {
    pageType: 'postextras',
    id: 0,
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.postextras:
        this.setState({ pageType: 'postextras' });
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
        {pageType === 'postextras' && (
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
            tags={this.props.postextras[id].tags}
          />
        )}

        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { postextras } = state;
  return { postextras };
};

export default connect(mapStateToProps)(DetailsExtrasView);
