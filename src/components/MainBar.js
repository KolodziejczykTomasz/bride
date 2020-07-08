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

const MainBar = ({
  postbride,
  postextras,
  extras,
  brides,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
}) => (
  <Wrapper>
    <Main>
      <MainWrapper pageType={extras}>
        {postextras
          .slice(2, 3)
          .map(
            ({
              id,
              title,
              subtitle,
              picHero,
              p1,
              p2,
              p3,
              p4,
              p5,
              p6,
              p7,
              p8,
              p9,
              p10,
              p11,
              pic1,
              pic2,
              pic3,
              pic4,
              pic5,
              pic6,
              pic7,
              pic8,
              pic9,
              pic10,
            }) => (
              <MainBarHero
                id={id}
                key={id}
                title={title}
                subtitle={subtitle}
                picHero={picHero}
                pageType="extras"
              />
            ),
          )}
      </MainWrapper>
    </Main>
    <Aside>
      <div pageType={brides}>
        {postbride
          .slice(0, -1)
          .map(
            ({
              id,
              title,
              subtitle,
              picHero,
              p1,
              p2,
              p3,
              p4,
              p5,
              p6,
              p7,
              p8,
              p9,
              p10,
              p11,
              pic1,
              pic2,
              pic3,
              pic4,
              pic5,
              pic6,
              pic7,
              pic8,
              pic9,
              pic10,
            }) => (
              <MainBarItem
                id={id}
                key={id}
                title={title}
                subtitle={subtitle}
                picHero={picHero}
                p1={p1}
                p2={p2}
                p3={p3}
                p4={p4}
                p5={p5}
                p6={p6}
                p7={p7}
                p8={p8}
                p9={p9}
                p10={p10}
                p11={p11}
                pic1={pic1}
                pic2={pic2}
                pic3={pic3}
                pic4={pic4}
                pic5={pic5}
                pic6={pic6}
                pic7={pic7}
                pic8={pic8}
                pic9={pic9}
                pic10={pic10}
                pageType="brides"
              />
            ),
          )}
      </div>
      <div pageType={extras}>
        {postextras.slice(0, 1).map(({ id, title, subtitle, picHero }) => (
          <MainBarItem
            id={id}
            key={id}
            title={title}
            subtitle={subtitle}
            picHero={picHero}
            p1={p1}
            p2={p2}
            p3={p3}
            p4={p4}
            p5={p5}
            p6={p6}
            p7={p7}
            p8={p8}
            p9={p9}
            p10={p10}
            p11={p11}
            pic1={pic1}
            pic2={pic2}
            pic3={pic3}
            pic4={pic4}
            pic5={pic5}
            pic6={pic6}
            pic7={pic7}
            pic8={pic8}
            pic9={pic9}
            pic10={pic10}
            pageType="extras"
          />
        ))}
      </div>
    </Aside>
  </Wrapper>
);

const mapStateToProps = (state) => {
  const { postbride, postextras } = state;
  return { postbride, postextras };
};

export default connect(mapStateToProps)(MainBar);
