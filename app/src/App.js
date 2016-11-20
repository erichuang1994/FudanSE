import React from 'react';
import Topbar from './Topbar';
import './index.css';
import Login from './Login'
import Signup from './Signup'
import { browserHistory } from 'react-router'
var App = React.createClass({
  login: function() {
     window.authed = true;
     browserHistory.push("/news");
  },
  signup:function(){
    window.authed = true;
    browserHistory.push("/news");
  },
  deleteById:function(num){
	this.props.datas['news'].splice(num, 1);
    /*
    for(var i = 0;i<this.props.datas['news'].length;i++){
      if(this.props.datas['news'][i].id===num){
          this.props.datas['news'].splice(i, num);
          break;
      }
    }
	*/
  },
  render: function() {
    // show pathname
    console.log(this.props.location.pathname);
    if(window.authed){
        return (
          <div className="container">
          <Topbar/>
          {this.props.children}
          </div>
        );
    }else if(this.props.location.pathname==="/signup"){
      return (
        <div>
        {this.props.children}
        </div>
      );
    }else{
      return (
        <Login loginfunc={this.login} signupfunc={this.signup}/>
      );
    }
  }
});
export default App;
