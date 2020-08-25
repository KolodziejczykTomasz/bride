import React from 'react';
import { FaFacebook, FaRegUser, FaPhone, FaHome, FaEnvelope } from 'react-icons/fa';
import LogoPage from 'assets/images/logotypy/logopage.png';
import ContactForm from 'components/molecules/ContactForm';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 60% auto;
  grid-column-gap: 2rem;
  @media (max-width: 600px) {
    grid-template-rows: auto 60% auto;
    grid-template-columns: auto;
  }
  @media (min-width: 600px) {
    grid-template-rows: auto 60% auto;
    grid-template-columns: auto;
    justify-content: center;
  }
  @media (min-width: 768px) {
    grid-template-columns: 60%;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 60% auto;
  }
  @media (min-width: 1224px) {
    grid-template-columns: 60% auto;
  }
`;

const Main = styled.div`
  box-shadow: 0 0.5em 1em -0.125em rgba(108, 68, 162, 0.3), 0 0px 0 1px rgba(10, 10, 10, 0.02);
`;

const MainContainer = styled.div`
  padding: 3rem 3rem;
`;

const MainTitle = styled.h1`
  display: block;
  margin-top: 3rem;
  padding: 2rem 3rem;
  text-align: left;
  text-transform: uppercase;
  color: #6c44a2;
`;

const MainSubTitle = styled.h2`
  margin: 3rem auto;
`;

const ThirdTitle = styled.h3`
  margin-bottom: 1rem;
`;

const MainForm = styled.div``;

const Aside = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  width: 100%;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const AsideContainer = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: 0 0.5em 1em -0.125em rgba(108, 68, 162, 0.3), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  :hover {
    box-shadow: 0 2px 4px #6c44a2;
  }
  :nth-child(1)  {
    box-shadow: 0 2px 4px #6c44a2;
  }
  :nth-child(2) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(1, 1fr);
  }
`;

const AsideTitle = styled.h1`
  margin-top: 3rem;
  text-align: center;
  text-transform: uppercase;
  color: #6c44a2;
`;

const Photo = styled.img`
  display: block;
  padding: 3rem 3rem;
  width: 70%;
  margin: 0 auto;
`;

const AboutBox = styled.div`
  padding-left: 3rem;
`;

const AboutBoxTitle = styled.h1`
  margin: 3rem 0;
  text-align: left;
  text-transform: uppercase;
  color: #6c44a2;
`;

const AboutBoxItem = styled.div`
  margin: 1rem 0;
  width: 100%;
`;

const SocialBox = styled.div`
  display: flexbox;
  width: 60px;
  height: 60px;
  margin: auto auto;
  cursor: pointer;
  :hover {
    background-color: #d8c6ee;
    border-radius: 28px;
  }
`;

const ContactBar = () => (
  <Wrapper>
    <Main>
      <MainContainer>
        <MainTitle>Kontakt z obsługą portalu</MainTitle>
        <MainSubTitle>Kontakt mailowy</MainSubTitle>
        <ThirdTitle>
          Jeżeli nie znalazłeś tutaj odpowiedzi na swoje pytanie to skontaktuj się z nami.
        </ThirdTitle>
        <MainForm>
          <ContactForm />
        </MainForm>
      </MainContainer>
    </Main>
    <Aside>
      <AsideContainer>
        <AsideTitle>Ślub z Klasą</AsideTitle>
        <Photo src={LogoPage} alt="Logo Page" />
      </AsideContainer>
      <AsideContainer>
        <AboutBox>
          <AboutBoxTitle>Kontakt do nas</AboutBoxTitle>
          <AboutBoxItem>
            <FaRegUser style={{ fontSize: 20, marginRight: 10 }} /> ATOM
          </AboutBoxItem>
          <AboutBoxItem>
            <FaPhone style={{ fontSize: 20, marginRight: 10 }} />
            +48 123 456 789
          </AboutBoxItem>
          <AboutBoxItem>
            <FaHome style={{ fontSize: 20, marginRight: 10 }} /> Lidzbark Warmiński
          </AboutBoxItem>
          <AboutBoxItem>
            <FaEnvelope style={{ fontSize: 20, marginRight: 10 }} /> tomaszkolodziejczyk@wp.pl
          </AboutBoxItem>
        </AboutBox>
        <SocialBox>
          <FaFacebook style={{ fontSize: 60 }} />
        </SocialBox>
      </AsideContainer>
    </Aside>
  </Wrapper>
);

export default ContactBar;
