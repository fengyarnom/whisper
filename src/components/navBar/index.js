import React from "react";
import Logo from "../logo";
import NavList from "../navList";
import Options from "../options";
export default class NavBar extends React.Component{
  render(){
    return(
      <div className="navBar">
    
        <Logo></Logo>
        <NavList></NavList>
        <Options></Options>
      </div>
    )
  }
}