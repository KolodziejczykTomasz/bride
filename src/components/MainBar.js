import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1, 1fr;
  grid-template-columns: 1.8fr 1fr;
  margin: 2rem 0;
`;
const Main = styled.div`
  height: 100%;
  background-color: red;
`;

const MainWrapper = styled.div``;

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;
const Widget = styled.div``;

const MainBar = () => (
  <Wrapper>
    <Main>
            <MainWrapper>
        <Card>
          <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
            </MainWrapper>
    </Main>
    <Aside>
      <Widget>
        <div>
          <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      </Widget>
      <Widget>
        <div>
          <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      </Widget>
      <Widget>
        <div>
          <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      </Widget>
    </Aside>
  </Wrapper>
);

export default MainBar;
