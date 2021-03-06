import React from "react";
import Post from "../post";
import cookie from 'react-cookies'
export default class MessageBox extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title:this.props.title,
      content:this.props.content,
      backColor:this.props.backColor,
      close:this.props.close,
      pid:this.props.pid
    }
  }
  close(){
    let closedMessage = cookie.load('closedMessage')
    closedMessage.push(this.state.pid)
    cookie.save('closedMessage',closedMessage)
    var box=document.getElementById(this.state.pid);
    box.remove();
  }
  render(){
    let closeButton;
    let titleShow;
    if(this.state.backColor === undefined){
      this.setState({
        backColor:'Light'
      })
    }

    if(this.state.close === undefined){
      closeButton = ''
    }else if(this.state.close == "True"){
      closeButton = '<button><svg t="1641311938676" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2118" width="200" height="200"><path d="M557.2 512l233.4-233.4c12.5-12.5 12.5-32.8 0-45.2s-32.8-12.5-45.2 0L512 466.8 278.6 233.4c-12.5-12.5-32.8-12.5-45.2 0s-12.5 32.8 0 45.2L466.8 512 233.4 745.4c-12.5 12.5-12.5 32.8 0 45.2 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.2l233.4 233.4c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.2L557.2 512z" p-id="2119"></path></svg></button>'
    }



    
    return(
      <div className={"messageBox "+this.state.backColor} id={this.state.pid}>
        <div className="header-box">
          <div className="title-header">{this.state.title}</div> 
          <div className="post-content" onClick={this.close.bind(this)} dangerouslySetInnerHTML={{__html: closeButton}}></div>
        </div>
        <Post content={this.state.content}></Post>
      </div>
    )
  }
}