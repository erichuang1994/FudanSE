import React, { Component } from 'react';
// import logo from './logo.svg';
import './News.css';
import 'purecss';
import 'purecss/build/grids-responsive-min.css';
import './base.css';
import './cards.css';
class News extends Component {
	render(){
		return (
		<div className="pure-g">
		{
			this.props.data.map(function(data) {
				return (
				<div key={data.id} className="pure-u-1 pure-u-md-1-3">
					<header className="layout-box media-graphic">
						<div className="mod-media size-xs">
							<a href={data.userlink}>
								<img className="size-xs" alt={data.pictureUrl} src={data.userPhoto}/>
							</a>
						</div>
						<div className="box-col item-list">
		 		 				<a className="item-main txt-l mct-a txt-cut">{data.userName}</a>
								<div className="item-minor txt-xxs mct-d txt-cut">
									<span className="time">3分钟前</span>
									<span className="from">来自{data.location}</span>
								</div>
						</div>
					</header>
					<img className="pure-img" alt={data.pictureUrl} src={data.pictureUrl}/>
					<p>{data.date.toString()}</p>
				</div>);
			})
		}
		</div>);
	}
}

export default News;
