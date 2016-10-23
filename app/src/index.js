import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var NewsData = function(name, location,picUrl,userPhotoUrl) {
  return {
    userlink: "u/12345",
    userName: name,
    userPhoto: userPhotoUrl,
    pictureUrl: picUrl,
    location: location,
    date: new Date()
    //countLike	: 0;
    //countComment : 0;
  }
};
var news1 = NewsData("张宝华", "Hongkong","https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/3675/SITours/hong-kong-island-half-day-tour-in-hong-kong-114439.jpg","http://a1.att.hudong.com/51/81/01300543677571145377814328062_s.jpg");
var news2 = NewsData("华莱士", "America","http://dn-joyintour.qbox.me/images/20160707/577e0eba186fb.jpg","http://a2.att.hudong.com/05/35/01100000000000144738353445402_s.jpg");
var news3 = NewsData("扬州少年", "China","http://www.yztm.net/Images/5839dbb0-35b1-467d-a91c-07fc1042e723.jpg","http://photocdn.sohu.com/20111227/Img330426899.jpg");
var news = [news1, news2, news3];
var personal = [news3];
var genMenus = function(name, href, isactive, num) {
  return {name: name, href: href, isactive: isactive, num: num}
};
var menus = [
  genMenus("首页", "news", true, 0),
  genMenus("我的足迹", "news", false, 1),
  genMenus("个人中心", "messgae", false, 2)
];

ReactDOM.render(
	<App datas={{'menus':menus,'news':news, 'personal':personal}}/>,
	document.getElementById('root')
);
