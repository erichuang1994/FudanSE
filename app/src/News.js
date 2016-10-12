import React from 'react';
// import logo from './logo.svg';
import './News.css';
import 'purecss';
import 'purecss/build/grids-responsive-min.css';
import './base.css';
import './cards.css';
var News = React.createClass({
	getInitialState:function() {
    return { edit: false, curNum:0 };
  },
	editfunc:function(num){
		this.setState({edit:true, curNum:num});
	},
	cancelEditfunc:function(num){
		this.setState({edit:false});
	},
	render:function(){
		if(this.state.edit){
			var style1={
					display: 'block',
				 	position: 'fixed',
				  backgroundColor:'rgba(0, 0, 0, 0.498039)'
				};
			var popup=	(
				<div className="ux-popmenu" style={style1}>
					<div className="content show" style={{bottom: "0px", position: "fixed"}}>
						<section className="card-combine">
							<a href="javascript:;"  className="line-bottom" >
								<span>收藏</span>
							</a>
							<a href="javascript:;"  className="line-bottom" >
								<span>删除</span>
							</a>
							<a className="close line-top" href="javascript:;" onClick={this.cancelEditfunc}>
								<span>取消</span>
							</a>
						</section>
					</div>
				</div>
			)
		};
		return (
			<div>
		<div>
		{
			this.props.data.map((card) => {
				return (
				<div key={card.id} className="card card9 line-around" >
					<header className="layout-box media-graphic">
						<div className="mod-media size-xs news-header">
							<a href={card.userlink}>
								<img className="size-xs" alt={card.pictureUrl} src={card.userPhoto}/>
							</a>
						</div>
						<div className="box-col item-list">
		 		 				<a className="item-main txt-l mct-a txt-cut"><span>{card.userName}</span></a>
								<div className="item-minor txt-xxs mct-d txt-cut">
									<span className="time">{card.date.toLocaleDateString("ch-CN")}</span>
									<span className="from">来自{card.location}</span>
								</div>
						</div>
						<a className="operate-box"><i className="icon-font icon-font-arrow-down txt-s"  onClick={() => this.editfunc(card.id)}></i></a>
					</header>
					<div className="news-body">
						<img className="pure-img" alt={card.pictureUrl} src={card.pictureUrl}/>
					</div>
				</div>);
			})
		}
		</div>
		{popup}
	</div>);
	}
});

export default News;
