import React, { Component } from 'react';
import 'purecss';
import 'purecss/build/grids-responsive-min.css';
import './base.css';
import './cards.css';
import './Signup.css';
class Signup extends Component {
	render(){
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
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="Password"/>
            <input type="text" placeholder="Nickname"/>
            <input type="text" placeholder="Gender"/>
            <input type="text" placeholder="Age"/>
            <button onClick={this.props.loginfunc}>Sign up</button>
          </div>
        </div>


      </div>
    );
	 }
}

export default Signup;