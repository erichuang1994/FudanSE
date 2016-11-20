// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'
import 'purecss';
import './base.css'
import './mods.css'

export default React.createClass({
  render() {
    return <Link {...this.props} className="item box-col" activeClassName="item box-col isActive"/>
  }
})
