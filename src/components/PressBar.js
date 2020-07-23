import React from 'react';
import { connect } from 'react-redux';
import PressItem from 'components/PressItem';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  grid-column-gap: 1rem;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-flow: unset;
    grid-row-gap: 2rem;
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: unset;
    grid-row-gap: 2rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: unset;
    grid-row-gap: 2rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: unset;
    grid-row-gap: 2rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: unset;
    grid-row-gap: 2rem;
  }
  @media (min-width: 1224px) {
    grid-template-rows: 1fr;
    grid-auto-flow: column;
    grid-column-gap: 1rem;
  }
`;

const WrapperItem = styled.div`
  width: 100%;
`;



const PressBar = ({ mlodapara, pannamloda, uroczystosc, wedding, omsvadba }) => (
  <Wrapper>
    {mlodapara.slice(0, 1).map(({ id, url, title, number }) => (
      <WrapperItem>
        <PressItem id={id} url={url} key={id} title={title} number={number} pageType="mlodapara" />        
      </WrapperItem>
    ))}
    {pannamloda.slice(0, 1).map(({ id, url, title, number }) => (
      <WrapperItem>
        <PressItem id={id} url={url} key={id} title={title} number={number} pageType="pannamloda" />
      </WrapperItem>
    ))}
    {uroczystosc.slice(0, 1).map(({ id, url, title, number }) => (
      <WrapperItem>
        <PressItem
          id={id}
          url={url}
          key={id}
          title={title}
          number={number}
          pageType="uroczystosc"
        />
      </WrapperItem>
    ))}
    {wedding.slice(0, 1).map(({ id, url, title, number }) => (
      <WrapperItem>
        <PressItem id={id} url={url} key={id} title={title} number={number} pageType="wedding" />
      </WrapperItem>
    ))}
    {omsvadba.slice(0, 1).map(({ id, url, title, number }) => (
      <WrapperItem>
        <PressItem id={id} url={url} key={id} title={title} number={number} pageType="omsvadba" />
      </WrapperItem>
    ))}
  </Wrapper>
);

const mapStateToProps = (state) => {
  const { mlodapara, pannamloda, uroczystosc, wedding, omsvadba } = state;
  return { mlodapara, pannamloda, uroczystosc, wedding, omsvadba };
};

export default connect(mapStateToProps)(PressBar);
