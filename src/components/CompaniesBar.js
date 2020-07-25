import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';
import CompaniesItem from 'components/CompaniesItem';

const WrapperTabContent = styled.div`
  margin-top: 1.2rem;
`;

const WrapperTabRow = styled.div`
  margin-top: 1.2rem;
`;

const CompaniesBar = ({
  pozostale,
  lokale,
  foto,
  zespoly,
  moda,
  atrakcje,
  dekoracje,
  description,
}) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}
          >
            Dekoracje
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}
          >
            Atrakcje
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => {
              toggle('3');
            }}
          >
            Moda
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => {
              toggle('4');
            }}
          >
            Zespoły
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => {
              toggle('5');
            }}
          >
            Fotografia, film
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '6' })}
            onClick={() => {
              toggle('6');
            }}
          >
            Lokale
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '7' })}
            onClick={() => {
              toggle('7');
            }}
          >
            Pozostałe
          </NavLink>
        </NavItem>
      </Nav>
      <WrapperTabContent>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <WrapperTabRow>
              <Row>
                {dekoracje.length ? (
                  <>
                    {dekoracje.map(({ id, url, title, subtitle, price, city, description }) => (
                      <CompaniesItem
                        id={id}
                        url={url}
                        key={id}
                        price={price}
                        title={title}
                        subtitle={subtitle}
                        description={description}
                        city={city}
                        pageType="dekoracje"
                      />
                    ))}
                  </>
                ) : (
                  <p>Brak firm w danej kategorii</p>
                )}
              </Row>
            </WrapperTabRow>
          </TabPane>
          <TabPane tabId="2">
            <WrapperTabRow>
              <Row>
                {atrakcje.length ? (
                  <>
                    {atrakcje.map(({ id, url, title, subtitle, price, city, description }) => (
                      <CompaniesItem
                        id={id}
                        url={url}
                        key={id}
                        price={price}
                        title={title}
                        subtitle={subtitle}
                        city={city}
                        description={description}
                        pageType="atrakcje"
                      />
                    ))}
                  </>
                ) : (
                  <p>Brak firm w danej kategorii</p>
                )}
              </Row>
            </WrapperTabRow>
          </TabPane>
          <TabPane tabId="3">
            <WrapperTabRow>
              <Row>
                {moda.length ? (
                  <>
                    {moda.map(({ id, url, title, subtitle, price, city, description }) => (
                      <CompaniesItem
                        id={id}
                        url={url}
                        key={id}
                        price={price}
                        title={title}
                        subtitle={subtitle}
                        city={city}
                        description={description}
                        pageType="moda"
                      />
                    ))}
                  </>
                ) : (
                  <p>Brak firm w danej kategorii</p>
                )}
              </Row>
            </WrapperTabRow>
          </TabPane>
          <TabPane tabId="4">
            <WrapperTabRow>
              <Row>
                {zespoly.length ? (
                  <>
                    {zespoly.map(({ id, url, title, subtitle, price, city, description }) => (
                      <CompaniesItem
                        id={id}
                        url={url}
                        key={id}
                        price={price}
                        title={title}
                        subtitle={subtitle}
                        city={city}
                        description={description}
                        pageType="zespoly"
                      />
                    ))}
                  </>
                ) : (
                  <p>Brak firm w danej kategorii</p>
                )}
              </Row>
            </WrapperTabRow>
          </TabPane>
          <TabPane tabId="5">
            <WrapperTabRow>
              <Row>
                {foto.length ? (
                  <>
                    {foto.map(({ id, url, title, subtitle, price, city, description }) => (
                      <CompaniesItem
                        id={id}
                        url={url}
                        key={id}
                        price={price}
                        title={title}
                        subtitle={subtitle}
                        city={city}
                        description={description}
                        pageType="foto"
                      />
                    ))}
                  </>
                ) : (
                  <p>Brak firm w danej kategorii</p>
                )}
              </Row>
            </WrapperTabRow>
          </TabPane>
          <TabPane tabId="6">
            <WrapperTabRow>
              <Row>
                {lokale.length ? (
                  <>
                    {lokale.map(({ id, url, title, subtitle, price, city, description }) => (
                      <CompaniesItem
                        id={id}
                        url={url}
                        key={id}
                        price={price}
                        title={title}
                        subtitle={subtitle}
                        city={city}
                        description={description}
                        pageType="lokale"
                      />
                    ))}
                  </>
                ) : (
                  <p>Brak firm w danej kategorii</p>
                )}
              </Row>
            </WrapperTabRow>
          </TabPane>
          <TabPane tabId="7">
            <WrapperTabRow>
              <Row>
                {pozostale.length ? (
                  <>
                    {pozostale.map(({ id, url, title, subtitle, price, city, description }) => (
                      <CompaniesItem
                        id={id}
                        url={url}
                        key={id}
                        price={price}
                        title={title}
                        subtitle={subtitle}
                        city={city}
                        description={description}
                        pageType="pozostale"
                      />
                    ))}
                  </>
                ) : (
                  <p>Brak firm w danej kategorii</p>
                )}
              </Row>
            </WrapperTabRow>
          </TabPane>
        </TabContent>
      </WrapperTabContent>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { pozostale, lokale, foto, zespoly, moda, atrakcje, dekoracje } = state;
  return { pozostale, lokale, foto, zespoly, moda, atrakcje, dekoracje };
};

export default connect(mapStateToProps)(CompaniesBar);
