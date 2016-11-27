import React, { Component } from 'react';
// import logo from './logo.svg';
import 'purecss';
import '../css/mods.css';
import '../css/base.css';
import NavLink from './NavLink'
import { Link } from 'react-router'
class Topbar extends Component {
  render() {
    return (
      <div className="topBarWrap">
        <div className="home-topbar module-topbar">
          <Link to="/setting" className="fr iconf iconf_navbar_accountedit"></Link>
          <a className="fr iconf iconf_navbar_friendsearch"></a>
          <a className="fr iconf iconf_navbar_compose"></a>
          <div className="fl drop-title"><p className="title txt-cut">{localStorage.getItem('username')}</p><i className="icon-font icon-font-arrow-down"></i></div>
        </div>
        <div className="home-sub-nav layout-box">
            <NavLink to="/news">首页</NavLink>
            <NavLink to="/personal">我的足迹</NavLink>
            <NavLink >个人中心</NavLink>
        </div>
      </div>
    );
  }
}

export default Topbar;
