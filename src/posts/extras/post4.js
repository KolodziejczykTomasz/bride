import React from 'react';
import NavbarTop from 'components/NavbarTop';
import JumbotronBar from 'components/JumbotronBar';
import Footer from 'components/Footer';

import pic1 from 'assets/images/post/4/fontanna.jpg';
import pic2 from 'assets/images/post/4/fontanna2.png';

const post4 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <h1>Fontanna na weselu?</h1>
    <p>
      Jedną z atrakcja, jaką możemy zaproponować swoim gościom weselnym jest fontanna. Dwa
      najczęściej rodzaje fontann to fontanna czekoladowa – coś dla dzieci oraz fontanna alkoholowa
      – coś dla dorosłych.
    </p>
    <p>
      Fontanna czekoladowa napełniany czekoladą. Pojemność urządzenia od 3 do nawet 6 kg. Koszt
      wynajmu zaczyna się od 200 w przypadku małych przyjęć. Natomiast za pakiet na wesele
      zawierający: Podświetlany postument – różne tryby kolorów Komplet talerzyków, patyczków,
      serwetek Stolik, dekorację Naczynia na owoce i przekąski Przygotowanie przekąsek zapłacimy od
      400 zł
    </p>
    <img src={pic1} alt="Fontanna" />
    <p>
      Koszt nowego urządzenie zaczyna się od 200zł w wersji na przyjęcia urodzinowe do nawet 7000zł
      za profesjonalną fontannę.
    </p>
    <p>
      Fontanna alkoholowa możemy napełnić najróżniejszymi napojami i drinkami zarówno alkoholowymi
      jak i bezalkoholowymi w zależności od upodobania.
    </p>
    <img src={pic2} alt="Fontanna" />
    <p>Koszt wynajmu 3 litrowa 120 zł oraz 6 litrowa 150 zł.</p>
    <Footer />
  </>
);

export default post4;
