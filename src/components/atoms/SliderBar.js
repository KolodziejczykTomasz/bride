import React, { Component } from 'react';
import Slider from 'react-animated-slider';

import slider1 from 'assets/images/slider/slider1.jpg';
import slider2 from 'assets/images/slider/slider2.jpg';
import slider3 from 'assets/images/slider/slider3.jpg';

import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './sliderStyles.css';

const content = [
  {
    title: 'Ślub z klasą!',
    description:
      'Zobacz męskie podejście do ślubu.',
    button: 'Zobacz więcej',
    image: slider1,
    user: 'Luan Gjokaj',
    userProfile: 'https://i.imgur.com/JSW6mEk.png',
  },
  {
    title: 'Ślub z klasą!',
    description:
      'Najnowsze trendy w branży ślubnej.',
    button: 'Przejdź dalej',
    image: slider2,
    user: 'Erich Behrens',
    userProfile: 'https://i.imgur.com/0Clfnu7.png',
  },
  {
    title: 'Ślub z klasą!',
    description:
      'Nie wiesz od czego zacząć?',
    button: 'Przejdź',
    image: slider3,
    user: 'Bruno Vizovskyy',
    userProfile: 'https://i.imgur.com/4KeKvtH.png',
  },
];

class SliderBar extends Component {

  render() {
    return (
      <div>
        <Slider className="slider-wrapper">
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url('${item.image}') no-repeat center center` }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button onClick={this.handleCardClick}>{item.button}</button>
              </div>
              <section>
                <img src={item.userProfile} alt={item.user} />
                <span>
                  Redaktor naczelny <strong>{item.user}</strong>
                </span>
              </section>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
};

export default SliderBar;
