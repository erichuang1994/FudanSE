import React from 'react';
import News from './News';
import Topbar from './Topbar';
import './index.css';
import Login from './Login'
import Signup from './Signup'
import PagePersonalPage from './PagePersonalPage'
var App = React.createClass({
  login: function() {
     this.setState({islogin: true});
  },
  getInitialState: function() {
    return { islogin: false, pageNum:0, toSignup: false };
  },
  setPageNum:function(num){
    return function(){
      this.props.datas['menus'][this.state.pageNum].isactive=false;
      this.props.datas['menus'][num].isactive=true;
      this.setState({pageNum:num});
    }.bind(this);
  },
  signup:function(){
      this.setState({toSignup:true});
  },
  render: function() {
    if(this.state.islogin){
        return (
          <div>
          <Topbar menus={this.props.datas['menus']} setPageNum={this.setPageNum}/>
          {(() => {
            switch (this.state.pageNum) {
              case 0:   return <News data={this.props.datas['news']}></News>;
              case 1:   return <PagePersonalPage data={this.props.datas['personal']}></PagePersonalPage>;
              default:   return <News data={this.props.datas['news']}></News>;
            }
          })()}
          </div>
        );
    }else{
      if (this.state.toSignup) {
        return (
          <Signup loginfunc={this.login}></Signup>
        );
      }
      else {
        return (
          <Login loginfunc={this.login} signupfunc={this.signup}></Login>
        );
      }
    }
  }
});
export default App;
