import React from 'react';
import 'purecss';
import 'purecss/build/grids-responsive-min.css';
import './base.css';
import './cards.css';
import './Signup.css';
var Signup =React.createClass( {
	handleSignup:function(event){
		var data = new FormData();
		for(var key in this.refs) {
    	if(this.refs.hasOwnProperty(key)) {
				data.append(key, this.refs[key].value);
    	}
		}
		fetch("/api/travellers",
		{		credentials: 'include',
				method: "POST",
				body: data
		})
		.then(function(res){
			if(res.status === 200){
					this.props.loginfunc();
			}else if(res.status=== 302){
				alert("帐号已存在");
			}else{
				alert("注册失败");
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
            <input type="text" placeholder="Email" ref="email"/>
            <button onClick={this.handleSignup}>Sign up</button>
          </div>
        </div>
      </div>
    );
	 }
});

export default Signup;
