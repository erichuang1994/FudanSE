import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class News extends Component {
	render(){
		return (
		<div>
		{
			this.props.data.map(function(data) {
				return (
				<div style={{marginTop: "20px", backgroundColor: "bisque"}}>
					<p>{data.userName}</p>
					<img src={data.userPhoto}/>
					<img src={data.pictureUrl}/>
					<p>{data.location}</p>
					<p>{data.date.toString()}</p>
				</div>);
			})
		}
		</div>);
	}
}

export default News;
