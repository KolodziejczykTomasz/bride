import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';
import CompaniesItem from 'components/molecules/CompaniesItem';

const WrapperTabContent = styled.div`
  margin-top: 1.2rem;
`;

const WrapperTabRow = styled.div`
  margin-top: 1.2rem;
`;

const Alert = styled.span`
display:block;
width: 100%;
margin: 5rem 0 5rem 0;
text-align: center;
color: #6C44A2;
`;

const CompaniesBar = ({
company,
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
                {company.category === 'Dekoracje'.length ? <p>brak</p> : ( <>
                  {company.filter((item) => item.category === 'Dekoracje').map(({ id, url, title, subtitle, price, city, description, pageType }) => (
                      <CompaniesItem
                        id={id}
                        url={url}
                        key={id}
                        price={price}
                        title={title}
                        subtitle={subtitle}
                        description={description}
                        city={city}
                        pageType={pageType}
                      />
                    ))}
                  </>)}
              
              </Row>
            </WrapperTabRow>
          </TabPane>
          <TabPane tabId="2">
            <WrapperTabRow>
              <Row>
                {company.filter((item) => item.category === 'Atrakcje').length ? (
                  <>
                  {company.filter((item) => item.category === 'Atrakcje').map(({ id, url, title, subtitle, price, city, description, pageType }) => (
                      <CompaniesItem
                        id={id}
                        url={url}
                        key={id}
                        price={price}
                        title={title}
                        subtitle={subtitle}
                        city={city}
                        description={description}
                        pageType={pageType}
                      />
                    ))}
                  </>) : <Alert>Dodaj pierwszą firmę do tej kategorii</Alert>}
              </Row>
            </WrapperTabRow>
          </TabPane>
          <TabPane tabId="3">
            <WrapperTabRow>
              <Row>
                {company.filter((item) => item.category === 'Moda').length ? (
                  <>
                  {company.filter((item) => item.category === 'Moda').map(({ id, url, title, subtitle, price, city, description, pageType }) => (
                      <CompaniesItem
                        id={id}
                        url={url}
                        key={id}
                        price={price}
                        title={title}
                        subtitle={subtitle}
                        city={city}
                        description={description}
                        pageType={pageType}
                      />
                    ))}
                  </>) : <Alert>Dodaj pierwszą firmę do tej kategorii</Alert>}
              
              </Row>
            </WrapperTabRow>
          </TabPane>
          <TabPane tabId="4">
            <WrapperTabRow>
              <Row>
                {company.filter((item) => item.category === 'Zespoły').length ? (<>
                  {company.filter((item) => item.category === 'Zespoły').map(({ id, url, title, subtitle, price, city, description, pageType }) => (
                      <CompaniesItem
                        id={id}
                        url={url}
                        key={id}
                        price={price}
                        title={title}
                        subtitle={subtitle}
                        city={city}
                        description={description}
                        pageType={pageType}
                    />
                    ))}
                </>) : <Alert>Dodaj pierwszą firmę do tej kategorii</Alert>}
              </Row>
            </WrapperTabRow>
          </TabPane>
          <TabPane tabId="5">
            <WrapperTabRow>
              <Row>
                {company.filter((item) => item.category === 'Foto').length ? (<>
                  {company.filter((item) => item.category === 'Foto').map(({ id, url, title, subtitle, price, city, description, pageType }) => (
                      <CompaniesItem
                        id={id}
                        url={url}
                        key={id}
                        price={price}
                        title={title}
                        subtitle={subtitle}
                        city={city}
                        description={description}
                        pageType={pageType}
                    />
                    ))}
                </>) : <Alert>Dodaj pierwszą firmę do tej kategorii</Alert>}
           
              </Row>
            </WrapperTabRow>
          </TabPane>
          <TabPane tabId="6">
            <WrapperTabRow>
              <Row>
                {company.filter((item) => item.category === 'Lokale').length ? (<>
                  {company.filter((item) => item.category === 'Lokale').map(({ id, url, title, subtitle, price, city, description, pageType }) => (
                      <CompaniesItem
                        id={id}
                        url={url}
                        key={id}
                        price={price}
                        title={title}
                        subtitle={subtitle}
                        city={city}
                        description={description}
                        pageType={pageType}
                      />
                    ))}
                </>) : <Alert>Dodaj pierwszą firmę do tej kategorii</Alert>}             
              </Row>
            </WrapperTabRow>
          </TabPane>
          <TabPane tabId="7">
            <WrapperTabRow>
              <Row>
                {company.filter((item) => item.category === 'Pozostałe').length ? (<>
                    {company.filter((item) => item.category === 'Pozostałe').map(({ id, url, title, subtitle, price, city, description, pageType }) => (
                      <CompaniesItem
                        id={id}
                        url={url}
                        key={id}
                        price={price}
                        title={title}
                        subtitle={subtitle}
                        city={city}
                        description={description}
                        pageType={pageType}
                      />
                    ))}
                </>) : <Alert>Dodaj pierwszą firmę do tej kategorii</Alert>}             
              </Row>
            </WrapperTabRow>
          </TabPane>
        </TabContent>
      </WrapperTabContent>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { company } = state;
  return { company };
};

export default connect(mapStateToProps)(CompaniesBar);
