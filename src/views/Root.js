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
import Post1 from '../posts/church/Post1';
import Post2 from '../posts/church/Post2';
import Post3 from '../posts/church/Post3';
import Post4 from '../posts/church/Post4';
import Post5 from '../posts/church/Post5';
import Post6 from '../posts/church/Post6';
import Post7 from '../posts/church/Post7';
import Post8 from '../posts/church/Post8';
import Post9 from '../posts/church/Post9';
import Post10 from '../posts/church/Post10';
import Post11 from '../posts/church/Post11';
import Post12 from '../posts/church/Post12';
import Post13 from '../posts/church/Post13';
import Post14 from '../posts/church/Post14';
import Post15 from '../posts/church/Post15';
import Post16 from '../posts/church/Post16';
import Post17 from '../posts/church/Post17';
import Post18 from '../posts/church/Post18';
import Post19 from '../posts/church/Post19';
import Post20 from '../posts/church/Post20';
import Post21 from '../posts/church/Post21';
import Post22 from '../posts/church/Post22';
import Post23 from '../posts/church/Post23';
import Post24 from '../posts/church/Post24';
import Post25 from '../posts/church/Post25';
import Post26 from '../posts/church/Post26';
import Post27 from '../posts/church/Post27';
import Post28 from '../posts/church/Post28';

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
          <Route exact path="/church" component={ChurchReadingsPage} />
          <Route path="/church/post1" component={Post1} />
          <Route path="/church/post2" component={Post2} />
          <Route path="/church/post3" component={Post3} />
          <Route path="/church/post4" component={Post4} />
          <Route path="/church/post5" component={Post5} />
          <Route path="/church/post6" component={Post6} />
          <Route path="/church/post7" component={Post7} />
          <Route path="/church/post8" component={Post8} />
          <Route path="/church/post9" component={Post9} />
          <Route path="/church/post10" component={Post10} />
          <Route path="/church/post11" component={Post11} />
          <Route path="/church/post12" component={Post12} />
          <Route path="/church/post13" component={Post13} />
          <Route path="/church/post14" component={Post14} />
          <Route path="/church/post15" component={Post15} />
          <Route path="/church/post16" component={Post16} />
          <Route path="/church/post17" component={Post17} />
          <Route path="/church/post18" component={Post18} />
          <Route path="/church/post19" component={Post19} />
          <Route path="/church/post20" component={Post20} />
          <Route path="/church/post21" component={Post21} />
          <Route path="/church/post22" component={Post22} />
          <Route path="/church/post23" component={Post23} />
          <Route path="/church/post24" component={Post24} />
          <Route path="/church/post25" component={Post25} />
          <Route path="/church/post26" component={Post26} />
          <Route path="/church/post27" component={Post27} />
          <Route path="/church/post28" component={Post28} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </>
);

export default Root;
