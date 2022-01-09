import React from "react";
import MessageBox from "../messageBox";
import ListBox from "../listBox";
export default class SiderBar extends React.Component{
  state = {
    content : "网站正在努力制作中"
  }
  render(){
    return(
      <div className="siderbar main-right">

        <MessageBox title="NOTICE" content={this.state.content}></MessageBox>
        <ListBox></ListBox>
      </div>
    )
  }
}