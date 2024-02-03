import React from "react";
import { Link, Redirect } from "react-router-dom";
import '../css/login.css';
import {userService as service} from "../service/user";
import { observer } from "mobx-react";
import { render } from "react-dom";

// const service= new UserService();

export default class Login extends React.Component{
  render(){
    return <_Login service={service} />
  }
}

@observer
class _Login extends React.Component{
  handleClick(event){
    event.preventDefault(); //阻止提交
    console.log("click")
    // 连接到服务器端进行用户名和密码的验证等待回复
    // 组件中只要收集用户名和密码就可以了，验证交给 服务层Service层
    // service.login() //service是全局变量，对于组件用props
    const [username,password]=event.target.form
    console.log(username.value,password.value);
    this.props.service.login(username.value,password.value); //将视图层获取的数据传递到service层
  }
  render(){
    if (this.props.service.isLogin){
      console.log(this.props.service.isLogin)
      return <Redirect to="/profile" />
    }
      return (<div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="用户名" defaultValue='zzh1'/>
            <input type="password" placeholder="密码" defaultValue='abc' />
            <button onClick={this.handleClick.bind(this)}>登录</button>
            <p className="message">未注册?<Link to="/reg">请注册</Link></p>
          </form>
        </div>
    </div>)
  }
}