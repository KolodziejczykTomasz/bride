import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import BreakeFooter from 'components/atoms/BreakeFooter';
import PressItem from 'components/molecules/PressItem';
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

class PressSimilarItems extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () =>
    this.setState({
      redirect: true,
    });

  render() {
    const { redirect } = this.state;
    const { id, pageType } = this.props;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }

    const { mlodapara, pannamloda, uroczystosc, wedding, omsvadba } = this.props;

    return (
      <Wrapper>
        {pageType === 'mlodapara' ? (
          <>
            <BreakeFooter>Poprzednie wydania</BreakeFooter>
            <WrapperFooter>
              <WrapperFooterItem>
                {mlodapara.slice(1, 6).map(({ id, url, title, number }) => (
                  <PressItem
                    id={id}
                    url={url}
                    key={id}
                    title={title}
                    number={number}
                    pageType="mlodapara"
                    onClick={this.handleCardClick}
                  />
                ))}
              </WrapperFooterItem>
            </WrapperFooter>
          </>
        ) : null}
        {pageType === 'pannamloda' ? (
          <><BreakeFooter>Poprzednie wydania</BreakeFooter>
            <WrapperFooter>              
              {pannamloda.slice(1, 6).map(({ id, url, title, number }) => (
                <WrapperFooterItem>
                  <PressItem
                    id={id}
                    url={url}
                    key={id}
                    title={title}
                    number={number}
                    pageType="pannamloda"
                    onClick={this.handleCardClick}
                  />
                </WrapperFooterItem>
              ))}
            </WrapperFooter>
          </>
        ) : null}
        {pageType === 'uroczystosc' ? (
          <><BreakeFooter>Poprzednie wydania</BreakeFooter>
            <WrapperFooter>              
              {uroczystosc.slice(1, 6).map(({ id, url, title, number }) => (
                <WrapperFooterItem>
                  <PressItem
                    id={id}
                    url={url}
                    key={id}
                    title={title}
                    number={number}
                    pageType="uroczystosc"
                  />
                </WrapperFooterItem>
              ))}
            </WrapperFooter>
          </>
        ) : null}
        {pageType === 'wedding' ? (
          <><BreakeFooter>Poprzednie wydania</BreakeFooter>
            <WrapperFooter>
              {wedding.slice(1, 6).map(({ id, url, title, number }) => (
                <WrapperFooterItem>                  
                  <PressItem
                    id={id}
                    url={url}
                    key={id}
                    title={title}
                    number={number}
                    pageType="wedding"
                  />
                </WrapperFooterItem>
              ))}
            </WrapperFooter>
          </>
        ) : null}
        {pageType === 'omsvadba' ? (
          <><BreakeFooter>Poprzednie wydania</BreakeFooter>
            <WrapperFooter>
              {omsvadba.slice(1, 6).map(({ id, url, title, number }) => (
                <WrapperFooterItem>                  
                  <PressItem
                    id={id}
                    url={url}
                    key={id}
                    title={title}
                    number={number}
                    pageType="omsvadba"
                  />
                </WrapperFooterItem>
              ))}
            </WrapperFooter>
          </>
        ) : null}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { mlodapara, pannamloda, uroczystosc, wedding, omsvadba } = state;
  return { mlodapara, pannamloda, uroczystosc, wedding, omsvadba };
};

export default connect(mapStateToProps)(PressSimilarItems);
