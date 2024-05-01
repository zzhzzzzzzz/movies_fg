import React from "react";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { observer } from "mobx-react";
import { Menu, Icon, Layout } from 'antd';


import { movieService as service } from "../../service/movie.js";
import { inject } from "../../utils/index.js";

import Label1 from '../../componet/list/label_list/year1_list';
import Label2 from '../../componet/list/label_list/year2_list';
import Label3 from '../../componet/list/label_list/year3_list';
import All from '../../componet/list/movies_list';



@inject({ service })
@observer
export default class extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      current: 'label4',
    };
  }

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { Header, Content } = Layout;

    return (
      <Layout className="layout">
        <Header style={{ padding: 0, height: 'auto' }}>
          <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="label4">
              <Link to='/label'>全部</Link>
            </Menu.Item>
            <Menu.Item key="label1">
              <Link to='/label/year1'>2000-至今</Link>
            </Menu.Item>
            <Menu.Item key="labe2" >
              <Link to='/label/year2'>90年代</Link>
            </Menu.Item>
            <Menu.Item key="label3">
              <Link to='/label/year3'>80年代</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0' }}>
          <Switch>
            <Route exact path="/label/year1" component={Label1}></Route>
            <Route exact path="/label/year2" component={Label2}></Route>
            <Route exact path="/label/year3" component={Label3}></Route>
            <Route component={All}></Route>
          </Switch>
        </Content>
      </ Layout>
    );
  }
}
