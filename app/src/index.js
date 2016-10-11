import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import News from './News';
import Topbar from './Topbar';
import './index.css';
var NewsData = function(id){return {
  userlink:"u/12345",
  id:id,
	userName	: "user1",
	userPhoto	: "http://tse3.mm.bing.net/th?id=OIP.M85a3ed107ce53ffb158b1912965da846o0&w=78&h=78&c=7&pid=1.1",
	pictureUrl	: "http://www.bing.com/th?id=OJ.Pg74LEGQi7DZ6A&pid=MSNJVFeeds",
	location	: "ZJ",
	date		: new Date()
	//countLike	: 0;
	//countComment : 0;
}};

//	for demo
var news1 = NewsData(1);
var news2 = NewsData(2);
var news3 = NewsData(3);
var news = [news1, news2, news3];
var genMenus = function(name,href){return {name:name,href:href}};
var menus = [genMenus("广场","news"),genMenus("消息","messgae")];
ReactDOM.render(
  <Topbar menus={menus}/>,
  document.getElementById('root')
);
ReactDOM.render(
	<News data={news}></News>,
	document.getElementById('content')
);
