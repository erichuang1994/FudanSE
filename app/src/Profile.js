import React, { Component } from 'react';
import 'purecss';
import 'purecss/build/grids-responsive-min.css';
import './base.css';
import './cards.css';
import './Profile.css';
class Profit extends Component {
	render(){
		return (
        <div className="incontainer">
          <div className="Profliebox">
            <h1>个人资料</h1>
            <input type="text" placeholder="Old Password"/>
            <input type="text" placeholder="New Password"/>
            <input type="text" placeholder="Nickname"/>
            <input type="text" placeholder="Gender"/>
            <input type="text" placeholder="Age"/>
            <button onClick="">修改</button>
          </div>
        </div>
    );
	 }
}

export default Profit;