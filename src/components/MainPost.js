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
      picHero,
      pageType,
      header1,
      header2,
      header3,
      header4,
      header6,
      header7,
      header8,
      header9,
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
    } = this.props;
    return (
      <MainTemplates pageType={pageType}>
        <div>
          <div>{title}</div>
          <div>{subtitle}</div>
          <div>
            <img src={picHero} alt={title} />
          </div>
          {p1 === '' ? null : <>{p1}</>}
          {pic1 === '' ? (
            <>
              <img src={pic1} alt={title} />
            </>
          ) : null}
          {p2 !== '' ? <>{p2}</> : null}
          {pic2 === '' ? (
            <>
              <img src={pic2} alt={title} />
            </>
          ) : null}
          {header1}
          {p3 !== '' ? <>{p3}</> : null}
          {pic3 !== null ? (
            <>
              <img src={pic3} alt={title} />
            </>
          ) : null}
          {p4 !== '' ? <>{p4}</> : null}
          {pic4 === '' ? (
            <>
              <img src={pic4} alt={title} />
            </>
          ) : null}
          {p5 !== '' ? <>{p5}</> : null}
          {pic5 !== null ? (
            <>
              <img src={pic5} alt={title} />
            </>
          ) : null}
          {p6 !== '' ? <>{p6}</> : null}
          {pic6 === '' ? (
            <>
              <img src={pic6} alt={title} />
            </>
          ) : null}
          {p7 !== '' ? <>{p7}</> : null}
          {pic7 === null ? (
            <>
              <img src={pic7} alt={title} />
            </>
          ) : null}
          {p8 !== '' ? <>{p8}</> : null}
          {pic8 === '' ? (
            <>
              <img src={pic8} alt={title} />
            </>
          ) : null}
          {p9 !== '' ? <>{p9}</> : null}
          {pic9 === '' ? (
            <>
              <img src={pic9} alt={title} />
            </>
          ) : null}
          {p10 !== '' ? <>{p10}</> : null}
          {pic10 === '' ? (
            <>
              <img src={pic10} alt={title} />
            </>
          ) : null}
          {p11 === '' ? <>{p11}</> : null}
          <Button as={Link} to={`/`}>
            Close
          </Button>
        </div>
      </MainTemplates>
    );
  }
}

export default MainPost;
