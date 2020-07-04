import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from 'theme/GlobalStyle';
import store from 'store';

import HomePage from 'views/HomePage';
import ContactPage from 'views/ContactPage';
import CompanyPage from 'views/CompanyPage';
import PreparePage from 'views/PreparePage';
import ChurchReadingsPage from 'views/ChurchReadingsPage';
import TravelPage from 'views/TravelPage';

import Post1 from 'data/posts/church/Post1';
import Post2 from 'data/posts/church/Post2';
import Post3 from 'data/posts/church/Post3';
import Post4 from 'data/posts/church/Post4';
import Post5 from 'data/posts/church/Post5';
import Post6 from 'data/posts/church/Post6';
import Post7 from 'data/posts/church/Post7';
import Post8 from 'data/posts/church/Post8';
import Post9 from 'data/posts/church/Post9';
import Post10 from 'data/posts/church/Post10';
import Post11 from 'data/posts/church/Post11';
import Post12 from 'data/posts/church/Post12';
import Post13 from 'data/posts/church/Post13';
import Post14 from 'data/posts/church/Post14';
import Post15 from 'data/posts/church/Post15';
import Post16 from 'data/posts/church/Post16';
import Post17 from 'data/posts/church/Post17';
import Post18 from 'data/posts/church/Post18';
import Post19 from 'data/posts/church/Post19';
import Post20 from 'data/posts/church/Post20';
import Post21 from 'data/posts/church/Post21';
import Post22 from 'data/posts/church/Post22';
import Post23 from 'data/posts/church/Post23';
import Post24 from 'data/posts/church/Post24';
import Post25 from 'data/posts/church/Post25';
import Post26 from 'data/posts/church/Post26';
import Post27 from 'data/posts/church/Post27';
import Post28 from 'data/posts/church/Post28';





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
          <Route path="/travel" component={TravelPage} />
          <Route exact path="/church" component={ChurchReadingsPage} />
          <Route exact path="/church/post1" component={Post1} />
          <Route exact path="/church/post2" component={Post2} />
          <Route exact path="/church/post3" component={Post3} />
          <Route exact path="/church/post4" component={Post4} />
          <Route exact path="/church/post5" component={Post5} />
          <Route exact path="/church/post6" component={Post6} />
          <Route exact path="/church/post7" component={Post7} />
          <Route exact path="/church/post8" component={Post8} />
          <Route exact path="/church/post9" component={Post9} />
          <Route exact path="/church/post10" component={Post10} />
          <Route exact path="/church/post11" component={Post11} />
          <Route exact path="/church/post12" component={Post12} />
          <Route exact path="/church/post13" component={Post13} />
          <Route exact path="/church/post14" component={Post14} />
          <Route exact path="/church/post15" component={Post15} />
          <Route exact path="/church/post16" component={Post16} />
          <Route exact path="/church/post17" component={Post17} />
          <Route exact path="/church/post18" component={Post18} />
          <Route exact path="/church/post19" component={Post19} />
          <Route exact path="/church/post20" component={Post20} />
          <Route exact path="/church/post21" component={Post21} />
          <Route exact path="/church/post22" component={Post22} />
          <Route exact path="/church/post23" component={Post23} />
          <Route exact path="/church/post24" component={Post24} />
          <Route exact path="/church/post25" component={Post25} />
          <Route exact path="/church/post26" component={Post26} />
          <Route exact path="/church/post27" component={Post27} />
          <Route exact path="/church/post28" component={Post28} />      

         
     

        
        
        </Switch>
      </BrowserRouter>
    </Provider>
  </>
);

export default Root;
