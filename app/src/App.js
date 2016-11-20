import React from 'react';
import Topbar from './Topbar';
import './index.css';
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
    return (
      <div className="container">
      {window.authed?(<Topbar/>):null}
      {this.props.children}
      </div>
    );
  }
});
export default App;
