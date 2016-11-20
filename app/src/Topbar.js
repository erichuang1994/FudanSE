import React, { Component } from 'react';
// import logo from './logo.svg';
import 'purecss';
import './base.css';
import './mods.css';
import NavLink from './NavLink'
class Topbar extends Component {
  render() {
    return (
      <div className="topBarWrap">
        <div className="home-sub-nav layout-box">
            <NavLink to="/news">首页</NavLink>
            <NavLink to="/personal">我的足迹</NavLink>
            <NavLink to="/profile">个人中心</NavLink>
        </div>
      </div>
    );
  }
}

export default Topbar;
