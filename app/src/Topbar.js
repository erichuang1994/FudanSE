import React, { Component } from 'react';
// import logo from './logo.svg';
import 'purecss';
import './base.css'
import './mods.css'
class Topbar extends Component {
  render() {
    var setPageNum = this.props.setPageNum;
    return (
      <div className="topBarWrap">
        <div className="home-sub-nav layout-box">
            {
              this.props.menus.map(function(menu) {
                if(menu.isactive){
                return (
                  <a key={menu.num} href="javascript:;" className="item box-col isActive" onClick={setPageNum(menu.num)}>{menu.name}</a>
                );
              }else{
                return (
                  <a key={menu.num} href="javascript:;" className="item box-col" onClick={setPageNum(menu.num)}>{menu.name}</a>
                );
              }
              })
            }
        </div>
      </div>
    );
  }
}

export default Topbar;
