import React, { Component } from 'react';
// import logo from './logo.svg';
import 'purecss';

class Topbar extends Component {
  render() {
    return (
      <div className="pure-menu pure-menu-horizontal">
          <a href="#" className="pure-menu-heading pure-menu-link">BRAND</a>
          <ul className="pure-menu-list">
          {
            this.props.menus.map(function(menu) {
              return (
              <li key={menu.name} className="pure-menu-item"><a href="{menu.href}" className="pure-menu-link">{menu.name}</a></li>
              );
            })
          }
          </ul>
      </div>
    );
  }
}

export default Topbar;
