import React from 'react';
import PostFooter from 'components/PostFooter';
import PostTitle from 'components/PostTitle';
import PostSubtitle from 'components/PostSubtitle';
import PostParagraph from 'components/PostParagraph';
import NavbarTop from 'components/NavbarTop';
import Footer from 'components/Footer';
import JumbotronBar from 'components/JumbotronBar';

const Post9 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <PostTitle>Gody Baranka</PostTitle>
    <PostSubtitle>Ap 19, 1.5-9A</PostSubtitle>
    <PostParagraph>
      <PostParagraph>Czytanie z Księgi Apokalipsy świętego Jana Apostoła</PostParagraph>
      <PostParagraph>
        Ja, Jan, Usłyszałem jak gdyby donośny głos wielkiego tłumu wołającego w niebie: „Alleluja!
        Zbawienie i chwała, i moc należą do Boga naszego”.
      </PostParagraph>
      <PostParagraph>
        I wyszedł głos od tronu, mówiący: „Chwalcie naszego Boga, wszyscy Jego słudzy, którzy się Go
        boicie, mali i wielcy!”
      </PostParagraph>
      <PostParagraph>
        I usłyszałem jakby głos wielkiego tłumu i jakby głos mnogich wód, i jakby’ głos potężnych
        grzmotów, które mówiły: „Alleluja, bo zakrólował Pan Bóg nasz, Wszechmogący. Weselmy się i
        radujmy i dajmy Mu chwałę, bo nadeszły Gody Baranka, a Jego Małżonka się przystroiła, i dano
        jej oblec bisior lśniący i czysty”, bisior bowiem oznacza czyny sprawiedliwe świętych.
      </PostParagraph>
      <PostParagraph>
        I mówi mi: „Napisz: Błogosławieni, którzy są wezwani na ucztę Godów Baranka!”
      </PostParagraph>
    </PostParagraph>
    <PostFooter>Oto słowo Boże.</PostFooter>
    <Footer />
  </>
);

export default Post9;
