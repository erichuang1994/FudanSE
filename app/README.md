## Fetch Example

#### POST with Json


```javascript
var payload = {
  username: this.refs.username.value,
  password: this.refs.password.value
};
var data = new FormData();
data.append( "json", JSON.stringify( payload ) );
fetch("/api/login",
      {
  method: "POST",
  body: data,
})
  .then(function(res){
  if(res.status === 200){
    this.props.loginfunc();
  }else{
    alert("密码错误");
  } });
```
### POST with normal body

```javascript
fetch(url, {  
    method: 'post',  
    headers: {  
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
    },  
    body: 'foo=bar&lorem=ipsum'  
  })
  .then(function(res){
  if(res.status === 200){
    this.props.loginfunc();
  }else{
    alert("密码错误");
  } });
```

For this project

1. npm install to install dependency
2. npm start to see live demo

#### HTTP status code

http://harttle.com/2015/08/15/http-status-code.html 

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
