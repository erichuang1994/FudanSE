import React from 'react';
import 'purecss';
import 'purecss/build/grids-responsive-min.css';
var Profile = React.createClass( {
  componentDidMount:function(){
    continue;
  },
	render(){
		return (
        <div className="incontainer">
          <div className="Profliebox">
            <h1>个人资料</h1>
            <input type="password" placeholder="Old Password" />
            <input type="password" placeholder="New Password" ref="password"/>
            <input type="text" placeholder="Email" ref="email" value={this.state.email} onChange={this.handleChange}/>
            <input type="text" placeholder="Age" />
            <select name="Gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button onClick={this.handleProfit}>修改</button>
          </div>
        </div>
    );
	 }
});

export default Profile;
