import React, { Component } from 'react';
import { config } from 'react-spring';
import Carousel from 'react-spring-3d-carousel';
import slide from '../components/HairImgViweSlides';
import styled from 'styled-components';


const Wrapper = styled.div`
margin-bottom: 5rem;
`;


class HairImgViewer extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle, 
  }


  slides = slide.map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  render() {
    return (
      <Wrapper>
        <div style={{ width: '80%', height: '500px', margin: '0 auto' }}>
          <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
          />
          <div
            style={{
              margin: '0 auto',
              marginTop: '2rem',
              width: '50%',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          ></div>
        </div>
      </Wrapper>
    );
  }
}
export default HairImgViewer;
