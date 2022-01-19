import React from "react";
export default class Admin extends React.Component{
  constructor(props){
    super(props)
    this.handleSelect = this.handleSelect.bind(this);
  }
  state = {
    title:'',
    content:'',
    tag:'',
    postClass:'post'
  }
  handlePost(e){
    e.preventDefault();
    let data = {
      title: this.state.title,
      content:this.state.content,
      tag:this.state.tag,
      postClass:this.state.postClass
    }
    let body = JSON.stringify(data, 1)
    fetch('/newPost',{
      method:'post',//改成post
      mode: 'cors',//跨域
      headers: {
      'Content-Type': 'application/json;charset=UTF-8'
      },
      body//向服务器发送的数据
      })
      .then(res=>res.json())
      .then(res=>{
        console.log(res)
      })  
  }
  handleSelect(e) {
    this.setState({postClass: e.target.value});
  }
  render(){
    return(
      <div className="Admin">
          <form action="">
            title:
            <input type="text" value={this.state.title} onChange={e => this.setState({title:e.target.value})}/>
            <textarea name="" id="" cols="30" rows="10" value={this.state.content} onChange={e => this.setState({content:e.target.value})}></textarea>
            tag:
            <input type="text" value={this.state.tag} onChange={e => this.setState({tag:e.target.value})}/>
            <select value={this.state.postClass} onChange={this.handleSelect}>
                <option value="post">文章</option>
                <option value="notice">通告</option>
            </select>

            <button onClick={this.handlePost.bind(this)}>Send</button>
          </form>
      </div>
    )
  }
}