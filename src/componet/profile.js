import React from "react";
import { Link, Redirect } from "react-router-dom";
import { userService as service } from "../service/user";
import { observer } from "mobx-react";
import { render } from "react-dom";
import { Card, Avatar, Icon } from 'antd';


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
    this.props.service.isLogin = false
  }
  render() {
    const { Meta } = Card;
    if (!this.props.service.isLogin) {
      return <Redirect to="/login" />
    }
    return <div style={{ padding: '20px' }}>
      <Card title="欢迎您，亲爱的用户！" bordered={false}>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={this.props.service.uname}
          description=<p><Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" /> Online</p>
        />
        <br />
        <p>用户名：{this.props.service.uname}</p>
        <p>性别：男</p> 
        <p>邮箱：3306@qq.com</p>
        <p>生日：2002/2/11</p>
        <br />
        <br />
        <br />
        <a onClick={this.handleClick.bind(this)}><Icon type="logout" /> 退出登录</a>
      </Card >
    </div>
  }
}