import React from 'react';
import PostFooter from 'components/PostFooter';
import PostTitle from 'components/PostTitle';
import PostSubtitle from 'components/PostSubtitle';
import PostParagraph from 'components/PostParagraph';
import NavbarTop from 'components/NavbarTop';
import Footer from 'components/Footer';
import JumbotronBar from 'components/JumbotronBar';

const Post7 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <PostTitle>Dobra żona</PostTitle>
    <PostSubtitle>Syr 26, 1-4. 13-16</PostSubtitle>
    <PostParagraph>
      <PostParagraph>Czytanie z Księgi Syracydesa</PostParagraph>
      <PostParagraph>
        Szczęśliwy mąż, który ma dobrą żonę, liczba dni jego będzie podwójna. Dobra żona radować
        będzie męża, który osiągnie pełnię wieku w pokoju. Dobra żona, to dobra część dziedzictwa i
        jako taka będzie dodana tym, którzy się boją Pana.
      </PostParagraph>
      <PostParagraph>
        Wtedy to serce bogatego czy ubogiego będzie zadowolone i oblicze jego wesołe w każdym
        czasie. Wdzięk żony rozwesela jej męża, a mądrość jej orzeźwia jego kości. Dar Pana, żona
        spokojna i za osobę dobrze wychowaną nie znajdziesz nic na zamianę.
      </PostParagraph>
      <PostParagraph>
        Wdzięk nad wdziękami skromna kobieta i nie masz nic równego osobie powściągliwej. Jak słońce
        wschodzące na wysokościach Pana, tak piękność dobrej kobiety między ozdobami jej domu.
      </PostParagraph>
    </PostParagraph>
    <PostFooter>Oto słowo Boże.</PostFooter>
    <Footer />
  </>
);

export default Post7;
