import React from "react";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { observer } from "mobx-react";
import { Menu, Icon, Layout } from 'antd';


import { movieService as service } from "F:/vscode/毕设/my-app/src/service/movie.js";
import { inject } from "F:/vscode/毕设/my-app/src/utils/index.js";

import Label1 from 'F:/vscode/毕设/my-app/src/componet/list/label_list/kind1_list';
import Label2 from 'F:/vscode/毕设/my-app/src/componet/list/label_list/kind2_list';
import Label3 from 'F:/vscode/毕设/my-app/src/componet/list/label_list/kind3_list';
import Label4 from 'F:/vscode/毕设/my-app/src/componet/list/label_list/kind4_list';
import Label5 from 'F:/vscode/毕设/my-app/src/componet/list/label_list/kind5_list';
import Label6 from 'F:/vscode/毕设/my-app/src/componet/list/label_list/kind6_list';
import Label7 from 'F:/vscode/毕设/my-app/src/componet/list/label_list/kind7_list';
import Label8 from 'F:/vscode/毕设/my-app/src/componet/list/label_list/kind8_list';
import All from 'F:/vscode/毕设/my-app/src/componet/list/movies_list';



@inject({ service })
@observer
export default class extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      current: 'label',
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
            <Menu.Item key="label">
              <Link to='label1'>全部</Link>
            </Menu.Item>
            <Menu.Item key="label1">
              <Link to='/label1/kind1'>剧情</Link>
            </Menu.Item>
            <Menu.Item key="labe2" >
              <Link to='/label1/kind2'>动画</Link>
            </Menu.Item>
            <Menu.Item key="label3">
              <Link to='/label1/kind3'>喜剧</Link>
            </Menu.Item>
            <Menu.Item key="label4">
              <Link to='/label1/kind4'>动作</Link>
            </Menu.Item>
            <Menu.Item key="label5">
              <Link to='/label1/kind5'>爱情</Link>
            </Menu.Item>
            <Menu.Item key="label6">
              <Link to='/label1/kind6'>科幻</Link>
            </Menu.Item>
            <Menu.Item key="label7">
              <Link to='/label1/kind7'>奇幻</Link>
            </Menu.Item>
            <Menu.Item key="label8">
              <Link to='/label1/kind8'>冒险</Link>
            </Menu.Item>
            <Menu.Item key="label9">
              <Link to='/label1/kinds'>更多</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0' }}>
          <Switch>
            <Route exact path="/label1/kind1" component={Label1}></Route>
            <Route exact path="/label1/kind2" component={Label2}></Route>
            <Route exact path="/label1/kind3" component={Label3}></Route>
            <Route exact path="/label1/kind4" component={Label4}></Route>
            <Route exact path="/label1/kind5" component={Label5}></Route>
            <Route exact path="/label1/kind6" component={Label6}></Route>
            <Route exact path="/label1/kind7" component={Label7}></Route>
            <Route exact path="/label1/kind8" component={Label8}></Route>
            <Route exact path="/label1/kinds" component={All}></Route>
            <Route component={All}></Route>
          </Switch>
        </Content>
      </ Layout>
    );
  }
}
