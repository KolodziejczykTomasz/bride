import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainTemplates from 'templates/MainTemplates';
import styled from 'styled-components';

const Button = styled.a`
  display: grid;
  position: fixed;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-content: center;
  color: black;
  background-color: lightgray;
  border-radius: 50px;
  bottom: 220px;
  right: 40px;
  :hover {
    text-decoration-line: none;
    color: white;
  }
`;

class MainPost extends Component {
  render() {
    const {
      title,
      subtitle,
      picHeader,
      pageType,
      header,
      header1,
      header2,
      header3,
      header4,
      header5,
      header6,
      header7,
      header8,
      header9,
      header10,
      header11,
      p1,
      p2,
      p3,
      p4,
      p5,
      p6,
      p7,
      p8,
      p9,
      p10,
      p11,
      pic1,
      pic2,
      pic3,
      pic4,
      pic5,
      pic6,
      pic7,
      pic8,
      pic9,
      pic10,
      pic11,
    } = this.props;
    return (
      <MainTemplates pageType={pageType}>
        <div>
          <div>{title}</div>
          <div>{subtitle}</div>
          <div>
            {picHeader !== '' ? (
              <>              
                <img src={picHeader} alt={title} />
              </>
            ) : null}
          </div>
          <div>{header}</div>
          <div>
            {header1}
            {p1}
            {pic1 !== '' ? (
              <>
                <img src={pic1} alt={title} />
              </>
            ) : null}
          </div>
          <div>
            {header2}
            {p2}
            {pic2 !== '' ? (
              <>
                <img src={pic2} alt={title} />
              </>
            ) : null}
          </div>
          <div>
            {header3}
            {p3}
            {pic3 !== '' ? (
              <>
                <img src={pic3} alt={title} />
              </>
            ) : null}
          </div>
          <div>
            {header4}
            {p4}
            {pic4 !== '' ? (
              <>
                <img src={pic4} alt={title} />
              </>
            ) : null}
          </div>
          <div>
            {header5}
            {p5}
            {pic5 !== '' ? (
              <>
                <img src={pic5} alt={title} />
              </>
            ) : null}
          </div>
          <div>
            {header6}
            {p6}
            {pic6 !== '' ? (
              <>
                <img src={pic6} alt={title} />
              </>
            ) : null}
          </div>
          <div>
            {header7}
            {p7}
            {pic7 !== '' ? (
              <>
                <img src={pic7} alt={title} />
              </>
            ) : null}
          </div>
          <div>
            {header8}
            {p8}
            {pic8 !== '' ? (
              <>
                <img src={pic8} alt={title} />
              </>
            ) : null}
          </div>
          <div>
            {header9}
            {p9}
            {pic9 !== '' ? (
              <>
                <img src={pic9} alt={title} />
              </>
            ) : null}
          </div>
          <div>
            {header10}
            {p10}
            {pic10 !== '' ? (
              <>
                <img src={pic10} alt={title} />
              </>
            ) : null}
          </div>
          <div>
            {header11}
            {p11}
            {pic11 !== '' ? (
              <>
                <img src={pic11} alt={title} />{' '}
              </>
            ) : null}
          </div>
          <Button as={Link} to={`/`}>
            Close
          </Button>
        </div>
      </MainTemplates>
    );
  }
}

export default MainPost;
