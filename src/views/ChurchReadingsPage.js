import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post1">
            Stworzenie mężczyzny i niewiasty
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post2">
            Stworzenie kobiety
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post3">
            Rebeka
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post4">
            Czytanie z Księgi Tobiasza
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post5">
            Modlitwa Tobiasza i Sary
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post6">
            Pieśń na pieśniami
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post7">
            Dobra żona
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post8">
            Przymierze
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post9">
            Gody Baranka
          </NavLink>
        </MainItemText>
      </MainItem>
    </MainWarpper>
    <HeaderBreake>Drugie czytanie</HeaderBreake>
    <MainWarpper>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post10">
            Miłość Boża
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post11">
            Życie chrześcijanina
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post12">
            Ciało człowieka
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post13">
            Hymn do miłości
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post14">
            Miłość małżeńska
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post15">
            Droga małżonków do świętości
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post16">
            Nauki do żony i męża
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post17">
            Życie według przykazań
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post18">
            Bóg nas umiłował
          </NavLink>
        </MainItemText>
      </MainItem>
    </MainWarpper>
    <HeaderBreake>Ewangelie</HeaderBreake>
    <MainWarpper>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post19">
            8 Błogosławieństw
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post20">
            Sól ziemi
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post21">
            Trwałość małżeństwa
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post22">
            Nierozerwalność małżeństwa
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post23">
            Największe przykazanie
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post24">
            Jedność małżonków
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post25">
            Wesele w Kanie Galilejskiej
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post26">
            Miłość Chrystusowa
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post27">
            Przykazanie miłości
          </NavLink>
        </MainItemText>
      </MainItem>
      <MainItem>
        <MainItemText>
          <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/church/post28">
            Zjednoczenie małżonków
          </NavLink>
        </MainItemText>
      </MainItem>
    </MainWarpper>
    <Footer />
  </>
);

export default ChurchReadingsPage;
