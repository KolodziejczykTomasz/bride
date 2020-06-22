import React from 'react';
import PostFooter from '../../components/PostFooter';
import PostTitle from '../../components/PostTitle';
import PostSubtitle from '../../components/PostSubtitle';
import PostParagraph from '../../components/PostParagraph';
import NavbarTop from '../../components/NavbarTop';
import Footer from '../../components/Footer';
import JumbotronBar from '../../components/JumbotronBar';


const Post24 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />

    <PostTitle>Jedność małżonków</PostTitle>
    <PostSubtitle>Mk 10, 6-9</PostSubtitle>

    <PostParagraph>
      <PostParagraph>Słowa Ewangelii według świętego Marka</PostParagraph>Jezus powiedział do swoich
      uczniów: „Na początku stworzenia Bóg stworzył ludzi jako mężczyznę i kobietę: dlatego opuści
      człowiek ojca swego i matkę i złączy się ze swoją żoną, i będą oboje jednym ciałem. A tak już
      nie są dwoje, lecz jedno ciało. Co więc Bóg złączył, tego człowiek niech nie rozdziela”.
    </PostParagraph>

    <PostFooter>Oto słowo Pańskie.</PostFooter>
    <Footer />
  </>
);

export default Post24;
