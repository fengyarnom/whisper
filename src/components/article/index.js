import React from "react";
import Post from "../post"
export default class Article extends React.Component{
  state = {
    articles:[
      {
        'title':'Hello World',
        'content':'<p>圆儿电写解效干上，是月规支行与土，矿更苏了力真。 术却动回响则支王战以，步达果劳省如参商又规，连识1集也伯动权。</p>',
        'tag':'默认',
        'date':'2022-1-8'
      },
      {
        'title':'Hello World',
        'content':'<p>圆儿电写解效干上，是月规支行与土，矿更苏了力真。 术却动回响则支王战以，步达果劳省如参商又规，连识1集也伯动权。</p>',
        'tag':'默认',
        'date':'2022-1-8'
      },
    ]
  }
  render(){
    return(
      <div className="article">
        {
          this.state.articles.map(item =>
            (
              <Post title={item.title} content={item.content} date={item.date} tag={item.tag}></Post>
            )  
          )
        }
      </div>
    )
  }
}