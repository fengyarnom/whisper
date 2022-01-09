import React from "react";
import MessageBox from "../../components/messageBox";
export default class Login extends React.Component{
  state = {
      username:'',
      password:''
  }

  render(){
    return(
      <div className="login main-left">
        <div className="login-box">
            <div className="header-login">
            登录你的帐号🙈
            </div>
            
            <form action="">

                <div className="item">
                    <input type="text" name="username" value={this.state.username} placeholder="用户名" 
                    onChange={e => this.setState({username:e.target.value})}/>
                </div>
                <div className="item">

                    <input type="password" value={this.state.password} placeholder="密码" 
                    onChange={e => this.setState({password:e.target.value})}/>
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