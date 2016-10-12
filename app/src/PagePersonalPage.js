import React from 'react';
import News from './News';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

var PagePersonalPage = React.createClass({
	render : function() {
		return (
		<div>
			{
				//	add personal info here
			}
			{/*<div>个人信息，名字，图片，粉丝数</div>*/}
			{/*<News data={this.props.data} />*/}
			<SimpleMapExample />
		</div>
		);
	}
});

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
export default PagePersonalPage;
