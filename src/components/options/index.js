import React from "react";
import { Link } from "react-router-dom";
export default class Options extends React.Component{
  render(){
    return(
      <div className="options">
        <li className="signIn">   
          <Link to="/Login">登录</Link>
        </li>
      </div>
    )
  }
}