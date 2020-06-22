import React from 'react';
import PostFooter from '../../components/PostFooter';
import PostTitle from '../../components/PostTitle';
import PostSubtitle from '../../components/PostSubtitle';
import PostParagraph from '../../components/PostParagraph';
import NavbarTop from '../../components/NavbarTop';
import Footer from '../../components/Footer';
import JumbotronBar from '../../components/JumbotronBar';

const Post5 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <PostTitle>Modlitwa Tobiasza i Sary</PostTitle>
    <PostSubtitle>Tb 8, 5-10 (WLG)</PostSubtitle>
    <PostParagraph>
      <PostParagraph>Czytanie z Księgi Tobiasza</PostParagraph>
      <PostParagraph>
        Po uroczystościach weselnych Tobiasz rzekł do Sary: „Jesteśmy synami świętych i nie możemy
        tak się łączyć jak narody, które nie znają Boga”. I wstawszy pilnie się oboje razem modlili,
        aby dostąpić ocalenia.
      </PostParagraph>
      <PostParagraph>
        Rzekł Tobiasz: „Panie, Boże ojców naszych, niech Cię błogosławią niebiosa i ziemia, morze,
        źródła, rzeki i wszystkie stworzenia Twoje, które w nich są. Tyś stworzył Adama z mułu ziemi
        i dałeś mu na pomoc Ewę.
      </PostParagraph>
      <PostParagraph>
        A teraz, Panie, Ty wiesz, że nie dla namiętności biorę siostrę moją za żonę, ale tylko dla
        miłości potomstwa, w którym by było błogosławione imię Twoje na wieki wieków”.
      </PostParagraph>
      <PostParagraph>
        Sara też mówiła: „Zmiłuj się nad nami i niech się oboje wespół zestarzejemy w zdrowiu”.
      </PostParagraph>
    </PostParagraph>
    <PostFooter>Oto słowo Boże.</PostFooter>
    <Footer />
  </>
);

export default Post5;
