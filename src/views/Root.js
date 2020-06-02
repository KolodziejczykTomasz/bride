import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import HomePage from '../views/HomePage';


const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={HomePage} />     
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
