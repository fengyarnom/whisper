import React from "react";
import Post from "../post"
export default class Article extends React.Component{
  render(){
    return(
      <div className="article">
        <Post></Post>
        <Post></Post> 
      </div>
    )
  }
}