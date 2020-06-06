import React from 'react';
import styled from 'styled-components';
import press1 from '../assets/images/press/bc_2_2019.jpg';

const Wrapper = styled.div``;

const PressItem = () => (
  <Wrapper className="card">
    <div class="card-content">
      <p className="title">
        <img src={press1} alt="press" />
      </p> 
    </div>
  </Wrapper>
);

export default PressItem;
