import React from 'react';
// import logo from './logo.svg';
import './News.css';
import 'purecss';
import 'purecss/build/grids-responsive-min.css';
import './base.css';
import './cards.css';
import './mods.css';

var clickLike = function(a, card) {
  console.log('like');
  console.log(a);
  console.log(card);
}

var clickComment = function(a, card) {
  console.log('comment');
  console.log(a);
  console.log(a.refs.a);
  console.log(card);
}

var News = React.createClass({
  getInitialState:function() {
    return { edit: false, curNum:0 };
  },

	editfunc:function(num){
		this.setState({edit:true, curNum:num});
	},

	deleteById:function(){
		this.props.deleteById(this.state.curNum);
		this.setState({edit:false});
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
			var popup = (
				<div className="ux-popmenu" style={style1}>
					<div className="content show" style={{bottom: "0px", position: "fixed"}}>
						<section className="card-combine">
							<a href="javascript:;"  className="line-bottom" >
								<span>收藏</span>
							</a>
							<a href="javascript:;"  className="line-bottom" onClick={this.deleteById}>
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
			<div className="contWrap">
			{
				this.props.data.map((card, index) => {
					return (
					<div key={index} className="card card9 line-around" >
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
							<a className="operate-box"><i className="icon-font icon-font-arrow-down txt-s"  onClick={() => this.editfunc(index)}></i></a>
						</header>
						<div className="news-body">
							<img className="pure-img" alt={card.pictureUrl} src={card.pictureUrl}/>
						</div>
						<ul className="news-toolbar">
							<li className="news-tool">
								<a href="javascript:;" onClick={() => {clickLike(this, card)}}>
									0赞
								</a>
							</li>
							<li className="news-tool">
								<a href="javascript:;" onClick={() => {clickComment(this, card)}}>
									0评论
								</a>
							</li>
						</ul>
						<div ref="a">
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
