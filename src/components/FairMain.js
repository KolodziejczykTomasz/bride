import React from 'react';
import styled from 'styled-components';
import FairMainPicture from '../assets/images/fair/fairMain.jpg';

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
  max-width: 100%;
  margin: .8rem auto;
`;

const FairMain = () => (
  <Wrapper>
    <img src={FairMainPicture} alt="FairMainPicture" />
  </Wrapper>
);

export default FairMain;
