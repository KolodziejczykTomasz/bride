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
import TravelView from 'views/TravelView';
import DetailsView from 'views/DetailsView';




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
          <Route path="/brides/:id" component={DetailsView} />

          <Route exact path="/extras" component={HomeView} />
          <Route path="/extras/:id" component={DetailsView} />
          
          <Route exact path="/churchs" component={ChurchView} />
          <Route exact path="/churchs/:id" component={DetailsView} />
          
        </Switch>
      </BrowserRouter>
    </Provider>
  </>
);

export default Root;
