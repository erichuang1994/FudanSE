import React from 'react';
import News from './News';
import ReactDOM from 'react-dom';
import App from './App';
import PagePersonalPage from './PagePersonalPage'
import {newsdata} from './newsdata';
import { Router, Route, browserHistory, IndexRedirect, Redirect } from 'react-router'
import Profile from './Profile'
import Login from './Login'
import Signup from './Signup'
var personal = [newsdata[2]];

function requireAuth(nextState, replace) {
  if (!window.authed) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
function login() {
   window.authed = true;
   browserHistory.push("/news");
}
function signup(){
  window.authed = true;
  browserHistory.push("/news");
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/news" component={()=><News data={newsdata}/>} onEnter={requireAuth}/>
      <Route path="/personal" component={PagePersonalPage} onEnter={requireAuth}/>
      <Route path="/profile" component={Profile} onEnter={requireAuth}/>
      <Route path="/login" component={()=><Login loginfunc={login} signupfunc={signup}/>}/>
      <Route path="/signup" component={()=><Signup loginfunc={login} signupfunc={signup}/>}/>
      <IndexRedirect to="login"/>
      <Redirect path="*" to="login"/>
    </Route>
  </Router>,
	document.getElementById('root')
);
