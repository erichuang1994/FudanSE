import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
var NewsData = function(id, name, location) {
  return {
    userlink: "u/12345",
    id: id,
    userName: name,
    userPhoto: "http://tse3.mm.bing.net/th?id=OIP.M85a3ed107ce53ffb158b1912965da846o0&w=78&h=78&c=7&pid=1.1",
    pictureUrl: "http://www.bing.com/th?id=OJ.Pg74LEGQi7DZ6A&pid=MSNJVFeeds",
    location: location,
    date: new Date()
    //countLike	: 0;
    //countComment : 0;
  }
};
var news1 = NewsData(1, "张宝华", "Hongkong");
var news2 = NewsData(2, "华莱士", "America");
var news3 = NewsData(3, "扬州少年", "China");
var news = [news1, news2, news3];
var genMenus = function(name, href, isactive, num) {
  return {name: name, href: href, isactive: isactive, num: num}
};
var menus = [
  genMenus("首页", "news", true, 0),
  genMenus("我的足迹", "news", false, 1),
  genMenus("消息", "messgae", false, 2)
];
ReactDOM.render(
  <App datas={{
  'menus': menus,
  'news': news
}}/>, document.getElementById('root'));
