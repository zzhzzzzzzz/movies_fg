import React from "react";
import { Link, Redirect } from "react-router-dom";
import { userService as service } from "../service/user";
import { observer } from "mobx-react";
import { Carousel } from 'antd';

import img from "../img/background.jpg"

export default class Home extends React.Component {
  render() {
    return <_Home service={service} />
  }
}

@observer
class _Home extends React.Component {

  render() {
    return <Carousel autoplay>
      <div>
        <img src={img} alt="" width="100%" height="460px"/>
      </div>
      <div style={{ backgroundColor: "blue" }}>
        <img src={img} alt="" width="100%"  height="460px"/>
      </div>
    </Carousel>
  }
}