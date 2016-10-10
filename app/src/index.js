import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import News from './News'
import './index.css';
var NewsData = {
	userName	: "user1",
	userPhoto	: "http://tse3.mm.bing.net/th?id=OIP.M85a3ed107ce53ffb158b1912965da846o0&w=78&h=78&c=7&pid=1.1",
	pictureUrl	: "http://www.bing.com/th?id=OJ.Pg74LEGQi7DZ6A&pid=MSNJVFeeds",
	location	: "ZJ",
	date		: new Date()
	//countLike	: 0;
	//countComment : 0;
};

//	for demo
var news1 = Object.create(NewsData);
var news2 = Object.create(NewsData);
var news3 = Object.create(NewsData);
var news = [news1, news2, news3];
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
ReactDOM.render(
	<News data={news}></News>,
	document.getElementById('content')
);
