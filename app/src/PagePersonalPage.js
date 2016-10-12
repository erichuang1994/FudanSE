import React from 'react';
import Component from 'react';
// import App from './App';
import News from './News'

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
			<div>个人信息，名字，图片，粉丝数</div>
			<News data={this.props.data} />
			<SimpleMapExample />
		</div>
		);
	}
});

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      defaultPosition={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>
));

var SimpleMapExample = React.createClass( {

  render : function() {
    return (
      <SimpleMapExampleGoogleMap
        containerElement={
          <div style={{ height: '500px', width : '500px' }} />
        }
        mapElement={
           <div style={{ height: '500px', width: '500px' }} />
        }
      />
    );
  }
});
export default PagePersonalPage;
