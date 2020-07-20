import React from 'react';
import PressItem from 'components/PressItem';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Wrapper = styled.div`
  display: flexbox;
  justify-content: space-between;
`;

const WrapperItem = styled.div`
  width: 17%;
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
