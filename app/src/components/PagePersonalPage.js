import React from 'react';
import Map from './Map';
//import News from './News';

var PagePersonalPage = React.createClass({
	getInitialState:function(){
		return {};
	},
	componentWillMount:function() {
		var username = localStorage.username;
		var setState = this.setState.bind(this);
		fetch("/api/travellers/" + username+"/cities", {
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
			// setState({email:json.email});
		});
		fetch("/api/travellers/"+ username+ "/followings", {
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
			// setState({email:json.email});
		});
	},
	render : function() {
		return (
		<div>
			{
				//	add personal info here
			}
			{/*<div>个人信息，名字，图片，粉丝数</div>*/}
			{/*<News data={this.props.data} />*/}
			<Map />
		</div>
		);
	}
});

/*
const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: 31.2304, lng: 121.4737 }}
  >
    <Marker
      defaultPosition={{ lat: 31.2304, lng: 121.4737 }}
    />
    <Marker
      defaultPosition={{lat:26.1008, lng:119.2951}}
    />
    <Marker
      defaultPosition={{lat:23.9037, lng:121.0794}}
    />
  </GoogleMap>
));

var SimpleMapExample = React.createClass( {

  render : function() {
    return (
      <SimpleMapExampleGoogleMap
        containerElement={
          <div style={{ height: '700px', width : '500px' }} />
        }
        mapElement={
           <div style={{ height: '700px', width: '500px' }} />
        }
      />
    );
  }
});
*/

export default PagePersonalPage;
