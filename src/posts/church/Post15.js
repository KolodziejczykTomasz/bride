import React from 'react';
import PostFooter from 'components/PostFooter';
import PostTitle from 'components/PostTitle';
import PostSubtitle from 'components/PostSubtitle';
import PostParagraph from 'components/PostParagraph';
import NavbarTop from 'components/NavbarTop';
import Footer from 'components/Footer';
import JumbotronBar from 'components/JumbotronBar';

const Post15 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <PostTitle>Droga małżonków do świętości</PostTitle>
    <PostSubtitle>Kol 3 12-17</PostSubtitle>
    <PostParagraph>
      <PostParagraph>Czytanie z Listu świętego Pawła Apostoła do Kolosan</PostParagraph>
      <PostParagraph>
        Bracia: Jako wybrańcy Boży, święci i umiłowani, obleczcie się w serdeczne miłosierdzie,
        dobroć, pokorę, cichość, cierpliwość, znosząc jedni drugich i wybaczając sobie nawzajem,
        jeśliby miał ktoś zarzut przeciw drugiemu: jak Pan wybaczył wam, tak i wy.
      </PostParagraph>
      <PostParagraph>
        Na to zaś wszystko obleczcie się w miłość, która jest więzią doskonałości. A sercami waszymi
        niech rządzi pokój Chrystusowy, do którego też zostaliśmy wezwani, w jednym ciele. I bądźcie
        wdzięczni. Słowo Chrystusa niech w was przebywa z całym swym bogactwem: z wszelką mądrością
        nauczajcie i napominajcie samych siebie przez psalmy, hymny, pieśni pełne ducha, pod wpływem
        łaski śpiewając Bogu w waszych sercach.
      </PostParagraph>
      <PostParagraph>
        I wszystko, cokolwiek działacie słowem lub czynem, wszystko czyńcie w imię Pana Jezusa,       dziękując Bogu Ojcu przez Niego.
      </PostParagraph>
    </PostParagraph>
    <PostFooter>Oto słowo Boże.</PostFooter>
    <Footer />
  </>
);

export default Post15;
