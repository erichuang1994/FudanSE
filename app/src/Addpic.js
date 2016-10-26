import React from 'react';
import 'purecss';
import 'purecss/build/grids-responsive-min.css';
import './base.css';
import './cards.css';
import './Map.css';
var Addpic = React.createClass( {
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
    var test  = document.getElementById("root");
    console.log(test);
    console.log(file);
    //prvbox.innerHTML = "";
    if (window.FileReader) { // html5方案
        for (var i=0, f; f = file.target.files[i]; i++) {
            var fr = new FileReader();
            fr.onload = function(e) {
                var src = e.target.result;
                if (!validateImg(src)) {
                    alert(tip)
                } else {
                    showPrvImg(src);
                }
            }
            fr.readAsDataURL(f);
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
 
    function showPrvImg(src) {
        var img = document.createElement("img");
        img.src = src;
        img.style.cssText = "height:100%;width:100%; left:10; right:10;";
        prvbox.appendChild(img);
    }
  },
  handleProfit:function(event) {
    var data = new FormData();

  },
  componentDidMount:function(){
    let ele = document.getElementById('files');
    ele.click();
  },
	render(){
		return (
        <div>
          <input id="files" type="file" onChange={this.previewImage} multiple="multiple" style={{display:'none',height:'0px',width:'0px'}}></input>
          <div id="prvid"></div>
        </div>
    );
	 }
});

export default Addpic;
