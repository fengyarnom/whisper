import React from "react";
import NavBar from "../navBar";
export default class Header extends React.Component{
  render(){
    return(
      <div className="app-header">
        <NavBar></NavBar>
      </div>
    )
  }
}
