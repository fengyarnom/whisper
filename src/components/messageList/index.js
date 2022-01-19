import React from "react";
import MessageBox from "../messageBox";
import cookie from 'react-cookies'
export default class MessageList extends React.Component{
  render(){
    if(document.cookie.indexOf('closedMessage') == -1){
      let closedMessage = [];
      cookie.save('closedMessage',closedMessage)
    }
    return(
        <div className="messageList">
            {
               this.props.messageList.map(item => 
                cookie.load('closedMessage').includes(item.pid)
                ?('')
                :(<MessageBox key={item.pid} pid ={item.pid} title="NOTICE" content={item.content} backColor="Warning" close="True"></MessageBox>)
                
              )
            }    
        </div>

        
    )
  }
}