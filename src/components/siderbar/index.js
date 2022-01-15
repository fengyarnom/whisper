import React from "react";
import MessageBox from "../messageBox";
import ListBox from "../listBox";
export default class SiderBar extends React.Component{
  state = {
    content:'你好',
    recentPost:[]
  }
  componentDidMount(){
    fetch("/api/getPost?order=reverse&by=id&limit=10")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          recentPost: result.data
        }); 
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
  }

  render(){
    return(
      <div className="siderbar main-right">
        <MessageBox title="NOTICE" content={this.state.content} backColor="Warning" close="True"></MessageBox> 
        <ListBox title="RECENT POSTS" content={this.state.recentPost}></ListBox> 
        
      </div>
    )
  }
}