import React from 'react';
import 'purecss';
import 'purecss/build/grids-responsive-min.css';
import '../css/base.css';
import '../css/cards.css';
import '../css/Map.css';
import '../css/mods.css';
import { Link } from 'react-router';


var imgsrc;

var Addpic = React.createClass( {

    getInitialState: function() {
    return {addCity: false};
  },

  previewImage:function(file, prvid="prvid"){
    /* file：file控件
     * prvid: 图片预览容器
     */
    var tip = "Expect jpg or png or gif!"; // 设定提示信息
    var filters = {
        "jpeg"  : "/9j/4",
        "gif"   : "R0lGOD",
        "png"   : "iVBORw"
    }
    var prvbox = document.getElementById(prvid);
    //var test  = document.getElementById("root");
    var pic = document.getElementById("files");

    //console.log(test);
    //console.log(file);
    //console.log(pic.value);
    //prvbox.innerHTML = "";
    var picname = pic.value;
    if (window.FileReader) { // html5方案
        for (var i=0, f; f = file.target.files[i]; i++) {
            var fr = new FileReader();
            fr.onload = function(e) {
                var src = e.target.result;
                //var src = fr.result;
                
                if (!validateImg(src)) {
                    alert(tip);
                    showPrvImg("");
                } else {
                    
                    showPrvImg(picname);
                    this.setCityTrue();
                }
            }.bind(this);
            fr.readAsDataURL(f);
            //sleep(5000);
            //imgsrc = fr.result;
            //console.log(f);
            imgsrc = f;
            //console.log(fr.result);
            //console.log(fr);
        }
    } else { // 降级处理
        if ( !/\.jpg$|\.png$|\.gif$/i.test(file.value) ) {
            alert(tip);
        } else {
            showPrvImg(file.value);
        }
    }


    function validateImg(data) {
        var pos = data.indexOf(",") + 1;
        for (var e in filters) {
            if (data.indexOf(filters[e]) === pos) {
                return e;
            }
        }
        return null;
    }

    function showPrvImg(name) {
        prvbox.innerText = name;
    }



  },
  handleProfit:function(event) {
    var data = new FormData();

  },
  roadPic:function(){
    var ele = document.getElementById('files');
    ele.click();
  },

  setCityTrue:function(){
    this.setState({addCity: true});
  },
  handleAddCity:function(){
    var data = new FormData();
    //data.append("cityname",this.refs.cityname.value);
    fetch("/api/user/cities/" + this.refs.cityname.value, {
      credentials: 'include',
      method: 'post',
      body: data
    })
    .then(function(res){
    if(res.status === 200){
      alert("添加城市成功");
      //this.setState({addCity:false});
    }else if(res.status === 401){
      alert("添加城市不成功");
      //this.setState({addCity:false});
    }});
    // console.log(localStorage.getItem('username'));
    //this.setState({addCity:false});
  },
  handleAddPic:function(){
    var data = new FormData();
    var city = this.refs.cityname.value;
    this.handleAddCity();
    data.append("description","");
    data.append("picture",imgsrc);
    //console.log(imgsrc);
    fetch("/api/user/cities/" + city + "/pictures", {
      credentials: 'include',
      method: 'post',
      body: data
    })
    .then(function(res){
    if(res.status === 200){
      alert("发布成功");
      //this.setState({addPic:false});
    }else if(res.status === 401){
      alert("发布不成功");
      //this.setState({addic:false});
    }});
    // console.log(localStorage.getItem('username'));
    //this.setState({addPic:false});
  },
  cancelAddCity:function(){
    this.setState({addCity:false});
  },


	render(){



		return (
            <div>
                {/*
                <div>
                    <Link to="/map" className="iconf iconf_navbar_back">返回</Link>
                </div>
                */}
                <div className="mapbox">
                    <button className="base-button" onClick={this.roadPic}>添加照片</button>                  
                </div>

                <div className="mapbox">
                  <input id="files" type="file" onChange={this.previewImage} multiple="multiple" style={{display:'none',height:'5px',width:'0px'}}></input>
                  <p style={{color: '#fff'}}>s</p>
                  <p id="prvid"></p>
                </div>

                {this.state.addCity ? (
                    <div className="fixed-center" >
                      <input className="base-input" ref="cityname" type="text" placeholder="输入城市名"/>
                      <Link to="/map"  className="base-button pure-button pure-button-primary" onClick={this.handleAddPic}>发布</Link>
                        {/* <button  className="base-button pure-button pure-button-primary" onClick={()=>this.setState({addCity:false})}>取消</button> */}
                    </div>
                  ) :
                null}
            </div>
        );
	 }
});

export default Addpic;
