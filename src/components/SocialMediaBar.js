import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  height: 7rem;
`;

const SocialBox = styled.div`
  display: flexbox;
  width: 41px;
  height: 41px;
  margin: auto auto;
`;

const SocialMediaBar = () => (
  <Wrapper>
    <SocialBox>
      <FaFacebook style={{ fontSize: 40 }} />
    </SocialBox>
  </Wrapper>
);

export default SocialMediaBar;
