import React, { Component } from 'react';
import 'purecss';
import 'purecss/build/grids-responsive-min.css';
import './base.css';
import './cards.css';
import './login.css';
class Login extends Component {
	render(){
		return (
      <div className="vid-container">
        <video id="Video1" className="bgvid back" autoPlay="false" muted="muted" preload="auto" loop>
            <source src="http://shortcodelic1.manuelmasiacsasi.netdna-cdn.com/themes/geode/wp-content/uploads/2014/04/milky-way-river-1280hd.mp4.mp4" type="video/mp4">
            </source>
        </video>
        <div className="inner-container">
          <video id="Video2" className="bgvid inner" autoPlay="false" muted="muted" preload="auto" loop>
            <source src="http://shortcodelic1.manuelmasiacsasi.netdna-cdn.com/themes/geode/wp-content/uploads/2014/04/milky-way-river-1280hd.mp4.mp4" type="video/mp4">
            </source>
          </video>
          <div className="box">
            <h1>Login</h1>
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="Password"/>
            <button onClick={this.props.loginfunc}>Login</button>
            <p>Not a member? <span onClick={this.props.signupfunc}>Sign Up</span></p>
          </div>
        </div>
      </div>
    );
	 }
}

export default Login;
