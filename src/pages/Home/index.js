import React from "react";
import Header from "../../components/header";
import Article from "../../components/article";
import SiderBar from "../../components/siderbar";
export default class APP extends React.Component{
  render(){
    return(
      <div className="Home main-left">
          <Article></Article>
          
      </div>
    )
  }
}