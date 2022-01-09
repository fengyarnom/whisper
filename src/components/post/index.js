import React from "react";

export default class Post extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title:this.props.title,
      date:this.props.date,
      tag:this.props.tag,
      content:this.props.content,
    }
  }
  render(){
    return(
      <div className="post">
          <div className="post-header">
          
          <div className="title">
              <a href="">{this.state.title}</a>
          </div>
          <div className="date">发布时间：{this.state.date}</div>
          <div className="tags">标签分类：<a href="">{this.state.tag}</a></div>
          </div>   
          <div className="post-content" dangerouslySetInnerHTML={{__html: this.state.content}}> 
            
          </div>
      </div>
    )
  }
}