import React from 'react';
import PostFooter from 'components/PostFooter';
import PostTitle from 'components/PostTitle';
import PostSubtitle from 'components/PostSubtitle';
import PostParagraph from 'components/PostParagraph';
import NavbarTop from 'components/NavbarTop';
import Footer from 'components/Footer';
import JumbotronBar from 'components/JumbotronBar';

const Post2 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <PostTitle>Stworzenie kobiety</PostTitle>
    <PostSubtitle>Rdz 2, 18-24</PostSubtitle>
    <PostParagraph>
      <PostParagraph>Czytanie z Księgi Rodzaju </PostParagraph>
      <PostParagraph>
        Pan Bóg rzekł: „Nie jest dobrze, żeby mężczyzna był sam: uczynię mu zatem odpowiednią dla
        niego pomoc”.
      </PostParagraph>
      <PostParagraph>
        Ulepiwszy z gleby wszelkie zwierzęta ziemne i wszelkie ptaki powietrzne, Pan Bóg
        przyprowadził je do mężczyzny, aby przekonać się, jaką on da im nazwę. Każde jednak zwierzę,
        które określił mężczyzna, otrzymało nazwę "istota żywa". I tak mężczyzna dał nazwy
        wszelkiemu bydłu, ptakom powietrznym i wszelkiemu zwierzęciu polnemu, ale nie znalazła się
        pomoc odpowiednia dla mężczyzny. Wtedy to Pan sprawił, że mężczyzna pogrążył się w głębokim
        śnie, i gdy spał, wyjął jedno z jego żeber, a miejsce to zapełnił ciałem. Po czym Pan Bóg z
        żebra, które wyjął z mężczyzny, zbudował niewiastę. A gdy ją przyprowadził do mężczyzny,
        mężczyzna powiedział: „Ta dopiero jest kością z moich kości i ciałem z mego ciała! Ta będzie
        się zwała niewiastą, bo ta z mężczyzny została wzięta”. Dlatego to mężczyzna opuszcza ojca
        swego i matkę swoją i łączy się ze swą żoną tak ściśle, że stają się jednym ciałem.
      </PostParagraph>
    </PostParagraph>
    <PostFooter>Oto słowo Boże.</PostFooter>
    <Footer />
  </>
);

export default Post2;
