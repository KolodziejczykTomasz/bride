import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from '../theme/GlobalStyle';
import HomePage from '../views/HomePage';
import ContactPage from './ContactPage';
import CompanyPage from './CompanyPage';
import PreparePage from './PreparePage';
import store from '../store';
import { Provider } from 'react-redux';
import ChurchReadingsPage from './ChurchReadingsPage';

const Root = () => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/prepare" component={PreparePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/company" component={CompanyPage} />
          <Route path="/church" component={ChurchReadingsPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </>
);

export default Root;
