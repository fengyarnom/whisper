import React from "react";

export default class ListBox extends React.Component{
  constructor(props){
    super(props)

  }

  render(){
    return(
      <div className="listBox">
            <div className="header-box">
                <div className="title-header">{this.props.title}</div>
            </div>
            <div className="content-box">
                
                {
                  this.props.content.map(item =>
                    (
                      <a href="" key={item.id}>{item.title} </a>
                    )  
                  )
                }
            </div>
            
      </div>
    )
  }
}