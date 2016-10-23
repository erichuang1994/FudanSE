import React from 'react';
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
const onMarkerClick = function(name) {
	console.log('click\t' + name);
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
					onClick={() => {onMarkerClick(marker.name);}}
				/>);
			})
		}
	</GoogleMap>
))

var Map = React.createClass({
	render : function() {
		return (
			<MapWithMarker
				zoom={5}
				mapCenter={{ lat: 26.08, lng: 119.3 }}
				marker={[MarkerData('上海', 31.2304, 121.4737), MarkerData('香港', 22.2, 114.1), MarkerData('扬州', 32.39, 119.42)]}
				containerElement={
					<div style={{ height: '700px', width : '500px' }} />
				}
				mapElement={
					<div style={{ height: '700px', width: '500px' }} />
				}
			/>);
	}
});

export default Map;
