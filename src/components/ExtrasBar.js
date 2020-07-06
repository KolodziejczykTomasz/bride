import React from 'react';
import ExtrasItem from './ExtrasItem';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Wrapper = styled.div`
  display: flexbox;
  justify-content: space-between;
`;

const WrapperItem = styled.div`
  width: 24%;
`;

const ExtrasBar = ({ accesories }) => (
  <Wrapper>
    {accesories.map(({ id, url, name }) => (
      <WrapperItem>
        <ExtrasItem id={id} url={url} name={name} pageType="accesories" />
      </WrapperItem>
    ))}
  </Wrapper>
);

const mapStateToProps = (state) => {
  const { accesories } = state;
  return { accesories };
};

export default connect(mapStateToProps)(ExtrasBar);
