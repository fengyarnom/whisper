import React from "react";
import MessageList from "../messageList";
import ListBox from "../listBox";
import cookie from 'react-cookies'
export default class SiderBar extends React.Component{
  constructor(props){
    super(props)
    
  }
  state = {
    recentPost:[],
    noticeList:[]
  }
  componentDidMount(){
    fetch("/getPost?order=reverse&by=id&limit=10")
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

    fetch("/getNotice?order=reverse&by=id")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          noticeList: result.data
        }); 
        console.log(this.state.noticeList)
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
        <MessageList messageList={this.state.noticeList}></MessageList>
        <ListBox title="RECENT POSTS" content={this.state.recentPost}></ListBox> 
        
      </div>
    )
  }
}