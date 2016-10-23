import React from 'react';
import 'purecss';
import 'purecss/build/grids-responsive-min.css';
import './base.css';
import './cards.css';
import './login.css';
var Login = React.createClass({
	handleLogin:function(event) {
		var payload = {
				username: this.refs.username.value,
				password: this.refs.password.value
		};
		var data = new FormData();
		data.append( "json", JSON.stringify( payload ) );
		fetch("/api/login",
		{
				method: "POST",
				body: data
		})
		.then(function(res){
			if(res.status === 200){
					this.props.loginfunc();
			}else{
				alert("密码错误");
			} });
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
            <p>Not a member? <span onClick={this.props.signupfunc}>Sign Up</span></p>
          </div>
        </div>
      </div>
    );
	 }
});

export default Login;
