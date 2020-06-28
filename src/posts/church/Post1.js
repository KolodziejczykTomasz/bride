import React from 'react';
import PostFooter from 'components/PostFooter';
import PostTitle from 'components/PostTitle';
import PostSubtitle from 'components/PostSubtitle';
import PostParagraph from 'components/PostParagraph';
import NavbarTop from 'components/NavbarTop';
import Footer from 'components/Footer';
import JumbotronBar from 'components/JumbotronBar';

const Post1 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <PostTitle>Stworzenie mężczyzny i niewiasty</PostTitle>
    <PostSubtitle>Rdz 1,26-28.31</PostSubtitle>
    <PostParagraph>
      <PostParagraph> A Czytanie z Księgi Rodzaju </PostParagraph>
      <PostParagraph>
        Bóg rzekł: „Uczyńmy człowieka na Nasz obraz, podobnego Nam. Niech panuje nad rybami
        morskimi, nad ptactwem powietrznym, nad bydłem, nad całą ziemią i nad wszelkim zwierzęciem
        pełzającym po ziemi”.
      </PostParagraph>
      <PostParagraph>
        Stworzył więc Bóg człowieka na swój obraz, na obraz Boży go stworzył: stworzył mężczyznę i
        niewiastę.
      </PostParagraph>
      <PostParagraph>
        Po czym Bóg im błogosławił, mówiąc do nich: "Bądźcie płodni i rozmnażajcie się, abyście
        zaludnili ziemię i uczynili ją sobie poddaną, abyście panowali nad rybami morskimi, nad
        ptactwem powietrznym i nad wszystką istotą żywą, która chodzi po ziemi".
      </PostParagraph>

      <PostParagraph> A Bóg widział, że wszystko, co uczynił, było bardzo dobre. </PostParagraph>
    </PostParagraph>
    <PostFooter>Oto słowo Boże.</PostFooter>
    <Footer />
  </>
);

export default Post1;
