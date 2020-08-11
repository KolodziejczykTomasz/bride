import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from 'theme/GlobalStyle';
import store from 'store';

import HomeView from 'views/HomeView';
import ContactView from 'views/ContactView';
import DetailsCompanyView from 'views/DetailsCompanyView';
import CompanyView from 'views/CompanyView';
import PrepareView from 'views/PrepareView';
import ChurchView from 'views/ChurchView';
import DetailsChurchView from 'views/DetailsChurchView';
import TravelView from 'views/TravelView';
import DetailsMainView from 'views/DetailsMainView';
import DetailsPressView from 'views/DetailsPressView';
import DetailsAccesoriesView from 'views/DetailsAccesoriesView';
import DetailsFairView from 'views/DetailsFairView';
import DetailsTravelView from 'views/DetailsTravelView';
import DetailsDressView from 'views/DetailsDressView';
import FairView from 'views/FairView';
import PressView from 'views/PressView';

const Root = () => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/prepare" component={PrepareView} />
          <Route path="/contact" component={ContactView} />

          <Route exact path="/travels" component={TravelView} />
          <Route path="/travels/pleace/:id" component={DetailsTravelView} />
          <Route exact path="/brides" component={HomeView} />
          <Route path="/brides/:id" component={DetailsMainView} />
          <Route exact path="/extras" component={HomeView} />
          <Route path="/extras/:id" component={DetailsMainView} />
          <Route exact path="/accesories" component={HomeView} />
          <Route path="/accesories/:id" component={DetailsAccesoriesView} />
          <Route exact path="/churchs" component={ChurchView} />
          <Route path="/churchs/:id" component={DetailsChurchView} />
          <Route path="/presses/:id" component={DetailsPressView} />
          <Route path="/presses" component={DetailsPressView} />
          <Route path="/presslist" component={PressView} />
          <Route exact path="/fairs" component={FairView} />
          <Route exact path="/fairs/:id" component={DetailsFairView} />
          <Route exact path="/fairlist" component={FairView} />
          <Route exact path="/companies/:id" component={DetailsCompanyView} />
          <Route exact path="/companies" component={CompanyView} />
          <Route path="/company" component={CompanyView} />          
          <Route exact path="/dresses" component={HomeView} />
          <Route path="/dresses/:id" component={DetailsDressView} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </>
);

export default Root;