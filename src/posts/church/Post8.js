import React from 'react';
import PostFooter from 'components/PostFooter';
import PostTitle from 'components/PostTitle';
import PostSubtitle from 'components/PostSubtitle';
import PostParagraph from 'components/PostParagraph';
import NavbarTop from 'components/NavbarTop';
import Footer from 'components/Footer';
import JumbotronBar from 'components/JumbotronBar';

const Post8 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <PostTitle>Przymierze</PostTitle>
    <PostSubtitle>Jr 31, 31-32A, 33-34A</PostSubtitle>
    <PostParagraph>
      <PostParagraph>Czytanie z Księgi Proroka Jeremiasza</PostParagraph>
      <PostParagraph>Pan mówi: </PostParagraph>
      <PostParagraph>
        Oto nadchodzą dni, kiedy zawrę z domem Izraela i z domem judzkim nowe przymierze. Nie jak
        przymierze, które zawierałem z ich przodkami, kiedy ująłem ich za rękę, by wyprowadzić z
        ziemi egipskiej.
      </PostParagraph>
      <PostParagraph>
        Lecz takie będzie przymierze, jakie zawrę z domem Izraela po tych dniach, mówi Pan.
        Umieszczę swe prawo w głębi ich jestestwa, wypiszę na ich sercu. Będę im Bogiem, oni zaś
        będą Mi narodem.
      </PostParagraph>
      <PostParagraph>
        I nie będą się musieli wzajemnie pouczać jeden mówiąc do drugiego: „Poznajcie Pana!” Wszyscy
        bowiem, od najmniejszego do największego, poznają Mnie.
      </PostParagraph>
    </PostParagraph>
    <PostFooter>Oto słowo Boże.</PostFooter>
    <Footer />
  </>
);

export default Post8;
