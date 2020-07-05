import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import MainBarHero from 'components/MainBarHero';
import MainBarItem from 'components/MainBarItem';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1, 1fr;
  grid-template-columns: 1.2fr 1fr;
  margin: 2rem 0;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  height: 50rem;
`;
const Main = styled.div`
  margin-bottom: 3rem;
`;

const MainWrapper = styled.div``;

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin-left: 2rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  padding-left: 2rem;
`;

const MainBar = ({ postbride, postextras }) => (
  <Wrapper>
    <Main>
      <MainWrapper>
        {postextras.slice(2, 3).map(({ id, title, subtitle, picHero }) => (
          <MainBarHero id={id} key={id} title={title} subtitle={subtitle} picHero={picHero} />
        ))}
      </MainWrapper>
    </Main>
    <Aside>
      {postbride.slice(0, -1).map(({ id, title, subtitle, picHero }) => (
        <MainBarItem id={id} key={id} title={title} subtitle={subtitle} picHero={picHero} />
      ))}
      {postextras.slice(0, 1).map(({ id, title, subtitle, picHero }) => (
        <MainBarItem id={id} key={id} title={title} subtitle={subtitle} picHero={picHero} />
      ))}
    </Aside>
  </Wrapper>
);

MainBar.defaultProps = {
  postbride: [],
  postextras: [],
};

const mapStateToProps = (state) => {
  const { postbride, postextras } = state;
  return { postbride, postextras };
};

export default connect(mapStateToProps)(MainBar);
