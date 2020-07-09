import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from 'theme/GlobalStyle';
import store from 'store';

import HomeView from 'views/HomeView';
import ContactView from 'views/ContactView';
import CompanyView from 'views/CompanyView';
import PrepareView from 'views/PrepareView';
import ChurchView from 'views/ChurchView';
import DetailsChurchView from 'views/DetailsChurchView';
import TravelView from 'views/TravelView';
import DetailsMainView from 'views/DetailsMainView';
import DetailsPressView from 'views/DetailsPressView';
import DetailsAccesoriesView from 'views/DetailsAccesoriesView';

const Root = () => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/prepare" component={PrepareView} />
          <Route path="/contact" component={ContactView} />
          <Route path="/company" component={CompanyView} />
          <Route path="/travel" component={TravelView} />

          <Route exact path="/brides" component={HomeView} />
          <Route path="/brides/:id" component={DetailsMainView} />

          <Route exact path="/extras" component={HomeView} />
          <Route path="/extras/:id" component={DetailsMainView} />

          <Route exact path="/accesories" component={HomeView} />
          <Route path="/accesories/:id" component={DetailsAccesoriesView} />

          <Route exact path="/churchs" component={ChurchView} />
          <Route exact path="/churchs/:id" component={DetailsChurchView} />

          <Route exact path="/mlodapara/:id" component={DetailsPressView} />
          <Route exact path="/pannamloda/:id" component={DetailsPressView} />
          <Route exact path="/uroczystosc/:id" component={DetailsPressView} />
          <Route exact path="/wedding/:id" component={DetailsPressView} />
          <Route exact path="/omsvadba/:id" component={DetailsPressView} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </>
);

export default Root;
