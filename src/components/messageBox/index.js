import React from "react";
import Post from "../post";
export default class MessageBox extends React.Component{
  render(){
    return(
      <div className="messageBox">
        <div className="header-box">
          <div className="title-header">NOTICE</div>
          <button><svg t="1641311938676" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2118" width="200" height="200"><path d="M557.2 512l233.4-233.4c12.5-12.5 12.5-32.8 0-45.2s-32.8-12.5-45.2 0L512 466.8 278.6 233.4c-12.5-12.5-32.8-12.5-45.2 0s-12.5 32.8 0 45.2L466.8 512 233.4 745.4c-12.5 12.5-12.5 32.8 0 45.2 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.2l233.4 233.4c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.2L557.2 512z" p-id="2119"></path></svg></button>
        </div>
        <Post></Post>
      </div>
    )
  }
}