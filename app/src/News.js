import React, { Component } from 'react';
// import logo from './logo.svg';
import './News.css'
import 'purecss'
import 'purecss/build/grids-responsive-min.css';
// import { Button, Cell } from 'react-pure';
// class Card extends Component {
// 	render(){
// 				return (
// 				<div key={data.id} className="pure-u-1 pure-u-md-1-3">
// 					<p>{data.userName}</p>
// 					<img alt={data.pictureUrl} src={data.userPhoto}/>
// 					<img className="pure-img" alt={data.pictureUrl} src={data.pictureUrl}/>
// 					<p>{data.location}</p>
// 					<p>{data.date.toString()}</p>
// 				</div>);
// 		);
// 	}
// }
class News extends Component {
	render(){
		return (
		<div className="pure-g">
		{
			this.props.data.map(function(data) {
				return (
				<div key={data.id} className="pure-u-1 pure-u-md-1-3">
					<div className="pure-g">
					<div className="pure-u-1-3">
					<a href={data.userlink}>
						<img className="size-xs" alt={data.pictureUrl} src={data.userPhoto}/>
					</a>
					</div>
					<div className="pure-u-2-3">
					<ul className="pure-menu-list">
		 		 		<li className="pure-menu-item">{data.userName}</li>
		 				<li className="pure-menu-item">{data.location}</li>
 	 				</ul>
					</div>
					</div>
					<img className="pure-img" alt={data.pictureUrl} src={data.pictureUrl}/>
					<p>{data.date.toString()}</p>
				</div>);
			})
		}
		</div>);
	}
}

export default News;
