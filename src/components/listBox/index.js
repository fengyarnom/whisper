import React from "react";

export default class ListBox extends React.Component{
  render(){
    return(
      <div className="listBox">
            <div className="header-box">
                <div className="title-header">RECENT POSTS</div>
            </div>
            <div className="content-box">
                <a href="">item</a>
                <a href="">itemasdasdasdasdasdasasdaadasds</a>
                <a href="">itemasdasdasdasdasdasasdaadasds</a>
                <a href="">itemasdasdasdasdasdasasdaadasds</a>
                <a href="">你好，世界</a>
            </div>
      </div>
    )
  }
}