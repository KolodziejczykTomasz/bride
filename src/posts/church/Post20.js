import React from 'react';
import PostFooter from '../../components/PostFooter';
import PostTitle from '../../components/PostTitle';
import PostSubtitle from '../../components/PostSubtitle';
import PostParagraph from '../../components/PostParagraph';
import NavbarTop from '../../components/NavbarTop';
import Footer from '../../components/Footer';
import JumbotronBar from '../../components/JumbotronBar';


const Post20 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />

    <PostTitle>Sól ziemi</PostTitle>
    <PostSubtitle>Mt 5, 13-16</PostSubtitle>

    <PostParagraph>
      <PostParagraph>Słowa Ewangelii według świętego Mateusza</PostParagraph>Jezus powiedział do
      swoich uczniów: „Wy jesteście solą ziemi. Lecz jeśli sól utraci swój smak, czymże ją posolić?
      Na nic się już nie przyda, chyba na wyrzucenie i podeptanie przez ludzi. Wy jesteście światłem
      świata. Nie może się ukryć miasto położone na górze. Nie zapala się też światła i nie stawia
      pod korcem, ale na świeczniku, aby świeciło wszystkim, którzy są w domu. Tak niech świeci
      wasze światło przed ludźmi, aby widzieli wasze dobre uczynki i chwalili Ojca waszego, który
      jest w niebie”.
    </PostParagraph>

    <PostFooter>Oto słowo Pańskie.</PostFooter>
    <Footer />
  </>
);

export default Post20;
