import React from "react";
export default class Login extends React.Component{
    state = {
        username:'',
        password:''
    }
  render(){
    return(
      <div className="login">
        <div className="login-box">
            <div className="header-login">
                登录
            </div>
            <form action="">
                <div className="item">
                    <span>用户名：</span>
                    <input type="text" value={this.state.username} placeholder="username" onChange=""/>
                </div>
                <div className="item">
                    <span>密码：</span>
                    <input type="password" value={this.state.password} placeholder="password"/>
                </div>
                <div className="item">
                    <button>登录</button>
                </div>
            </form>
        </div>
      </div>
    )
  }
}