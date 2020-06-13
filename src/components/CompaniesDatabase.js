import React, { useState } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';
import DekoracjeNo1 from '../assets/images/companies/slubnaalejka.png';

const WrapperTabContent = styled.div`
  margin-top: 1.2rem;
`;

const WrapperTabRow = styled.div`
  margin-top: 1.2rem;
`;

const CompaniesDatabase = (props) => {
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
            Atrakcje
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => {
              toggle('5');
            }}
          >
            Zespoły
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '6' })}
            onClick={() => {
              toggle('6');
            }}
          >
            Fotografia, film
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '7' })}
            onClick={() => {
              toggle('7');
            }}
          >
            Lokale
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '8' })}
            onClick={() => {
              toggle('8');
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
                <Col sm="4">
                  <Card body>
                    <CardTitle>
                      <h1>Dekoracje ślubne</h1>
                    </CardTitle>
                    <img src={DekoracjeNo1} alt="DekoracjeNo1" />
                    <CardText>
                      Ozdoby weselne, które znaleźć można w naszej ofercie to także latające
                      lampiony, które tworzą niesamowity klimat. Dekoracje na wesele dostępne w
                      naszym sklepie to także szalenie modne gadżety do Fotobudki. Mogą to być usta,
                      wąsy, okulary lub różnego rodzaju napisy, które rozbawiają gości. Warto
                      zwrócić uwagę na wszystkie dekoracje na wesele, które dostępne są w
                      prezentowanym przez nas asortymencie.
                    </CardText>
                    <Button>Przejdź</Button>
                  </Card>
                </Col>
                <Col sm="4">
                  <Card body>
                    <CardTitle>
                      <h1>Dekoracje ślubne</h1>
                    </CardTitle>
                    <img src={DekoracjeNo1} alt="DekoracjeNo1" />
                    <CardText>
                      Ozdoby weselne, które znaleźć można w naszej ofercie to także latające
                      lampiony, które tworzą niesamowity klimat. Dekoracje na wesele dostępne w
                      naszym sklepie to także szalenie modne gadżety do Fotobudki. Mogą to być usta,
                      wąsy, okulary lub różnego rodzaju napisy, które rozbawiają gości. Warto
                      zwrócić uwagę na wszystkie dekoracje na wesele, które dostępne są w
                      prezentowanym przez nas asortymencie.
                    </CardText>
                    <Button>Przejdź</Button>
                  </Card>
                </Col>
                <Col sm="4">
                  <Card body>
                    <CardTitle>
                      <h1>Dekoracje ślubne</h1>
                    </CardTitle>
                    <img src={DekoracjeNo1} alt="DekoracjeNo1" />
                    <CardText>
                      Ozdoby weselne, które znaleźć można w naszej ofercie to także latające
                      lampiony, które tworzą niesamowity klimat. Dekoracje na wesele dostępne w
                      naszym sklepie to także szalenie modne gadżety do Fotobudki. Mogą to być usta,
                      wąsy, okulary lub różnego rodzaju napisy, które rozbawiają gości. Warto
                      zwrócić uwagę na wszystkie dekoracje na wesele, które dostępne są w
                      prezentowanym przez nas asortymencie.
                    </CardText>
                    <Button>Przejdź</Button>
                  </Card>
                </Col>
              </Row>
            </WrapperTabRow>
          </TabPane>
          <TabPane tabId="2">
            <WrapperTabRow>
              <Row>
                <Col sm="4">
                  <Card body>
                    <CardTitle>
                      <h1>Dekoracje ślubne</h1>
                    </CardTitle>
                    <img src={DekoracjeNo1} alt="DekoracjeNo1" />
                    <CardText>
                      Ozdoby weselne, które znaleźć można w naszej ofercie to także latające
                      lampiony, które tworzą niesamowity klimat. Dekoracje na wesele dostępne w
                      naszym sklepie to także szalenie modne gadżety do Fotobudki. Mogą to być usta,
                      wąsy, okulary lub różnego rodzaju napisy, które rozbawiają gości. Warto
                      zwrócić uwagę na wszystkie dekoracje na wesele, które dostępne są w
                      prezentowanym przez nas asortymencie.
                    </CardText>
                    <Button>Przejdź</Button>
                  </Card>
                </Col>
                <Col sm="4">
                  <Card body>
                    <CardTitle>
                      <h1>Dekoracje ślubne</h1>
                    </CardTitle>
                    <img src={DekoracjeNo1} alt="DekoracjeNo1" />
                    <CardText>
                      Ozdoby weselne, które znaleźć można w naszej ofercie to także latające
                      lampiony, które tworzą niesamowity klimat. Dekoracje na wesele dostępne w
                      naszym sklepie to także szalenie modne gadżety do Fotobudki. Mogą to być usta,
                      wąsy, okulary lub różnego rodzaju napisy, które rozbawiają gości. Warto
                      zwrócić uwagę na wszystkie dekoracje na wesele, które dostępne są w
                      prezentowanym przez nas asortymencie.
                    </CardText>
                    <Button>Przejdź</Button>
                  </Card>
                </Col>
                <Col sm="4">
                  <Card body>
                    <CardTitle>
                      <h1>Dekoracje ślubne</h1>
                    </CardTitle>
                    <img src={DekoracjeNo1} alt="DekoracjeNo1" />
                    <CardText>
                      Ozdoby weselne, które znaleźć można w naszej ofercie to także latające
                      lampiony, które tworzą niesamowity klimat. Dekoracje na wesele dostępne w
                      naszym sklepie to także szalenie modne gadżety do Fotobudki. Mogą to być usta,
                      wąsy, okulary lub różnego rodzaju napisy, które rozbawiają gości. Warto
                      zwrócić uwagę na wszystkie dekoracje na wesele, które dostępne są w
                      prezentowanym przez nas asortymencie.
                    </CardText>
                    <Button>Przejdź</Button>
                  </Card>
                </Col>
              </Row>
            </WrapperTabRow>
          </TabPane>
          <TabPane tabId="3">
            <WrapperTabRow>
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </WrapperTabRow>
            <WrapperTabRow>
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </WrapperTabRow>
          </TabPane>
          <TabPane tabId="4">
            <WrapperTabRow>
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </WrapperTabRow>
            <WrapperTabRow>
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </WrapperTabRow>
          </TabPane>
          <TabPane tabId="5">
            <WrapperTabRow>
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </WrapperTabRow>
            <WrapperTabRow>
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </WrapperTabRow>
          </TabPane>
          <TabPane tabId="6">
            <WrapperTabRow>
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </WrapperTabRow>
            <WrapperTabRow>
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </WrapperTabRow>
          </TabPane>
          <TabPane tabId="7">
            <WrapperTabRow>
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </WrapperTabRow>
            <WrapperTabRow>
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </WrapperTabRow>
          </TabPane>
          <TabPane tabId="8">
            <WrapperTabRow>
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </WrapperTabRow>
            <WrapperTabRow>
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </WrapperTabRow>
          </TabPane>
        </TabContent>
      </WrapperTabContent>
    </div>
  );
};

export default CompaniesDatabase;
