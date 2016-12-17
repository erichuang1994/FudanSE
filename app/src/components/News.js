import React from 'react';
// import logo from './logo.svg';
import 'purecss';
import 'purecss/build/grids-responsive-min.css';
import '../css/News.css';
import '../css/base.css';
import '../css/cards.css';
import '../css/mods.css';
import {newsdata} from './newsdata';

var NewsComment = React.createClass({
  render: function() {
    return (<div>1</div>);
  }
});

var Card = React.createClass({
  getFetch(url, callback){
    return fetch(url, {
      credentials: 'include',
      method: 'get',
    })
    .then(function(res){
    if(res.status === 200){
      return res.json();
    }else if(res.status === 500){
      alert("获取信息失败");
    }}).then(function(json){
      return callback(json);
    });
  },

  postFetch(url, data, success, fail) {
    fetch(url, {
      credentials: 'include',
      method: 'post',
      data: data
    })
    .then(function(res){
    if(res.status === 200){
      success();
    }else {
      fail();
    }});
  },

  getInitialState: function() {
    return {comment: false};
  },

  clickLike: function() {
  },

  clickComment: function() {
    if (!this.state.comment) {
      var commentData = [];
      this.getFetch("/api/pictures/" + this.props.data.pictureId + "/messages", (json) => {console.log(json); commentData = json;});
      this.setState({comment: true, commentData:commentData});
	}
    else {
      this.setState({comment: false});
    }
  },

  clickAddComment: function() {
  },

  render : function() {
    var card = this.props.data;
	if (this.state.comment) {
	  var commentBox = (
        <div className='comment-box'>
		  {
  		    this.state.commentData.map((data, index) => {
		      return (<NewsComment key={index} data={data} />);
		    })
		  }
        </div>
	  );
	}
    return (
	  <div key={this.props.index} className="card card9 line-around" >
	    <header className="layout-box media-graphic">
          <div className="mod-media size-xs news-header">
            <a href={this.props.userlink}>
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
          <a className="operate-box"><i className="icon-font icon-font-arrow-down txt-s" onClick={this.props.editfunc}></i></a>
        </header>
        <div className="news-body">
          <img className="pure-img" alt={card.pictureUrl} src={card.pictureUrl}/>
        </div>
        <ul className="news-toolbar">
          <li className="news-tool">
            <a href="javascript:;" onClick={this.clickLike}>
              0赞
            </a>
          </li>
          <li className="news-tool">
            <a href="javascript:;" onClick={this.clickComment}>
              0评论
            </a>
          </li>
        </ul>
		{commentBox}
      </div>);
  }
});





var News = React.createClass({
  getInitialState:function() {
    return { edit:false, curNum:0, data:[]};
  },

  getNewsData: function() {
    return fetch("/api/user/dashboard", {
     credentials: 'include',
      method: 'get'
    })
    .then(function(res){
      if(res.status === 200){
        return res.json();
      }else if(res.status === 500){
       alert("获取信息失败");
      }});
  },

  componentDidMount: function() {
    this.getNewsData().then().then((json) => {
	  var data = json.pictures.map((data) => {
	    return {
          date: new Date(Date.parse(data.time)),
          location: data.cityname,
          //	TODO check the pictureUrl
          pictureUrl: "api/" + data.url.substring(7),
          //	userLink is not usable
          userLink: "",
          userName: data.username,
          //	UserPhoto is not usable
          userPhoto: ""
        }
      });
	  console.log(newsdata);
      console.log(data);
	  this.setState({data:data});
	});
  },

	editfunc:function(num){
		this.setState({edit:true, curNum:num});
	},

	deleteById:function(){
		var data = this.state.data;
		data.splice(this.state.curNum, 1);
		this.setState({edit:false, data:data});
	},

	cancelEditfunc:function(num){
		this.setState({edit:false});
	},

	render:function(){
		this.commentBox = [];
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
			{
				this.state.data.map((card, index) => {
					return (
						<Card key={index} data={card} index={index} editfunc={() => {this.editfunc(index)}}/>
					);
				})
			}
			{popup}
		</div>);
	}
});

export default News;
