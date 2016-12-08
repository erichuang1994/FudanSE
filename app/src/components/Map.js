import React from 'react';
import News from './News';
import '../css/Map.css';
import '../css/base.css';
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
    return { focusCity: "" };
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
				<div>
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
