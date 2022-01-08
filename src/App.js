import React from "react";
import Header from "./components/header";
import Home from "./pages/Home"
export default class APP extends React.Component{
  render(){
    return(
      <div className="App">
        <Header></Header>
        <Home></Home>
      </div>
    )
  }
}
