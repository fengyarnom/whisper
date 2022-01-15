import React from "react";
import { Link } from "react-router-dom";
export default class Options extends React.Component{
  handleSign(e){
    e.preventDefault();
    let data = {redirect: '200'}
    let body = JSON.stringify(data, 1)
    fetch('/api/login',{
      method:'post',//改成post
      mode: 'cors',//跨域
      headers: {
      'Content-Type': 'application/json;charset=UTF-8'
      },
      body//向服务器发送的数据
      })
      .then(res=>res.json())
      .then(res=>{
        console.log(res)
        if(res['redirect'] == '200'){
          window.location.href = "/Admin";
        }else{
          window.location.href = "/Login";
        }
      })

    // 
    
  }
  render(){
    return(
      <div className="options">
        <li className="signIn">   
          <Link to="" onClick={this.handleSign.bind(this)}>登录</Link>
        </li>
      </div>
    )
  }
}