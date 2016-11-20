import React from 'react';
import News from './News';
import './Map.css';
import './base.css';
import Addpic from './Addpic';
import {shanghai,yangzhou} from './newsdata';
import {
	GoogleMap,
	Marker,
	withGoogleMap,
} from 'react-google-maps';

//	class constructor for marker data
const MarkerData = function(dname, dlat, dlng) {
	return {
		name:dname,
		location:{
			lat:dlat,
			lng:dlng
		}
	};
}

const MapWithMarker = withGoogleMap(props => (
	<GoogleMap
		defaultZoom={props.zoom}
		defaultCenter={props.mapCenter}
	>
		{
			props.marker.map((marker, index) => {
				return (
				<Marker
					key={index}
					defaultPosition={marker.location}
					id={marker.name}
					onClick={() => {props.updateFocusCity(marker.name);}}
				/>);
			})
		}
	</GoogleMap>
))

var Map = React.createClass({
	getInitialState:function() {
		this.height = "700";
		this.width = "600";
    return { focusCity: "", addCity: false, addPic: false };
  },
	addpic:function(){
	  this.setState({addPic: true});
	},
	addCity:function(){
		this.setState({addCity: true});
	},
	handleAddCity:function(){
		var data = new FormData();
		data.append("cityname",this.refs.cityname.value);
		fetch("/user/cities/visit", {
			credentials: 'include',
	    method: 'post',
	    body: data
	  })
		.then(function(res){
  	if(res.status === 200){
			alert("添加成功");
			this.setState({addCity:false});
  	}else if(res.status === 401){
    	alert("添加不成功");
			this.setState({addCity:false});
  	}});
		// console.log(localStorage.getItem('username'));
		this.setState({addCity:false});
	},
	cancelAddCity:function(){
		this.setState({addCity:false});
	},
	closeAddPic:function(){
	  this.setState({addPic: false});
	},
	updateFocusCity:function(name){
		// fetch("/travellers/USERNAME/cities/CITYNAME/pictures", {
		// 	credentials: 'include',
		// })
		// .then(function(res){
		// if(res.status === 200){
		// 	// handle there
		// 	console.log(res.status);
		// }else if(res.status === 401){
		// 	// handle there
		// 	console.log(res.status);
		// }});
		this.height = "300";
		this.width = "500";
		this.setState({focusCity: name});
	},
	render : function() {
		var style1={
				display: 'block',
				position: 'fixed',
				backgroundColor:'rgba(0, 0, 0, 0.498039)'
			};
		return (
			<div>
				{this.state.addCity ? (
					<div className="ux-popmenu" style={style1}>
						<div className="fixed-center" >
        			<input className="base-input" ref="cityname" type="text" placeholder="输入城市名"/>
        			<button  className="base-button pure-button pure-button-primary" onClick={this.handleAddCity}>添加</button>
							<button  className="base-button pure-button pure-button-primary" onClick={()=>this.setState({addCity:false})}>取消</button>
						</div>
					</div>
				) :
				null}
				<div>
					{this.state.addPic ? (
						<div className="ale">
							<Addpic></Addpic>
							<button className="upl" onClick={this.closeAddPic}>确认上传</button>
						</div>
					) :
					null}
					<div className="mapbox">
						<button onClick={this.addCity}>添加城市</button>
					</div>
					<div className="mapbox">
						<button onClick={this.addpic}>添加照片</button>
					</div>
				<MapWithMarker
					zoom={5}
					mapCenter={{ lat: 26.08, lng: 119.3 }}
					marker={[MarkerData('上海', 31.2304, 121.4737), MarkerData('香港', 22.2, 114.1), MarkerData('扬州', 32.39, 119.42)]}
					containerElement={
						<div style={{ height: this.height+'px', width: this.width+'px', maxWidth: '100%'}} />
					}
					mapElement={
						<div style={{ height: this.height+'px', width: this.width+'px', maxWidth: '100%'}} />
					}
					updateFocusCity={this.updateFocusCity}
				/>
				{this.state.focusCity==="上海" ? (
				<News data={shanghai} deleteById={()=>{console.log("hello world");}}></News>
				) :
				null}
				{this.state.focusCity==="扬州" ? (
				<News data={yangzhou} deleteById={()=>{console.log("hello world");}}></News>
				) :
				null}
				</div>
			</div>
		);
	}
});

export default Map;
