import React from 'react';
import NavbarTop from '../components/NavbarTop';
import JumbotronBar from '../components/JumbotronBar';
import HeaderBreake from '../components/HeaderBreake';
import Footer from '../components/Footer';
import styled from 'styled-components';

const MainWarpper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

const MainItem = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  width: 90%;
  margin: 1rem 0 1rem 0;
  border: 1px solid grey;
  height: 6rem;
  cursor: pointer;
`;

const MainItemText = styled.span`
display: block;
margin: auto auto;
`;


const ChurchReadingsPage = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <HeaderBreake>Pierwsze czytanie</HeaderBreake>
    <MainWarpper>
      <MainItem>
        <MainItemText>Stworzenie mężczyzny i niewiasty</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Stworzenie kobiety</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Rebeka</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Czytanie z Księgi Tobiasza</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Modlitwa Tobiasza i Sary</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Pieśń na pieśniami</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Dobra żona</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Przymierze</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Gody Baranka</MainItemText>
      </MainItem>
    </MainWarpper>
    <HeaderBreake>Drugie czytanie</HeaderBreake>
    <MainWarpper>
      <MainItem>
        <MainItemText>Miłość Boża</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Życie chrześcijanina</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Ciało człowieka</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Hymn do miłości</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Miłość małżeńska</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Droga małżonków do świętości</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Nauki do żony i męża</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Życie według przykazań</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Bóg nas umiłował</MainItemText>
      </MainItem>
    </MainWarpper>
    <HeaderBreake>Ewangelie</HeaderBreake>
    <MainWarpper>
      <MainItem>
        <MainItemText>8 Błogosławieństw</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Sól ziemi</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Trwałość małżeństwa</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Nierozerwalność małżeństwa</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Największe przykazanie</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Jedność małżonków</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Wesele w Kanie Galilejskiej</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Miłość Chrystusowa</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Przykazanie miłości</MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>Zjednoczenie małżonków</MainItemText>
      </MainItem>
    </MainWarpper>
    <Footer />
  </>
);

export default ChurchReadingsPage;
