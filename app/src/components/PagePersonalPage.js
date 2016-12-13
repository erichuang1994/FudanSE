import React from 'react';
import Map from './Map';
//import News from './News';

var PagePersonalPage = React.createClass({
	getInitialState:function(){
		return {isLoaded:false};
	},
	componentDidMount:function() {
		var username = localStorage.username;
		var setState = this.setState.bind(this);
		var self = this;
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
			self.cities = json.cities;
			setState({isLoaded:true});
		});
	},
	render : function() {
		console.log(this.cities);
		if(this.state.isLoaded){
			return (
			<div>
				<Map cities={this.cities}/>
			</div>
			);
		}else{
			return (
			<div></div>
			);
		}
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
