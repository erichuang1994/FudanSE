import React, { Component } from 'react';
import 'purecss';
import 'purecss/build/grids-responsive-min.css';
import './base.css';
import './cards.css';
import './Profile.css';
var Profit = React.createClass( {
  handleProfit:function(event) {
    var data = new FormData();
    data.append("username",this.refs.username.value);
    data.append("password",this.refs.password.value);
    fetch("/api/settings", {
      credentials: 'include',
      method: 'put',
      body: data
    })
    .then(function(res){
    if(res.status === 200){
      alert("修改成功");
    }else if(res.status === 400){
      alert("密码错误");
    }});
  },
	render(){
		return (
        <div className="incontainer">
          <div className="Profliebox">
            <h1>个人资料</h1>
            <input type="text" placeholder="Old Password" ref="username"/>
            <input type="text" placeholder="New Password" ref="password"/>
            <input type="text" placeholder="Nickname" value="admin"/>
            
            <input type="text" placeholder="Age" />
            <select name="Gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button onClick={this.handleProfit}>修改</button>
          </div>
        </div>
    );
	 }
});

export default Profit;
