import React from 'react';
import PostFooter from '../../components/PostFooter';
import PostTitle from '../../components/PostTitle';
import PostSubtitle from '../../components/PostSubtitle';
import PostParagraph from '../../components/PostParagraph';
import NavbarTop from '../../components/NavbarTop';
import Footer from '../../components/Footer';
import JumbotronBar from '../../components/JumbotronBar';

const Post27 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />

    <PostTitle>Przykazanie miłości</PostTitle>
    <PostSubtitle>J 15, 12-16</PostSubtitle>

    <PostParagraph>
      <PostParagraph>Słowa Ewangelii według świętego Jana</PostParagraph>

      <PostParagraph>
        W czasie ostatniej wieczerzy Jezus powiedział do swoich uczniów: „To jest moje przykazanie,
        abyście się wzajemnie miłowali, tak jak Ja was umiłowałem. Nikt nie ma większej miłości od
        tej, gdy ktoś życie swoje oddaje za przyjaciół swoich. Wy jesteście przyjaciółmi moimi,
        jeżeli czynicie to, co wam przykazuję.
      </PostParagraph>

      <PostParagraph>
        Już was nie nazywam sługami, bo sługa nie wie, co czyni pan jego, ale nazwałem was
        przyjaciółmi, albowiem oznajmiłem wam wszystko, co usłyszałem od Ojca mego. Nie wyście Mnie
        wybrali, ale Ja was wybrałem i przeznaczyłem was na to, abyście szli i owoc przynosili i by
        owoc wasz trwał, aby wszystko dał wam Ojciec, o cokolwiek Go prosicie w imię moje”.
      </PostParagraph>
    </PostParagraph>

    <PostFooter>Oto słowo Pańskie.</PostFooter>
    <Footer />
  </>
);

export default Post27;
