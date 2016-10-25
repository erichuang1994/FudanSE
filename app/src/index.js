import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import newsdata from '../public/newsdata'
var personal = [newsdata[2]];
var genMenus = function(name, href, isactive, num) {
  return {name: name, href: href, isactive: isactive, num: num}
};
var menus = [
  genMenus("首页", "news", true, 0),
  genMenus("我的足迹", "news", false, 1),
  genMenus("个人中心", "messgae", false, 2)
];

ReactDOM.render(
	<App datas={{'menus':menus,'news':newsdata, 'personal':personal}}/>,
	document.getElementById('root')
);
