import React from "react";

export default class Post extends React.Component{
  render(){
    return(
      <div className="post">
          <div className="post-header">
          
          <div className="title">
              <a href="">网站更新中 ：）</a>
          </div>
          <div className="date">发布时间：2022-1-4</div>
          <div className="tags">标签分类：<a href="">维护信息</a></div>
          </div>   
          <div className="post-content">
              <p>👷‍♂️(我)正在对网站进行更新和维护，暂时下线3.0版本的网站。新的版本很快就可以上线，同时采用开发模式，确保可能的进度。</p>                      
              <p>同时，也祝看到这条消息的朋友，新年快乐</p> 
                                    
          </div>
      </div>
    )
  }
}