import React from "react";
import Post from "../post"
export default class Article extends React.Component{
  state = {
    articles:[],
  }
  componentDidMount() {
    fetch("/getPost?order=reverse&by=id&limit=5")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            articles: result.data
          }); 
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
      <div className="article">
        {
          this.state.articles.map(item =>
            (
              <Post key = {item.id} time={item.time} title={item.title} content={item.content} date={item.date} tag={item.tag}></Post>
            )  
          )
        }
      </div>
    )
  }
}