import React, { Component } from 'react';
import 'purecss';
import 'purecss/build/grids-responsive-min.css';
import './base.css';
import './cards.css';
class Login extends Component {
	render(){
		return (
      <div className="pure-form">
        <fieldset>
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>

        <label htmlFor="remember">
            <input id="remember" type="checkbox"></input>
        </label>
          <button type="submit" className="pure-button pure-button-primary" onClick={this.props.loginfunc}>Sign in</button>
        </fieldset>
      </div>
    );
	 }
}

export default Login;
