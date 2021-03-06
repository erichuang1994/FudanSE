import React from 'react';
import '../css/Profile.css'
import '../css/base.css'
import { Link } from 'react-router';
var Followings = React.createClass( {
  getFetch(url, callback){
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
      console.log(json);
      return callback(json);
    });
  },
  getInitialState(){
		return {isLoaded:false};
	},
  componentDidMount(){
    var username = localStorage.username;
    var self = this;
    var p1 = this.getFetch("/api/travellers/"+ username+ "/followings" , (json)=>{self.followings = json.followings;self.setState({isLoaded:true});})
  },
	render(){
    if(this.state.isLoaded){
      return (
        <div>
          {
    				this.followings.map((following, index) => {
    					return (
                <div key={index} className="card card2 line-around ">
                  <div className="layout-box">
                    {following}
                   </div>
                </div>
    					);
    				})
    			}
        </div>
      );
    }else{
      return (
        <div></div>
      )
    }
	 }
});

export default Followings;
