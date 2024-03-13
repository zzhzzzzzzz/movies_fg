import React from "react";
import { Link, Redirect } from "react-router-dom";
import { userService as service } from "../service/user";
import { observer } from "mobx-react";
import { render } from "react-dom";


export default class Profile extends React.Component {
  render() {
    return <_Profile service={service} />
  }
}

@observer
class _Profile extends React.Component {
  handleClick(event) {
    event.preventDefault(); //阻止提交
    // this.props.service.logout()
    this.props.service.isLogin=false
  }
  render() {
    if (!this.props.service.isLogin) {
      return <Redirect to="/login" />
    }
    return <h2>
      欢迎您，亲爱的用户！
      <br />
      用户名：{this.props.service.uname}
      <br />
      邮箱：3306@qq.com
      <br/>
      性别：男
      <br />
      生日：2002/2/11
      <br />
      <br />
      <br />
      <a onClick={this.handleClick.bind(this)}>[退出登录]</a>
    </h2>
  }
}