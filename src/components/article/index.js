import React from "react";
import Post from "../post"
export default class Article extends React.Component{
  state = {
    articles:[
      // {
      //   'title':'日月忽其不奄兮，春与秋其代序',
      //   'content':'<p>圆儿电写解效干上，是月规支行与土，矿更苏了力真。 术却动回响则支王战以，步达果劳省如参商又规，连识1集也伯动权。</p>',
      //   'tag':'默认',
      //   'date':'2022-1-8'
      // },
      // {
      //   'title':'Hello World',
      //   'content':'<p>圆儿电写解效干上，是月规支行与土，矿更苏了力真。 术却动回响则支王战以，步达果劳省如参商又规，连识1集也伯动权。</p>',
      //   'tag':'默认',
      //   'date':'2022-1-8'
      // },
    ],
    b:{}
  }
    componentDidMount() {
    fetch("/api/getPostByTime")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            articles: result.data
          });
          console.log(this.state.articles)
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
        
      </div>
    )
  }
}