import React from 'react';
import PostFooter from 'components/PostFooter';
import PostTitle from 'components/PostTitle';
import PostSubtitle from 'components/PostSubtitle';
import PostParagraph from 'components/PostParagraph';
import NavbarTop from 'components/NavbarTop';
import Footer from 'components/Footer';
import JumbotronBar from 'components/JumbotronBar';


const Post23 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <PostTitle>Największe przykazanie</PostTitle>
    <PostSubtitle>Mt 22,35-40</PostSubtitle>
    <PostParagraph>
      <PostParagraph>Słowa Ewangelii według świętego Mateusza</PostParagraph>      
      <PostParagraph>Jeden z faryzeuszów, uczony w Prawie, zapytał Jezusa, wystawiając Go na próbę: „Nauczycielu, które przykazanie w
      Prawie jest największe?” On mu odpowiedział: „Będziesz miłował Pana Boga swego całym swoim
      sercem, całą swoją duszą i całym swoim umysłem. To jest największe i pierwsze przykazanie.</PostParagraph>      
      <PostParagraph>Drugie podobne jest do niego: Będziesz miłował swego bliźniego jak siebie samego. Na tych
      dwóch przykazaniach opiera się całe Prawo i Prorocy”.</PostParagraph>
    </PostParagraph>
    <PostFooter>Oto słowo Pańskie.</PostFooter>
    <Footer />
  </>
);

export default Post23;
