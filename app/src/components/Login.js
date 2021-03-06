import React from 'react';
import 'purecss';
import 'purecss/build/grids-responsive-min.css';
import '../css/base.css';
import '../css/cards.css';
import '../css/login.css';
import { Link } from 'react-router'
var Login = React.createClass({
	handleLogin:function(event) {
		var loginfunc = this.props.loginfunc;
		var data = new FormData();
		var username = this.refs.username.value;
		data.append("username",this.refs.username.value);
		data.append("password",this.refs.password.value);
		fetch("/api/login", {
			credentials: 'include',
	    method: 'post',
	    body: data
	  })
		.then(function(res){
	  	if(res.status === 200){
				localStorage.setItem('username', username);
	    	loginfunc();
	  	}else if(res.status === 401){
	    	alert("密码错误");
	  	}
		});
	},
	render:function(){
		return (
      <div className="vid-container">
        <video id="Video1" className="bgvid back" autoPlay="false" muted="muted" preload="auto" loop>
            <source src="./milky-way-river-1280hd.mp4.mp4" type="video/mp4">
            </source>
        </video>
        <div className="inner-container">
          <video id="Video2" className="bgvid inner" autoPlay="false" muted="muted" preload="auto" loop>
            <source src="./milky-way-river-1280hd.mp4.mp4" type="video/mp4">
            </source>
          </video>
          <div className="box">
            <h1>Login</h1>
            <input type="text" placeholder="Username" ref="username"/>
            <input type="password" placeholder="Password" ref="password"/>
            <button onClick={this.handleLogin}>Login</button>
            <p>Not a member? <Link to="/signup">Sign Up</Link></p>
          </div>
        </div>
      </div>
    );
	 }
});

export default Login;
