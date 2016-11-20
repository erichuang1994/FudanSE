import React from 'react';
import 'purecss';
import 'purecss/build/grids-responsive-min.css';
import './base.css';
import './cards.css';
import './Profile.css';
var Profile = React.createClass( {
  getInitialState:function(){
    return {email: ""};
  },
  componentWillMount:function() {
    var username = localStorage.username;
    var setState = this.setState.bind(this);
    fetch("/api/travellers/" + username, {
      credentials: 'include',
      method: 'get'
    })
    .then(function(res){
    if(res.status === 200){
      return res.json();
    }else if(res.status === 500){
      alert("获取信息失败");
    }}).then(function(json){
      setState({email:json.email});
    });
  },
  handleProfit:function(event) {
    var data = new FormData();
    data.append("password",this.refs.password.value);
    data.append("email",this.refs.email.value);
    fetch("/api/settings", {
      credentials: 'include',
      method: 'put',
      body: data
    })
    .then(function(res){
    if(res.status === 200){
      alert("修改成功");
    }else if(res.status === 500){
      alert("修改失败");
    }});
  },
	render(){
		return (
        <div className="incontainer">
          <div className="Profliebox">
            <h1>个人资料</h1>
            <input type="password" placeholder="Old Password" />
            <input type="password" placeholder="New Password" ref="password"/>
            <input type="text" placeholder="Email" ref="email" value={this.state.email}/>
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

export default Profile;
