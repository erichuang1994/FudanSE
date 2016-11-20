import React from 'react';
import Topbar from './Topbar';
import './index.css';
import Login from './Login'
import Signup from './Signup'

var App = React.createClass({
  login: function() {
     this.setState({islogin: true});
  },
  getInitialState: function() {
    return { islogin: false, toSignup: false};
  },
  signup:function(){
      this.setState({toSignup: !this.state.toSignup});
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
    if(this.state.islogin){
        return (
          <div className="container">
          <Topbar/>
          {this.props.children}
          </div>
        );
    }else{
      if (this.state.toSignup) {
        return (
          <Signup loginfunc={this.login} signupfunc={this.signup}></Signup>
        );
      }else {
        return (
          <Login loginfunc={this.login} signupfunc={this.signup}></Login>
        );
      }
    }
  }
});
export default App;
