import React from 'react';
import PostFooter from '../../components/PostFooter';
import PostTitle from '../../components/PostTitle';
import PostSubtitle from '../../components/PostSubtitle';
import PostParagraph from '../../components/PostParagraph';
import NavbarTop from '../../components/NavbarTop';
import Footer from '../../components/Footer';
import JumbotronBar from '../../components/JumbotronBar';

const Post21 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <PostTitle>Trwałość małżeństwa</PostTitle>
    <PostSubtitle>Mt 7,21 24-29</PostSubtitle>
    <PostParagraph>
      <PostParagraph>Słowa Ewangelii według świętego Mateusza</PostParagraph>
      <PostParagraph>
        Jezus powiedział do swoich uczniów: „Nie każdy, który Mi mówi: „Panie, Panie”, wejdzie do
        królestwa niebieskiego, lecz ten, kto spełnia wolę mojego Ojca, który jest W niebie.
      </PostParagraph>
      <PostParagraph>     
        Każdego więc, kto tych słów moich słucha i wypełnia je, można porównać z człowiekiem
        roztropnym, który dom swój zbudował na skale. Spadł deszcz, wezbrały potoki, zerwały się
        wichry i uderzyły w ten dom. On jednak nie runął, bo na skale był utwierdzony. Każdego zaś,
        kto tych słów moich słucha, a nie wypełnia ich, można porównać z człowiekiem nierozsądnym,
        który dom swój zbudował na piasku. Spadł deszcz, wezbrały potoki, zerwały się wichry i
        rzuciły się na ten dom. I runął, a wielki był jego upadek”.
      </PostParagraph>
      <PostParagraph>
        Gdy Jezus dokończył tych mów, tłumy zdumiewały się Jego nauką. Uczył ich bowiem jak ten,
        który ma władzę, a nie jak ich uczeni w Piśmie.
      </PostParagraph>
    </PostParagraph>
    <PostFooter>Oto słowo Pańskie.</PostFooter>
    <Footer />
  </>
);

export default Post21;
