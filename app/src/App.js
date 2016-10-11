import React from 'react';
import News from './News';
import Topbar from './Topbar';
import './index.css';
import Login from './Login'
var App = React.createClass({
  login: function() {
     this.setState({islogin: true});
  },
  getInitialState: function() {
    return { islogin: false, pageNum:0 };
  },
  setPageNum:function(num){
    return function(){
      this.setState({pageNum:num});
    }.bind(this);
  },
  render: function() {
    if(this.state.islogin){
        return (
          <div>
          <Topbar menus={this.props.datas['menus']} setPageNum={this.setPageNum}/>
          {(() => {
            switch (this.state.pageNum) {
              case 0:   return <News data={this.props.datas['news']}></News>;
              default:   return <News data={this.props.datas['news']}></News>;
            }
          })()}
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
