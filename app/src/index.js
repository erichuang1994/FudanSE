import React from 'react';
import News from './News';
import ReactDOM from 'react-dom';
import App from './App';
import PagePersonalPage from './PagePersonalPage'
import {newsdata} from './newsdata';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import Profile from './Profile'

var personal = [newsdata[2]];

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/news" />
      <Route path="/news" component={()=><News data={newsdata}/>} data={newsdata}/>
      <Route path="/personal" component={PagePersonalPage} data={personal}/>
      <Route path="/profile" component={Profile}/>
    </Route>
  </Router>,
	document.getElementById('root')
);
