import React, { Component } from 'react';
// import logo from './logo.svg';
import 'purecss';
import '../css/mods.css';
import '../css/base.css';
import NavLink from './NavLink';
import { Link } from 'react-router';
var AddFriend = React.createClass({
  handleAddFriend:function(){
    var username = this.refs.username.value;
    // console.log(username);
    fetch("/api/user/followings/"+username, {
			credentials: 'include',
	    method: 'post',
	  })
		.then(function(res){
	  	if(res.status === 200){
	    	alert("关注"+username+"成功");
	  	}else if(res.status === 400){
	    	alert("该用户不存在");
	  	}
		});
  },
  render:function(){
    return (
      <div className="layout-box home-topbar module-topbar">
        <div className="input-wrapper box-col">
          <span className="fl type iconf iconf_navbar_search"></span>
          <span className="fr clear hid"></span>
          <div className="input-box">
            <input ref="username" className="search forSearch" type="text" placeholder="搜索用户名" autoComplete="off" />
          </div>
        </div>
        <a className="fr iconf iconf_userinfo_plus" onClick={this.handleAddFriend}></a>
        <a className="fr iconf iconf_navbar_back" onClick={this.props.cancelAddFriend}></a>
      </div>
  );
  }
});
var Navbar = React.createClass({
  render:function(){
    return (
      <div className="home-sub-nav layout-box">
          <NavLink to="/news">首页</NavLink>
          <NavLink to="/personal">我的足迹</NavLink>
          <NavLink to="/profile">个人中心</NavLink>
      </div>
    )
  }
});
var Topbar = React.createClass( {
  getInitialState: function() {
    return {isAddFriendDiag: false};
  },
  
  render:function() {
    const isAddFriendDiag = this.state.isAddFriendDiag;
    if(!isAddFriendDiag){
      return (
        <div className="topBarWrap">
          <div className="home-topbar module-topbar">
            <Link to="/setting" className="fr iconf iconf_navbar_accountedit"></Link>
            <a className="fr iconf iconf_navbar_friendsearch" onClick={()=>{this.setState({isAddFriendDiag: true});}}></a>
            <Link to="/addpic" className="fr iconf iconf_navbar_compose"></Link>
            <div className="fl drop-title"><p className="title txt-cut">{localStorage.getItem('username')}</p></div>
          </div>
          <Navbar/>
        </div>
      );
    }else{
      return (
        <div className="topBarWrap">
          <AddFriend cancelAddFriend={()=>{this.setState({isAddFriendDiag: false})}}/>
          <Navbar/>
        </div>
      );
    }
  }
});

export default Topbar;
