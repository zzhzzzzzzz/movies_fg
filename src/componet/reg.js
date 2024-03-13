import React from "react";
import { Link,Redirect } from "react-router-dom/cjs/react-router-dom.min";
import '../css/login.css';
import {userService as service} from "../service/user";
import { observer } from "mobx-react";
import { message } from "antd";

// const service= new UserService();
export default class Reg extends React.Component{
  render(){
    return <_Reg service={service} />
  }
}

@observer
class _Reg extends React.Component{
  validate(pwd,confirmpwd){
    if (pwd.value==confirmpwd.value){
      return true;
    }else{
      confirmpwd.focus();
      message.warning('两次输入的密码不一致！',3)
      return false;
    }
  }
  handleClick(e){
    e.preventDefault();
    const form=e.target.form;
    const [username,email,password,confirmpwd]=form;
    if (this.validate(password,confirmpwd))
      this.props.service.reg(username.value,email.value,password.value,confirmpwd.value)
  }
  render(){
    if (this.props.service.isReg){
      console.log(this.props.service.isReg,"========")
      return <Redirect to="/login" />
    }
    if (this.props.service.isLogin){
      console.log(this.props.service.isLogin)
      return <Redirect to="/profile" />
    }
    return (<div className="login-page">
      <div className="form">
        <form className="register-form">
          <input type="text" placeholder="用户名"/>
          <input type="text" placeholder="邮箱"/>
          <input type="password" placeholder="密码"/>
          <input type="password" placeholder="确认密码"/>
          <button onClick={this.handleClick.bind(this)}>创建用户</button>
          <p className="message">已注册?<Link to='/login'>去登录</Link></p>
        </form>
      </div>
    </div>)
  }
}