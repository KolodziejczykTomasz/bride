import React from 'react';
import PostFooter from '../../components/PostFooter';
import PostTitle from '../../components/PostTitle';
import PostSubtitle from '../../components/PostSubtitle';
import PostParagraph from '../../components/PostParagraph';
import NavbarTop from '../../components/NavbarTop';
import Footer from '../../components/Footer';
import JumbotronBar from '../../components/JumbotronBar';

const Post12 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <PostTitle>Ciało człowieka</PostTitle>
    <PostSubtitle>1 Kor 6, 13C-15A. 17-20</PostSubtitle>
    <PostParagraph>
      <PostParagraph>
        Czytanie z Pierwszego Listu świętego Pawła Apostoła do Koryntian
      </PostParagraph>
      <PostParagraph>
        Bracia: Ciało nie jest dla rozpusty, lecz dla Pana, a Pan dla ciała. Bóg zaś i Pana
        wskrzesił, i nas również swą mocą wskrzesi z martwych. Czyż nie wiecie, że ciała wasze są
        członkami Chrystusa? Ten zaś, kto się łączy z Panem, jest z Nim jednym duchem. Strzeżcie się
        rozpusty; wszelki grzech popełniony przez człowieka jest na zewnątrz ciała; kto zaś grzeszy
        rozpustą, przeciwko własnemu ciału grzeszy.
      </PostParagraph>
      <PostParagraph>
        Czyż nie wiecie, że ciało wasze jest przybytkiem Ducha Świętego, który w was jest, a którego
        macie od Boga, i że już nie należycie do samych siebie? Za wielką bowiem cenę zostaliście
        nabyci. Chwalcie więc Boga w waszym ciele!
      </PostParagraph>
    </PostParagraph>
    <PostFooter>Oto słowo Boże.</PostFooter>
    <Footer />
  </>
);

export default Post12;
