import React from 'react';
import '../css/Profile.css'
import '../css/base.css'
import { Link } from 'react-router';
var Profile = React.createClass( {
  getFetch(url, callback){
    return fetch(url, {
      credentials: 'include',
      method: 'get'
    })
    .then(function(res){
    if(res.status === 200){
      return res.json();
    }else if(res.status === 500){
      alert("获取信息失败");
    }}).then(function(json){
      return callback(json);
    });
  },
  getInitialState(){
		return {cityNum:0, followings:0, followers:0};
	},
  componentDidMount(){
    var username = localStorage.username;
    var setState = this.setState.bind(this);
    var p1 = this.getFetch("/api/travellers/"+ username+ "/followers" ,(json)=>{return {followers:json.followers.length};})
    var p2 = this.getFetch("/api/travellers/"+ username+ "/followings" ,(json)=>{return {followings:json.followings.length};})
    var p3 = this.getFetch("/api/travellers/"+ username+ "/cities" ,(json)=>{return {cityNum:json.cities.length};})
    // 一次性更新state避免re render三次
    Promise.all([p1, p2, p3]).then(values=>{
      setState(Object.assign(...values));
    });
  },
	render(){
    console.log("render");
		return (
        <div className="incontainer">
          <div className="card card2 line-around ">
            <div className="layout-box">
              <Link className="box-col line-separate" >
                <div className="mct-a txt-s">{this.state.cityNum}</div>
                <div className="mct-a txt-s txt-bottom">去过</div>
              </Link>
               <Link className="box-col line-separate" to="/followings">
                 <div className="mct-a txt-s">{this.state.followings}</div>
                 <div className="mct-a txt-s txt-bottom">关注</div>
               </Link>
               <Link className="box-col line-separate" to="/followers">
                 <div className="mct-a txt-s">{this.state.followers}</div>
                 <div className="mct-a txt-s txt-bottom">粉丝</div>
               </Link>
             </div>
          </div>
        </div>
    );
	 }
});

export default Profile;
