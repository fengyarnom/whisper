import React from "react";
import MessageBox from "../messageBox";
import ListBox from "../listBox";
export default class SiderBar extends React.Component{
  render(){
    return(
      <div className="siderbar">

        <MessageBox></MessageBox>
        <ListBox></ListBox>
      </div>
    )
  }
}