import React from 'react';
import PostFooter from '../../components/PostFooter';
import PostTitle from '../../components/PostTitle';
import PostSubtitle from '../../components/PostSubtitle';
import PostParagraph from '../../components/PostParagraph';
import NavbarTop from '../../components/NavbarTop';
import Footer from '../../components/Footer';
import JumbotronBar from '../../components/JumbotronBar';

const Post22 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <PostTitle>Nierozerwalność małżeństwa</PostTitle>
    <PostSubtitle>Mt 19, 3-6</PostSubtitle>
    <PostParagraph>
      <PostParagraph>Słowa Ewangelii według świętego Mateusza</PostParagraph>
      <PostParagraph>
        Faryzeusze przystąpili do Jezusa, chcąc Go wystawić na próbę, i zadali Mu pytanie: „Czy
        wolno oddalić swoją żonę z jakiegokolwiek powodu?”
      </PostParagraph>
      <PostParagraph>    
        On odpowiedział: „Czy nie czytaliście, że Stwórca od początku stworzył ich jako mężczyznę i
        kobietę? I rzekł: Dlatego opuści człowiek ojca i matkę i złączy się ze swoją żoną, i będą
        dwoje jednym ciałem. A tak już nie są dwoje, lecz jedno ciało.
      </PostParagraph>
      <PostParagraph>Co więc Bóg złączył, niech człowiek nie rozdziela”.</PostParagraph>
    </PostParagraph>
    <PostFooter>Oto słowo Pańskie.</PostFooter>
    <Footer />
  </>
);

export default Post22;
