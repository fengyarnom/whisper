import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from "./components/header";
import Home from "./pages/Home"
import Login from "./pages/Login";
import SiderBar from "./components/siderbar";
export default class APP extends React.Component{
  render(){
    return(
      <div className="App">
        <Header></Header>
          <div className="main">
            <Routes>
              <Route path='/Login' element={<Login/>} />
              <Route path='*' element={<Home/>} />
              
            </Routes>
            <SiderBar></SiderBar>
          </div>
      </div>
    )
  }
}
