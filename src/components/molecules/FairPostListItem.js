import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainTemplates from 'templates/MainTemplates';

import styled from 'styled-components';


const Wrapper = styled.div`
  width: 90vw;
  margin: 2rem auto;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
`;

const Body = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.2fr 0.8fr;
  width: 90vw;
  margin: 5rem 0;
`;

const Main = styled.div``;
const Aside = styled.div``;
const Picture = styled.div``;

const DescriptionItemList = styled.ul`
  margin-left: 3rem;
`;
const DescriptionItemListItem = styled.li``;

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

class FairPostListItem extends Component {
  render() {
    const { name, url, city, data, place, pageType, description } = this.props;
    return (
      <MainTemplates pageType={pageType}>
        <Wrapper>
          <Body>
            <Main>
              <Picture>
                <img src={url} alt={name} />
              </Picture>
            </Main>
            <Aside>
              {description.length !== '' ? (
                <>
                  {description.map(({ p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 }) => (
                    <DescriptionItemList>
                      <DescriptionItemListItem>{p1}</DescriptionItemListItem>
                      <DescriptionItemListItem>{p2}</DescriptionItemListItem>
                      <DescriptionItemListItem>{p3}</DescriptionItemListItem>
                      <DescriptionItemListItem>{p4}</DescriptionItemListItem>
                      <DescriptionItemListItem>{p5}</DescriptionItemListItem>
                      <DescriptionItemListItem>{p6}</DescriptionItemListItem>
                      <DescriptionItemListItem>{p7}</DescriptionItemListItem>
                      <DescriptionItemListItem>{p8}</DescriptionItemListItem>
                      <DescriptionItemListItem>{p9}</DescriptionItemListItem>
                      <DescriptionItemListItem>{p10}</DescriptionItemListItem>
                    </DescriptionItemList>
                  ))}
                </>
              ) : null}
              <ul>
                <li>{city}</li>
                <li>{data}</li>
                <li>{place}</li>
              </ul>
            </Aside>
          </Body>
        </Wrapper>
        <Button as={Link} to={`/`}>
          Close
        </Button>
      </MainTemplates>
    );
  }
}

export default FairPostListItem;
