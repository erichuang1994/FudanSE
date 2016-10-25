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
const news1 = NewsData("张宝华", "Hongkong","./img/Hongkong.jpg","http://a1.att.hudong.com/51/81/01300543677571145377814328062_s.jpg");
const news2 = NewsData("华莱士", "America","./img/Hawaii.jpg","http://a2.att.hudong.com/05/35/01100000000000144738353445402_s.jpg");
const news3 = NewsData("扬州少年", "China","./img/yangzhou.jpg","http://photocdn.sohu.com/20111227/Img330426899.jpg");
const sh1 = NewsData("张宝华", "Hongkong","./img/shanghai1.jpg","http://a1.att.hudong.com/51/81/01300543677571145377814328062_s.jpg");
const sh2 = NewsData("华莱士", "America","./img/shanghai2.jpg","http://a2.att.hudong.com/05/35/01100000000000144738353445402_s.jpg");
const sh3 = NewsData("扬州少年", "China","./img/shanghai3.jpg","http://photocdn.sohu.com/20111227/Img330426899.jpg");
var newsdata = [news1, news2, news3];
var shanghai = [sh1, sh2, sh3];
var fuck = 1;
export {newsdata,shanghai,news1,news2,news3,sh1,sh2,sh3};
