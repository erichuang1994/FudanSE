import React from 'react';
import News from './News';
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

//	marker click function
// const onMarkerClick = function(name) {
// 	console.log('click\t' + name);
// 	this.props.updateFocusCity(name);
// }

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
		this.width = "500";
    return { focusCity: "" };
  },
	updateFocusCity:function(name){
		fetch("/travellers/USERNAME/cities/CITYNAME/pictures", {
			credentials: 'include',
		})
		.then(function(res){
		if(res.status === 200){
			// handle there
			console.log(res.status);
		}else if(res.status === 401){
			// handle there
			console.log(res.status);
		}});
		var NewsData = function(name, location,picUrl,userPhotoUrl) {
		  return {
		    userlink: "u/12345",
		    userName: name,
		    userPhoto: userPhotoUrl,
		    pictureUrl: picUrl,
		    location: location,
		    date: new Date()
		    //countLike	: 0;
		    //countComment : 0;
		  }
		};
		var news1 = NewsData("张宝华", "Hongkong","https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/3675/SITours/hong-kong-island-half-day-tour-in-hong-kong-114439.jpg","http://a1.att.hudong.com/51/81/01300543677571145377814328062_s.jpg");
		var news2 = NewsData("华莱士", "America","http://dn-joyintour.qbox.me/images/20160707/577e0eba186fb.jpg","http://a2.att.hudong.com/05/35/01100000000000144738353445402_s.jpg");
		var news3 = NewsData("扬州少年", "China","http://www.yztm.net/Images/5839dbb0-35b1-467d-a91c-07fc1042e723.jpg","http://photocdn.sohu.com/20111227/Img330426899.jpg");
		var news = [news1, news2, news3];
		this.news = news;
		this.height = "300";
		this.width = "500";
		this.setState({focusCity: name});
	},
	render : function() {
		return (
			<div>
			<MapWithMarker
				zoom={5}
				mapCenter={{ lat: 26.08, lng: 119.3 }}
				marker={[MarkerData('上海', 31.2304, 121.4737), MarkerData('香港', 22.2, 114.1), MarkerData('扬州', 32.39, 119.42)]}
				containerElement={
					<div style={{ height: this.height+'px', width : this.width+'px' }} />
				}
				mapElement={
					<div style={{ height: this.height+'px', width: this.width+'px' }} />
				}
				updateFocusCity={this.updateFocusCity}
			/>
			{this.state.focusCity!=="" ? (
			<News data={this.news} deleteById={()=>{console.log("hello world");}}></News>
			) :
			null}
			</div>
		);
	}
});

export default Map;
