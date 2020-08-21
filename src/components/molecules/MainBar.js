import React from 'react';
import { connect } from 'react-redux';
import MainBarItem from 'components/molecules/MainBarItem.js';
import MainBarItemHero from 'components/molecules/MainBarItemHero.js';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 34% auto;
  grid-column-gap: 2rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 34% auto;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 34% auto;
  }
  @media (min-width: 1224px) {
    grid-template-columns: 34% auto;
  }
`;

const Main = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
`;

const MainContainer = styled.div`
  display: grid;
  height: 100%;
  box-shadow: 0 0.5em 1em -0.125em rgba(108, 68, 162, 0.3), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  :hover {
    box-shadow: 0 2px 4px #6c44a2;
  }
`;

const Aside = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  width: 100%;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AsideContainer = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: 0 0.5em 1em -0.125em rgba(108, 68, 162, 0.3), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  :hover {
    box-shadow: 0 2px 4px #6c44a2;
  }
`;

const ItemWrapper = styled.div``;

const MainBar = ({ postbride, postextras, extras, brides, header, gallery }) => (
  <Wrapper>
    <Main>
      <MainContainer>
        <ItemWrapper pageType={extras}>
          {postextras
            .slice(0, 1)
            .map(
              ({
                id,
                title,
                subtitle,
                picHeader,
                header,
                header1,
                header2,
                header3,
                header4,
                header5,
                header6,
                header7,
                header8,
                header9,
                header10,
                header11,
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
                pic11,
                gallery,
                tags,
                category,
              }) => (
                <MainBarItemHero
                  id={id}
                  key={id}
                  picHeader={picHeader}
                  title={title}
                  subtitle={subtitle}
                  header={header}
                  header1={header1}
                  p1={p1}
                  pic1={pic1}
                  header2={header2}
                  p2={p2}
                  pic2={pic2}
                  header3={header3}
                  p3={p3}
                  pic3={pic3}
                  header4={header4}
                  p4={p4}
                  pic4={pic4}
                  header5={header5}
                  p5={p5}
                  pic5={pic5}
                  header6={header6}
                  p6={p6}
                  pic6={pic6}
                  header7={header7}
                  p7={p7}
                  pic7={pic7}
                  header8={header8}
                  p8={p8}
                  pic8={pic8}
                  header9={header9}
                  p9={p9}
                  pic9={pic9}
                  header10={header10}
                  p10={p10}
                  pic10={pic10}
                  header11={header11}
                  p11={p11}
                  pic11={pic11}
                  gallery={gallery}
                  tags={tags}
                  category={category}
                  pageType="extras"
                />
              ),
            )}
        </ItemWrapper>
      </MainContainer>
    </Main>
    <Aside>
      <AsideContainer>
        <ItemWrapper pageType={brides}>
          {postbride
            .slice(0, 1)
            .map(
              ({
                id,
                title,
                subtitle,
                picHeader,
                header,
                header1,
                header2,
                header3,
                header4,
                header5,
                header6,
                header7,
                header8,
                header9,
                header10,
                header11,
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
                pic11,
                gallery,
                tags,
                category,
              }) => (
                <MainBarItem
                  id={id}
                  key={id}
                  picHeader={picHeader}
                  title={title}
                  subtitle={subtitle}
                  header={header}
                  header1={header1}
                  p1={p1}
                  pic1={pic1}
                  header2={header2}
                  p2={p2}
                  pic2={pic2}
                  header3={header3}
                  p3={p3}
                  pic3={pic3}
                  header4={header4}
                  p4={p4}
                  pic4={pic4}
                  header5={header5}
                  p5={p5}
                  pic5={pic5}
                  header6={header6}
                  p6={p6}
                  pic6={pic6}
                  header7={header7}
                  p7={p7}
                  pic7={pic7}
                  header8={header8}
                  p8={p8}
                  pic8={pic8}
                  header9={header9}
                  p9={p9}
                  pic9={pic9}
                  header10={header10}
                  p10={p10}
                  pic10={pic10}
                  header11={header11}
                  p11={p11}
                  pic11={pic11}
                  gallery={gallery}
                  tags={tags}
                  category={category}
                  pageType="brides"
                />
              ),
            )}
        </ItemWrapper>
      </AsideContainer>
      <AsideContainer>
        <ItemWrapper pageType={extras}>
          {postextras
            .slice(1, 2)
            .map(
              ({
                id,
                title,
                subtitle,
                picHeader,
                header,
                header1,
                header2,
                header3,
                header4,
                header5,
                header6,
                header7,
                header8,
                header9,
                header10,
                header11,
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
                pic11,
                gallery,
                tags,
                category,
              }) => (
                <MainBarItem
                  id={id}
                  key={id}
                  picHeader={picHeader}
                  title={title}
                  subtitle={subtitle}
                  header={header}
                  header1={header1}
                  p1={p1}
                  pic1={pic1}
                  header2={header2}
                  p2={p2}
                  pic2={pic2}
                  header3={header3}
                  p3={p3}
                  pic3={pic3}
                  header4={header4}
                  p4={p4}
                  pic4={pic4}
                  header5={header5}
                  p5={p5}
                  pic5={pic5}
                  header6={header6}
                  p6={p6}
                  pic6={pic6}
                  header7={header7}
                  p7={p7}
                  pic7={pic7}
                  header8={header8}
                  p8={p8}
                  pic8={pic8}
                  header9={header9}
                  p9={p9}
                  pic9={pic9}
                  header10={header10}
                  p10={p10}
                  pic10={pic10}
                  header11={header11}
                  p11={p11}
                  pic11={pic11}
                  gallery={gallery}
                  tags={tags}
                  category={category}
                  pageType="extras"
                />
              ),
            )}
        </ItemWrapper>
      </AsideContainer>
      <AsideContainer>
        <ItemWrapper pageType={extras}>
          {postextras
            .slice(2, 3)
            .map(
              ({
                id,
                title,
                subtitle,
                picHeader,
                header,
                header1,
                header2,
                header3,
                header4,
                header5,
                header6,
                header7,
                header8,
                header9,
                header10,
                header11,
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
                pic11,
                gallery,
                tags,
                category,
              }) => (
                <MainBarItem
                  id={id}
                  key={id}
                  picHeader={picHeader}
                  title={title}
                  subtitle={subtitle}
                  header={header}
                  header1={header1}
                  p1={p1}
                  pic1={pic1}
                  header2={header2}
                  p2={p2}
                  pic2={pic2}
                  header3={header3}
                  p3={p3}
                  pic3={pic3}
                  header4={header4}
                  p4={p4}
                  pic4={pic4}
                  header5={header5}
                  p5={p5}
                  pic5={pic5}
                  header6={header6}
                  p6={p6}
                  pic6={pic6}
                  header7={header7}
                  p7={p7}
                  pic7={pic7}
                  header8={header8}
                  p8={p8}
                  pic8={pic8}
                  header9={header9}
                  p9={p9}
                  pic9={pic9}
                  header10={header10}
                  p10={p10}
                  pic10={pic10}
                  header11={header11}
                  p11={p11}
                  pic11={pic11}
                  gallery={gallery}
                  tags={tags}
                  category={category}
                  pageType="extras"
                />
              ),
            )}
        </ItemWrapper>
      </AsideContainer>
      <AsideContainer>
        <ItemWrapper pageType={extras}>
          {postextras
            .slice(3, 4)
            .map(
              ({
                id,
                title,
                subtitle,
                picHeader,
                header,
                header1,
                header2,
                header3,
                header4,
                header5,
                header6,
                header7,
                header8,
                header9,
                header10,
                header11,
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
                pic11,
                gallery,
                tags,
                category,
              }) => (
                <MainBarItem
                  id={id}
                  key={id}
                  picHeader={picHeader}
                  title={title}
                  subtitle={subtitle}
                  header={header}
                  header1={header1}
                  p1={p1}
                  pic1={pic1}
                  header2={header2}
                  p2={p2}
                  pic2={pic2}
                  header3={header3}
                  p3={p3}
                  pic3={pic3}
                  header4={header4}
                  p4={p4}
                  pic4={pic4}
                  header5={header5}
                  p5={p5}
                  pic5={pic5}
                  header6={header6}
                  p6={p6}
                  pic6={pic6}
                  header7={header7}
                  p7={p7}
                  pic7={pic7}
                  header8={header8}
                  p8={p8}
                  pic8={pic8}
                  header9={header9}
                  p9={p9}
                  pic9={pic9}
                  header10={header10}
                  p10={p10}
                  pic10={pic10}
                  header11={header11}
                  p11={p11}
                  pic11={pic11}
                  gallery={gallery}
                  tags={tags}
                  category={category}
                  pageType="extras"
                />
              ),
            )}
        </ItemWrapper>
      </AsideContainer>
    </Aside>
  </Wrapper>
);

const mapStateToProps = (state) => {
  const { postbride, postextras } = state;
  return { postbride, postextras };
};

export default connect(mapStateToProps)(MainBar);
