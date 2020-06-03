import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from '../theme/GlobalStyle';
import HomePage from '../views/HomePage';


const Root = () => (
  <BrowserRouter>
    <GlobalStyle />
      <Switch>
        <Route exact path="/" component={HomePage} />       
      </Switch>

  </BrowserRouter>
);

export default Root;
