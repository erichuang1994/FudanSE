import React, { Component } from 'react';
import News from './News';
import Topbar from './Topbar';
import './index.css';
import Login from './Login'
var App = React.createClass({
  login: function() {
     this.setState({islogin: true});
  },
  getInitialState: function() {
    return { islogin: false };

  },
  render: function() {
    if(this.state.islogin){
        return (
          <div>
          <Topbar menus={this.props.datas['menus']}/>
          <News data={this.props.datas['news']}></News>
          </div>
        );
    }else{
      return (
        <Login loginfunc={this.login}></Login>
      );
    }
  }
});
export default App;
