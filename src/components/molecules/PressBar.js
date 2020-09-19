import React from 'react';
import { connect } from 'react-redux';
import PressItem from 'components/molecules/PressItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 481px) and (max-width: 766px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 1281px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const WrapperItem = styled.div`
  width: 100%;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
`;

const PressBar = ({ press }) => (
  <Wrapper>
    {press
      .filter((item) => item.title === 'Młoda Para Od A-Z')
      .slice(0, 1)
      .map(({ id, url, title, number, pageType }) => (
        <WrapperItem>
          <PressItem id={id} url={url} key={id} title={title} number={number} pageType={pageType} />
        </WrapperItem>
      ))}
    {press
      .filter((item) => item.title === 'Свадьба в Москве')
      .slice(0, 1)
      .map(({ id, url, title, number, pageType }) => (
        <WrapperItem>
          <PressItem id={id} url={url} key={id} title={title} number={number} pageType={pageType} />
        </WrapperItem>
      ))}
    {press
      .filter((item) => item.title === 'Panna Młoda')
      .slice(0, 1)
      .map(({ id, url, title, number, pageType }) => (
        <WrapperItem>
          <PressItem id={id} url={url} key={id} title={title} number={number} pageType={pageType} />
        </WrapperItem>
      ))}
    {press
      .filter((item) => item.title === 'Uroczystość')
      .slice(0, 1)
      .map(({ id, url, title, number, pageType }) => (
        <WrapperItem>
          <PressItem id={id} url={url} key={id} title={title} number={number} pageType={pageType} />
        </WrapperItem>
      ))}
    {press
      .filter((item) => item.title === 'Wedding')
      .slice(0, 1)
      .map(({ id, url, title, number, pageType }) => (
        <WrapperItem>
          <PressItem id={id} url={url} key={id} title={title} number={number} pageType={pageType} />
        </WrapperItem>
      ))}
  </Wrapper>
);

const mapStateToProps = (state) => {
  const { press } = state;
  return { press };
};

export default connect(mapStateToProps)(PressBar);
