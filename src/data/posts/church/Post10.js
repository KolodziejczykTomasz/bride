import React from 'react';
import PostFooter from 'components/PostFooter';
import PostTitle from 'components/PostTitle';
import PostSubtitle from 'components/PostSubtitle';
import PostParagraph from 'components/PostParagraph';
import NavbarTop from 'components/NavbarTop';
import Footer from 'components/Footer';
import JumbotronBar from 'components/JumbotronBar';

const Post10 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <PostTitle>Miłość Boża</PostTitle>
    <PostSubtitle>Rz 8, 31B-35. 37-39</PostSubtitle>
    <PostParagraph>
      <PostParagraph>Czytanie z Listu świętego Pawła Apostoła do Rzymian</PostParagraph>
      <PostParagraph>
        Bracia: Jeżeli Bóg z nami, któż przeciwko nam? On, który nawet własnego Syna nie oszczędził,
        ale Go za nas wszystkich wydał, jakże miałby wraz z Nim i wszystkiego nam nie darować? Któż
        może wystąpić z oskarżeniem przeciw tym, których Bóg wybrał? Czyż Bóg, który usprawiedliwia?
        Któż może wydać wyrok potępienia? Czy Chrystus Jezus, który poniósł za nas śmierć, co
        więcej: zmartwychwstał, siedzi po prawicy Boga i przyczynia się za nami?
      </PostParagraph>
      <PostParagraph>
        Któż nas może odłączyć od miłości Chrystusowej? Utrapienia, ucisk czy prześladowanie, głód
        czy nagość, niebezpieczeństwo czy miecz? Ale we wszystkim tym odnosimy pełne zwycięstwo
        dzięki temu, który nas umiłował.
      </PostParagraph>
      <PostParagraph>
        I jestem pewien, że ani śmierć, ani życie, ani aniołowie, ani zwierzchności, ani rzeczy
        teraźniejsze, ani przyszłe, ani potęgi, ani co wysokie, ani co głębokie, ani jakiekolwiek
        inne stworzenie nie zdoła nas odłączyć od miłości Boga, która jest w Chrystusie Jezusie,
        Panu naszym.
      </PostParagraph>
    </PostParagraph>
    <PostFooter>Oto słowo Boże.</PostFooter>
    <Footer />
  </>
);

export default Post10;
