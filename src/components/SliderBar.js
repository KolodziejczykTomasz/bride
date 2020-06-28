import React from 'react';
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
    title: 'Vulputate Mollis Ultricies Fermentum Parturient',
    description:
      'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
    button: 'Read More',
    image: slider1,
    user: 'Luan Gjokaj',
    userProfile: 'https://i.imgur.com/JSW6mEk.png',
  },
  {
    title: 'Tortor Dapibus Commodo Aenean Quam',
    description:
      'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
    button: 'Discover',
    image: slider2,
    user: 'Erich Behrens',
    userProfile: 'https://i.imgur.com/0Clfnu7.png',
  },
  {
    title: 'Phasellus volutpat metus',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
    button: 'Buy now',
    image: slider3,
    user: 'Bruno Vizovskyy',
    userProfile: 'https://i.imgur.com/4KeKvtH.png',
  },
];

const SliderBar = () => (
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
            <button>{item.button}</button>
          </div>
          <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              Posted by <strong>{item.user}</strong>
            </span>
          </section>
        </div>
      ))}
    </Slider>
  </div>
);

export default SliderBar;
