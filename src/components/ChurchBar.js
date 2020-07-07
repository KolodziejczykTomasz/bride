import React from 'react';
import { connect } from 'react-redux';
import HeaderBreake from 'components/HeaderBreake';
import MainTemplates from 'templates/MainTemplates';
import ChurchItem from 'components/ChurchItem';
import styled from 'styled-components';

const MainWarpper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 3rem;
  margin-bottom: 5rem;
`;



const ChurchBar = ({ postchurch, churchs }) => (
  <MainTemplates pageType="churchs">
    <HeaderBreake>Pierwsze czytanie</HeaderBreake>
    <MainWarpper>
      {postchurch.slice(0, 9).map(({ id, title, subtitle }) => (
        <ChurchItem id={id} key={id} title={title} subtitle={subtitle} pageType="churchs" />
      ))}
    </MainWarpper>
    <HeaderBreake>Drugie czytanie</HeaderBreake>
    <MainWarpper>
      {postchurch.slice(10, 19).map(({ id, title, subtitle }) => (
        <ChurchItem id={id} key={id} title={title} subtitle={subtitle} pageType="churchs" />
      ))}
    </MainWarpper>
    <HeaderBreake>Ewangelie</HeaderBreake>
    <MainWarpper>
      {postchurch.slice(20, 28).map(({ id, title, subtitle }) => (
        <ChurchItem id={id} key={id} title={title} subtitle={subtitle} pageType="churchs" />
      ))}
    </MainWarpper>
  </MainTemplates>
);



const mapStateToProps = (state) => {
  const { postchurch } = state;
  return { postchurch };
};

export default connect(mapStateToProps)(ChurchBar);
