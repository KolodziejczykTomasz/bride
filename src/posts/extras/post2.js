import React from 'react';
import NavbarTop from 'components/NavbarTop';
import JumbotronBar from 'components/JumbotronBar';
import Footer from 'components/Footer';

import pic1 from 'assets/images/post/2/pic1.png';
import pic2 from 'assets/images/post/2/pic2.png';
import pic3 from 'assets/images/post/2/pic3.png';
import pic4 from 'assets/images/post/2/pic4.png';

const post2 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <h1>4 najczęściej wybierane atrakcje</h1>
    <p>
      Każdy z nas pamięta czasy kiedy jedyną w większych atrakcji na weselu był tort. Jego
      dekoracja, wysokość oraz sposób prezentacji wzbudzał ciekawość przybyłych na uroczystość
      gości. Po torcie, pora przyszła na pokazy sztucznych ogni. Teraz pary młode mają do wyboru
      kilkanaście propozycji gotowych atrakcji weselnych.
    </p>  
    <h2>1. Taniec w chmurach</h2>
    <p>
      Efekt ciężkiego dymu, wykorzystywanego do ozdobienia pierwszego tańca Młodej Pary. Choć
      maszyny do ciężkiego dymu znane są od wielu lat, to dopiero od niedawna zaczęto produkować w
      korzystnej cenie urządzenia wytwarzające w krótkim czasie ogromną ilość ciężkiego dymu,
      wystarczającego na pokrycie sali na 150 osób przez co najmniej 3 – 4 minuty. Do wytworzenia
      ciężkiego dymu maszyna wyposażona została w grzałki, które podgrzewają odpowiednią ilość wody,
      do ustalonej temperatury, następnie wsypuje się do niej suchy lód i rozpoczyna wspaniały
      spektakl “tańca w chmurach” z udziałem Młodej Pary.
    </p>
    <p>
      Ile kosztuje taniec w chmurach ? . Cena uzależniona jest od wielkości maszyny ( ilość
      potrzebnego suchego lodu), którą dobiera się do wielkości parkietu oraz długości pierwszego
      tańca. Ceny oscylują w granicach od 350 do 650 zł. Dobrej jakości efekt uzyskuje się przy
      kwocie 400 zł.
    </p>
    <h2>2. Foto-budka. </h2>
    <p>
      Wykonuje zdjęcia oraz w przeciągu 15 sekund drukuje je na wysokiej klasy drukarce
      termosublimacyjnej. Sama fotobudka to jeszcze nie wszystko, rozmaite gadżety pozwolą
      uczestnikom zabawy wcielić się na chwilę w inną postać, oddać się spontanicznej zabawie i
      przekonają do zdjęcia nawet najzagorzalszych przeciwników obiektywu.
    </p>
    <p>
      Ile kosztuje? Cena zaczyna się już od 450zł. Koszt wynajęcia może zostać powiększony o koszt
      dostarczenia urządzenia na przyjęcie.
    </p>
    <h2>3. Podświetlane napisy</h2>
    <p>
      Podświetlany napis LOVE czy MIŁÓŚĆ to nietuzinkowa ozdoba. Jeśli pragniesz aby ten dzień
      stałdekoracjami, możesz wynająć gotowy napis. Sprawdzi się on zarówno na weselach, jak i
      sesjach plenerowych, ślubach cywilnych w plenerze lub innych imprezach okolicznościowych.
    </p>
    <p>
      Przykładowa wysokość napisu to 1,40m długość po rozstawieniu ok. 4m, głębokość liter ok 25 cm.
      podświetlany jest za pomocą żarówek led o mocy 5W, Koszt wynajęcia poza Kraśnikiem ustalany
      indywidualnie po konsultacji telefonicznej.
    </p>
    <p>Ile kosztuje? Ceny zaczynają się już od 150zł w zależności od lokalizacji przyjęcia.</p>
    <h2>4. Dekoracja światłem </h2>
    <p>
      Oświetlamy pomieszczenie nie tylko wewnątrz ale i na zewnątrz wybranymi przez parę młodą przez
      co dekoracja staje się elegancka a zarazem spektakularna.
    </p>
    <p>
      Do dekoracji używamy mocnych, wysokiej klasy urządzeń świecących w technologii LED dzięki
      czemu uzyskujemy żywe i realistyczne kolory i są widoczne nie tylko po zgaszeniu świateł na
      sali ale i przy pierwszym wejściu na nią co można zobaczyć na załączonych zdjęciach. Posiadamy
      jeden wariant dekoracji dzięki czemu nie rozbijamy ceny na 50 czy 200 gości a także nie mamy
      ograniczonej ilości świateł, które używamy.
    </p>

    <p>Ile kosztuje? Ceny zaczynają się od 350 a mogą wynieść nawet ponad 1500 zł</p>
    <img src={pic1} alt="foto" />
    <img src={pic2} alt="foto" />
    <img src={pic3} alt="foto" />
    <img src={pic4} alt="foto" />
    <Footer />
  </>
);

export default post2;
