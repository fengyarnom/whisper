import React from "react";
import MessageBox from "../../components/messageBox";
export default class Login extends React.Component{
  state = {
      username:'',
      password:'',
  }
  handleSign(e){
    e.preventDefault();
    let data = {username: this.state.username,password:this.state.password}
    let body = JSON.stringify(data, 1)
    fetch('/login',{
      method:'post',//改成post
      mode: 'cors',//跨域
      headers: {
      'Content-Type': 'application/json;charset=UTF-8'
      },
      body//向服务器发送的数据
      })
      .then(res=>res.json())
      .then(res=>{
        if(res['status'] == 'Pass'){
          window.location.href = "/Admin";
        }
        else if(res['status'] == 'Error'){

        }
      })

    // 
    
  }
  render(){

    return(

      <div className="login main-left">
        <div className="login-box">
            <div className="header-login">
            登录你的帐号🙈
            </div>
            
            <form action="#">
                
                <div className="item">
                    <input type="text" name="username" value={this.state.username} placeholder="用户名" 
                    onChange={e => this.setState({username:e.target.value})}/>
                </div>
                <div className="item">
                    <input type="password" value={this.state.password} placeholder="密码" 
                    onChange={e => this.setState({password:e.target.value})}/>
                </div>
                <div className="item">
                    <button onClick={this.handleSign.bind(this)}>登录</button>
                </div>
            </form>
        </div>
      </div>
    )
  }
  
  

}