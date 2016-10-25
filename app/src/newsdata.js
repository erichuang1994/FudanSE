var NewsData = function(name, location, picUrl, userPhotoUrl) {
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
const news1 = NewsData("张宝华", "Hongkong", "./img/Hongkong.jpg", "./avator/baohua.jpg");
const news2 = NewsData("华莱士", "America", "./img/Hawaii.jpg", "./avator/Wallace.jpg");
const news3 = NewsData("扬州少年", "China", "./img/yangzhou.jpg", "./avator/ha.jpg");
const sh1 = NewsData("扬州少年", "Shanghai", "./img/shanghai1.jpg", "./avator/ha.jpg");
const sh2 = NewsData("扬州少年", "Shanghai", "./img/shanghai2.jpg", "./avator/ha.jpg");
const sh3 = NewsData("扬州少年", "Shanghai", "./img/shanghai3.jpg", "./avator/ha.jpg");
var newsdata = [news1, news2, news3];
var shanghai = [sh1, sh2, sh3];
export {
  newsdata,
  shanghai,
  news1,
  news2,
  news3,
  sh1,
  sh2,
  sh3
};
