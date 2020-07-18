import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainTemplates from 'templates/MainTemplates';
import BreakeHeader from 'components/BreakeHeader';
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

const Wrapper = styled.div`
  width: 80vw;
  margin: 2rem auto;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
`;
const Header = styled.div`
  margin: 5rem 0;
`;
const Title = styled.h1`
  margin: 5rem 0;
`;
const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.3fr 0.7fr;
  margin: 5rem 0;
`;
const Main = styled.div``;
const Aside = styled.div``;

const PhotoBox = styled.div``;
const Photo = styled.img`
  display: block;
  width: 50rem;
  margin: 1rem auto;
`;

class PressPost extends Component {
  render() {
    const { title, number, description, price, download, publisher, shop, url, pageType } = this.props;
    return (
      <MainTemplates pageType={pageType}>
        <BreakeHeader>Prasa ślubna</BreakeHeader>
        <Wrapper>
          <Header></Header>
          <Card>
            <Main>
              <PhotoBox>
                <Photo src={url} alt={title} />
              </PhotoBox>
            </Main>
            <Aside>
              <Title> {title}</Title>
              {number}
              <div>
                {description.length !== '' ? (
                  <>
                    {description.map(({ url, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 }) => (
                      <ul>
                        <li>{p1}</li>
                        <li>{p2}</li>
                        <li>{p3}</li>
                        <li>{p4}</li>
                        <li>{p5}</li>
                        <li>{p6}</li>
                        <li>{p7}</li>
                        <li>{p8}</li>
                        <li>{p9}</li>
                        <li>{p10}</li>
                      </ul>
                    ))}
                  </>
                ) : null}
              </div>
              <div>{publisher}</div>
              <div>{price}</div>
              <div>{shop}</div>
              <div>{download}</div>
            </Aside>
          </Card>
          <Button as={Link} to={`/`}>
            Close
          </Button>
        </Wrapper>
      </MainTemplates>
    );
  }
}

export default PressPost;
