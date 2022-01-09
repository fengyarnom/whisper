import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from "./components/header";
import Home from "./pages/Home"
import Login from "./pages/Login";
export default class APP extends React.Component{
  render(){
    return(
      <div className="App">
        <Router>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Login' element={<Login/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}
