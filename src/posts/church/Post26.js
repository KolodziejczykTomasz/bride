import React from 'react';
import PostFooter from '../../components/PostFooter';
import PostTitle from '../../components/PostTitle';
import PostSubtitle from '../../components/PostSubtitle';
import PostParagraph from '../../components/PostParagraph';
import NavbarTop from '../../components/NavbarTop';
import Footer from '../../components/Footer';
import JumbotronBar from '../../components/JumbotronBar';


const Post26 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />

    <PostTitle>Miłość Chrystusowa</PostTitle>
    <PostSubtitle>J 15, 9-12</PostSubtitle>

    <PostParagraph>
      <PostParagraph>Słowa Ewangelii według świętego Jana</PostParagraph> W czasie ostatniej
      wieczerzy Jezus powiedział do swoich uczniów: „Jak Mnie umiłował Ojciec, tak i Ja was
      umiłowałem. Wytrwajcie w miłości mojej. Jeśli będziecie zachowywać moje przykazania, będziecie
      trwać w miłości mojej, tak jak Ja zachowałem przykazania Ojca mego i trwam w Jego miłości. To
      wam powiedziałem, aby radość moja w was była i aby radość wasza była pełna. To jest moje
      przykazanie, abyście się wzajemnie miłowali, tak jak Ja was umiłowałem”.
    </PostParagraph>

    <PostFooter>Oto słowo Pańskie.</PostFooter>
    <Footer />
  </>
);

export default Post26;
