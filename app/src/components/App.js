import React from 'react';
import Topbar from './Topbar';
import '../css/App.css';
import '../css/mods.css';
import '../css/base.css';
import { browserHistory } from 'react-router'
var App = React.createClass({
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
          <div className="contWrap">
          {this.props.children}
          </div>
        </div>
      )
    }else{
      return(
        <div>
          {this.props.children}
        </div>
      )
    }
  }
});
export default App;
