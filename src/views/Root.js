import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from '../theme/GlobalStyle';
import HomePage from '../views/HomePage';
import ContactPage from './ContactPage';
import CompanyPage from './CompanyPage';
import PreparePage from './PreparePage';


const Root = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/prepare" component={PreparePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/company" component={CompanyPage} />
    </Switch>
  </BrowserRouter>
);

export default Root;
