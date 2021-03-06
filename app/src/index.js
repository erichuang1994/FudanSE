import React from 'react';
import News from './components/News';
import ReactDOM from 'react-dom';
import App from './components/App';
import PagePersonalPage from './components/PagePersonalPage'
import {newsdata} from './components/newsdata';
import { Router, Route, browserHistory, IndexRedirect, Redirect } from 'react-router';
import Setting from './components/Setting';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Followings from './components/Followings';
import Followers from './components/Followers';
import Addpic from './components/Addpic';
import Map from './components/Map';

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
      <Route path="/news" component={()=><News api="/api/user/dashboard"/>} onEnter={requireAuth}/>
      <Route path="/personal" component={PagePersonalPage} onEnter={requireAuth}/>
      <Route path="/setting" component={Setting} onEnter={requireAuth}/>
      <Route path="/profile" component={Profile} onEnter={requireAuth}>
        <Route path="/profile/followings" component={Followings} onEnter={requireAuth}/>
        <Route path="/profile/followers" component={Followers} onEnter={requireAuth}/>
      </Route>
      <Route path="/login" component={()=><Login loginfunc={login} signupfunc={signup}/>}/>
      <Route path="/signup" component={()=><Signup loginfunc={login} signupfunc={signup}/>}/>
      <Route path="/addpic" component={Addpic} onEnter={requireAuth}/>
      <IndexRedirect to="login"/>
      <Redirect path="*" to="login"/>
    </Route>
  </Router>,
	document.getElementById('root')
);
