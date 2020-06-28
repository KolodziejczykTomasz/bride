import React from 'react';
import PostFooter from 'components/PostFooter';
import PostTitle from 'components/PostTitle';
import PostSubtitle from 'components/PostSubtitle';
import PostParagraph from 'components/PostParagraph';
import NavbarTop from 'components/NavbarTop';
import Footer from 'components/Footer';
import JumbotronBar from 'components/JumbotronBar';

const Post25 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <PostTitle>Wesele w Kanie Galilejskiej</PostTitle>
    <PostSubtitle>J 2, 1-11</PostSubtitle>
    <PostParagraph>
      <PostParagraph>Słowa Ewangelii według świętego Jana</PostParagraph>W Kanie Galilejskiej
      odbywało się wesele i była tam matka Jezusa. Zaproszono na to wesele także Jezusa i Jego
      uczniów. A kiedy zabrakło wina, matka Jezusa mówi do Niego: „Nie mają już wina”.
      <PostParagraph>
        Jezus jej odpowiedział: „Czyż to moja lub twoja sprawa, niewiasto? Czyż jeszcze nie nadeszła
        moja godzina?”.
      </PostParagraph>
      <PostParagraph>
        Wtedy matka Jego powiedziała do sług: „Zróbcie wszystko, cokolwiek wam powie”. Stało zaś tam
        sześć stągwi kamiennych przeznaczonych do żydowskich oczyszczeń, z których każda mogła
        pomieścić dwie lub trzy miary.
      </PostParagraph>
      <PostParagraph> Rzekł do nich Jezus: „Napełnijcie stągwie wodę”.</PostParagraph>
      <PostParagraph>
        I napełnili je aż po brzegi. Potem do nich powiedział: „Zaczerpnijcie teraz i zanieście
        staroście weselnemu”. Oni zaś zanieśli. A gdy starosta weselny skosztował wody, która stała
        się winem — nie wiedział bowiem, skąd ono pochodzi, ale słudzy, którzy czerpali wodę,
        wiedzieli — przywołał pana młodego i powiedział do niego: „Każdy człowiek stawia najpierw
        dobre wino, a gdy się napiją, wówczas gorsze. Ty zachowałeś dobre wino aż do tej pory”.
      </PostParagraph>
      <PostParagraph>
        Taki to początek znaków uczynił Jezus w Kanie Galilejskiej. Objawił swoją chwałę i uwierzyli
        w Niego jego uczniowie.
      </PostParagraph>
    </PostParagraph>
    <PostFooter>Oto słowo Pańskie.</PostFooter>
    <Footer />
  </>
);

export default Post25;
