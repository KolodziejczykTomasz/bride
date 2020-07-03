import React from 'react';
import NavbarTop from 'components/NavbarTop';
import JumbotronBar from 'components/JumbotronBar';
import Footer from 'components/Footer';

import PicDel from 'assets/images/post/1/ledbalon.png';
import gazhel from 'assets/images/post/1/gazhel.jpg';
import leditem from 'assets/images/post/1/leditem.png';
import leditem2 from 'assets/images/post/1/leditem2.png';
import picheart from 'assets/images/post/1/picheart.jpg';
import picled from 'assets/images/post/1/picled.jpg';

const post1 = () => (
  <>
    <NavbarTop />
    <JumbotronBar />

    <h1>Balonowe dekoracje</h1>
    <img src={PicDel} alt="pic hero" />
    <p>
      <p>
        Większość z was Jeśli uważa, że dekoracje sali weselnej do relikt przeszłości. I pewnie coś
        w tym jest, ale dekoracje tego typu przeżywają pewnego rodzaju swoje 5 minut. Ich największą
        zaletą jest cena i wybór kolorów. Dostępność gazu typu hel, przenosi dawne dekoracje w nowy
        wymiar. Gaz ten jest lżejszy od powietrza i powoduje unoszenie się balonów. Balony te stają
        się nośnikiem innych dekoracji np. liter czy serduszek.
      </p>
      <img src={picheart} alt="pic hero" />
      <img src={picled} alt="pic hero" />
      <p>A ile to kosztuje? </p>
      <p>
        Butlę jednorazową wypełnioną helem kupimy już za około 87zł. Ilość to pozwala na wypełnienie
        30 sztuk balonów. A jeżeli potrzebujemy tylko napełnić kilka balonów, to dobrą propozycją
        jest hel w puszce. Taka przyjemność kosztuje od 28zł i pozwala napełnić około 10 balonów.
      </p>
      <img src={gazhel} alt="pic hero" />
      <p>
        Od pewnego czasu dostępne są również balony oświetlane od wewnątrz diodami led. Diody te
        posiadają własne bateryjne zasilane, które wystarczy na co najmniej 12 godzin. Wraz ze
        zużywaniem baterii jasność led spada do zera. Za kwotę około 10 złotych kupimy 5 balonów z
        wkładem led w wybranym kolorze.
      </p>
      <p>
        Jeżeli nie znajdziemy podświetlanych balonów w danych kolorze, możemy posłużyć się samą
        wkładką led. W ten sposób stworzymy własne nie powtarzalne kompozycje.
      </p>
      <img src={leditem} alt="pic hero" />
      <img src={leditem2} alt="pic hero" />
      <p>Pamiętajmy jednak, że jak w przypadku każdej dekoracji zalecany jest umiar.</p>
    </p>
    <Footer />
  </>
);

export default post1;
