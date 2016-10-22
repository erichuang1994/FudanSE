import React, { Component } from 'react';
import 'purecss';
import 'purecss/build/grids-responsive-min.css';
import './base.css';
import './cards.css';
import './Signup.css';
var Signup =React.createClass( {
	handleSignup:function(event){
		for(var key in this.refs) {
    	if(this.refs.hasOwnProperty(key)) {
        this.refs[key] = this.refs[key].value;
    	}
		}
		var payload = this.refs;
		var data = new FormData();
		data.append( "json", JSON.stringify( payload ) );
		fetch("/api/travellers",
		{
				method: "POST",
				body: data
		})
		.then(function(res){
			if(res.status==200){
					this.props.loginfunc();
			}else{
				alert("注册失败啦");
			}});
	},
	render:function(){
		return (
      <div className="vid-container">
        <video id="Video1" className="bgvid back" autoPlay="false" muted="muted" preload="auto" loop>
            <source src="http://shortcodelic1.manuelmasiacsasi.netdna-cdn.com/themes/geode/wp-content/uploads/2014/04/milky-way-river-1280hd.mp4.mp4" type="video/mp4">
            </source>
        </video>
        <div className="innercontainer">
          <video id="Video2" className="bgvid inner" autoPlay="false" muted="muted" preload="auto" loop>
            <source src="http://shortcodelic1.manuelmasiacsasi.netdna-cdn.com/themes/geode/wp-content/uploads/2014/04/milky-way-river-1280hd.mp4.mp4" type="video/mp4">
            </source>
          </video>
          <div className="box">
            <h1>Sign up</h1>
            <input type="text" placeholder="Username" ref="username"/>
            <input type="password" placeholder="Password" ref="password"/>
            <input type="text" placeholder="Nickname" ref="nickname"/>
            <input type="text" placeholder="Gender" ref="gender"/>
            <input type="text" placeholder="Age" ref="age"/>
            <button onClick={this.handleSignup}>Sign up</button>
          </div>
        </div>
      </div>
    );
	 }
});

export default Signup;
