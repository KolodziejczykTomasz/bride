import React from 'react';
import { connect } from 'react-redux';
import BreakeFooter from 'components/atoms/BreakeFooter';
import PressSimilarItem from 'components/molecules/PressSimilarItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 2rem auto;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
`;

const WrapperFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

const WrapperFooterItem = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  margin-left: 2rem;
`;

const PressSimilar = ({ id, pageType, title, press }) => (
  <>
    {title === 'Młoda Para Od A-Z' ? (
      <Wrapper>
        {title !== 'Młoda Para Od A-Z' ? null : <BreakeFooter>Poprzednie wydania</BreakeFooter>}
        <WrapperFooter>
          {press
            .filter((item) => item.title === 'Młoda Para Od A-Z')
            .slice(1, 6)
            .map(({ id, url, title, number }) => (
              <>
                <WrapperFooterItem>
                  <PressSimilarItem
                    idSimilarItem={id}
                    urlSimilarItem={url}
                    keySimilarItem={id}
                    titleSimilarItem={title}
                    numberSimilarItem={number}
                    pageType="presses"
                  />
                </WrapperFooterItem>
              </>
            ))}
        </WrapperFooter>
      </Wrapper>
    ) : null}
    {title === 'Свадьба в Москве' ? (
      <Wrapper>
        {title !== 'Свадьба в Москве' ? <BreakeFooter>Poprzednie wydania</BreakeFooter> : null}
        <WrapperFooter>
          {press
            .filter((item) => item.title === 'Свадьба в Москве')
            .slice(1, 6)
            .map(({ id, url, title, number }) => (
              <>
                <WrapperFooterItem>
                  <PressSimilarItem
                    idSimilarItem={id}
                    urlSimilarItem={url}
                    keySimilarItem={id}
                    titleSimilarItem={title}
                    numberSimilarItem={number}
                    pageType="presses"
                  />
                </WrapperFooterItem>
              </>
            ))}
        </WrapperFooter>
      </Wrapper>
    ) : null}
    {title === 'Panna Młoda' ? (
      <Wrapper>
        {title !== 'Panna Młoda' ? <BreakeFooter>Poprzednie wydania</BreakeFooter> : null}
        <WrapperFooter>
          {press
            .filter((item) => item.title === 'Panna Młoda')
            .slice(1, 6)
            .map(({ id, url, title, number }) => (
              <>
                <WrapperFooterItem>
                  <PressSimilarItem
                    idSimilarItem={id}
                    urlSimilarItem={url}
                    keySimilarItem={id}
                    titleSimilarItem={title}
                    numberSimilarItem={number}
                    pageType="presses"
                  />
                </WrapperFooterItem>
              </>
            ))}
        </WrapperFooter>
      </Wrapper>
    ) : null}
    {title === 'Uroczystość' ? (
      <Wrapper>
        {title !== 'Uroczystość' ? null : <BreakeFooter>Poprzednie wydania</BreakeFooter>}
        {press
          .filter((item) => item.title === 'Uroczystość')
          .slice(1, 6)
          .map(({ id, url, title, number }) => (
            <>
              <WrapperFooter>
                <WrapperFooterItem>
                  <PressSimilarItem
                    idSimilarItem={id}
                    urlSimilarItem={url}
                    keySimilarItem={id}
                    titleSimilarItem={title}
                    numberSimilarItem={number}
                    pageType="presses"
                  />
                </WrapperFooterItem>
              </WrapperFooter>
            </>
          ))}
      </Wrapper>
    ) : null}
    {title === 'Wedding' ? (
      <Wrapper>
        {title !== 'Wedding' ? <BreakeFooter>Poprzednie wydania</BreakeFooter> : null}
        {press
          .filter((item) => item.title === 'Wedding')
          .slice(1, 6)
          .map(({ id, url, title, number }) => (
            <>
              <WrapperFooter>
                <WrapperFooterItem>
                  <PressSimilarItem
                    id={id}
                    url={url}
                    key={id}
                    title={title}
                    number={number}
                    pageType="presses"
                  />
                </WrapperFooterItem>
              </WrapperFooter>
            </>
          ))}
      </Wrapper>
    ) : null}
  </>
);

const mapStateToProps = (state) => {
  const { press } = state;
  return { press };
};

export default connect(mapStateToProps)(PressSimilar);
