import React from 'react';
// import logo from './logo.svg';
import 'purecss';
import 'purecss/build/grids-responsive-min.css';
import '../css/News.css';
import '../css/base.css';
import '../css/cards.css';
import '../css/mods.css';

var NewsComment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <a href="" style={{color: "#d14b04", float: "left"}}>{this.props.data.traveller}</a>
        <p>{" : " + this.props.data.content}</p>
        <span className="time">{new Date(Date.parse(this.props.data.time)).toLocaleDateString("ch-CN")}</span>
      </div>);
  }
});

var Card = React.createClass({
  getFetch(url){
    return fetch(url, {
      credentials: 'include',
      method: 'get',
    })
    .then(function(res){
    if(res.status === 200){
      return res.json();
    }else if(res.status === 500){
      alert("获取信息失败");
    }});
  },

  postFetch(url, data, success, fail) {
    fetch(url, {
      credentials: 'include',
      method: 'post',
      body: data
    })
    .then(function(res){
    if(res.status === 200){
      success();
    }else {
      fail();
    }});
  },

  getInitialState: function() {
    return {comment: false, likeI: false, likeCount:this.props.data.likeCount};
  },

  componentDidMount: function() {
    this.getFetch("/api/user/pictures/" + this.props.data.pictureId).then((json) => {this.setState({likeI:json.like})});
  },

  clickLike: function() {
    var data = new FormData();
    data.append("like", !this.state.likeI);
    this.postFetch("/api/user/pictures/" + this.props.data.pictureId, data, () => {
      var newCount = this.state.likeCount;
      if (this.state.likeI) newCount -= 1; else newCount += 1;
      this.getFetch("/api/user/pictures/" + this.props.data.pictureId).then((json) => {
        this.setState({likeI:json.like, likeCount:newCount});
      });
    }, () => {alert("error.");});
  },

  clickComment: function() {
    if (!this.state.comment) {
      this.getFetch("/api/pictures/" + this.props.data.pictureId + "/messages").then((json) => {
        var commentData = [];
        var messages = json.messages;
        this.setState({comment: true, commentData:messages});
      });
	}else {
      this.setState({comment: false});
    }
  },
  updateComment: function() {
    this.getFetch("/api/pictures/" + this.props.data.pictureId + "/messages").then((json) => {
      var commentData = [];
      var messages = json.messages;
      this.setState({commentData:messages});
    });
  },
  clickAddComment: function() {
    var comment = this.refs.commentInput.value;
    var data = new FormData();
    data.append("content", comment);
    this.postFetch("/api/pictures/" + this.props.data.pictureId + "/messages", data, () => {
      console.log("评论成功了");
      this.updateComment();
      this.refs.commentInput.value = "";
    }, () => {alert.log("error")}).bind(this);
  },

  render : function() {
    var card = this.props.data;
	if (this.state.comment) {
	  var commentBox = (
        <div className='comment-box'>
          <div>
            <textarea style={{overflow: "hidden", float: "left", width:"67%", height:"23px"}} ref="commentInput"/>
            <button style={{marginLeft: "1%", width:"30%"}} onClick={this.clickAddComment}>评论</button>
          </div>
          <div style={{marginTop: "10px"}}>
            {
  		      this.state.commentData.map((data, index) => {
		        return (<NewsComment key={index} data={data} />);
  		      })
		    }
          </div>
        </div>
	  );
	}
    return (
	  <div key={this.props.index} className="card card9 line-around" >
	    <header className="layout-box media-graphic">
          <div className="mod-media size-xs news-header">
            <a href={card.userlink}>
              <img className="size-xs" alt={" "} src={card.userPhoto}/>
            </a>
          </div>
          <div className="box-col item-list">
            <a className="item-main txt-l mct-a txt-cut"><span style={{fontWeight: "bold", fontSize:"110%"}}>{card.userName}</span></a>
            <div className="item-minor txt-xxs mct-d txt-cut" style={{fontSize: "85%"}}>
              <span className="time">{card.date.toLocaleDateString("ch-CN")}</span>
              <span className="from">来自 {card.location}</span>
            </div>
          </div>
          <a className="operate-box"><i className="icon-font icon-font-arrow-down txt-s" onClick={this.props.editfunc}></i></a>
        </header>
        <div className="news-body">
          <img className="pure-img" alt={card.pictureUrl} src={card.pictureUrl}/>
        </div>
        <ul className="news-toolbar">
          <li className="news-tool">
            <a href="javascript:;" onClick={this.clickLike} style={{color: (this.state.likeI? "#9f6dc7" : "#808080")}}>
              {this.state.likeCount}赞
            </a>
          </li>
          <li className="news-tool">
            <a href="javascript:;" onClick={this.clickComment}>
              评论
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
    return fetch(this.props.api, {
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
      console.log(json);
	  var data = json.pictures.map((data) => {
	    return {
          date: new Date(Date.parse(data.time)),
          location: data.cityname,
          pictureId: data.pic_id,
          pictureUrl: data.url.substring(0),
          //	userLink is not usable --> profile
          userLink: "",
          userName: data.username,
          //	UserPhoto is not usable --> no
          userPhoto: "",
          likeCount: data.like_count
        }
      });
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
