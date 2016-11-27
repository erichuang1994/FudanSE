import React from 'react';
import '../css/Profile.css'
import '../css/base.css'
import { Link } from 'react-router';
var Profile = React.createClass( {
  getFetch:function(url, callback){
    fetch(url, {
      credentials: 'include',
      method: 'get'
    })
    .then(function(res){
    if(res.status === 200){
      return res.json();
    }else if(res.status === 500){
      alert("获取信息失败");
    }}).then(function(json){
      callback(json);
    });
  },
  getInitialState:function(){
		return {cityNum:0, followings:0, followers:0};
	},
  componentWillMount:function(){
    var username = localStorage.username;
    var setState = this.setState.bind(this);
    this.getFetch("/api/travellers/"+ username+ "/followers" ,(json)=>{setState({followers:json.followers.length});})
    this.getFetch("/api/travellers/"+ username+ "/followings" ,(json)=>{setState({followings:json.followings.length});})
    this.getFetch("/api/travellers/"+ username+ "/cities" ,(json)=>{setState({cityNum:json.cities.length});})
  },
	render(){
		return (
        <div className="incontainer">
          <div className="card card2 line-around ">
            <div className="layout-box">
              <Link className="box-col line-separate" >
                <div className="mct-a txt-s">{this.state.cityNum}</div>
                <div className="mct-a txt-s txt-bottom">去过</div>
              </Link>
               <Link className="box-col line-separate">
                 <div className="mct-a txt-s">{this.state.followings}</div>
                 <div className="mct-a txt-s txt-bottom">关注</div>
               </Link>
               <Link className="box-col line-separate">
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
