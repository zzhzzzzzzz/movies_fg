import React, { Children } from 'react';   //主模块
import { render } from 'react-dom';  //dom树模块
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Login from './componet/login';
import Reg from './componet/reg';
import Profile from './componet/profile';

import Detail1 from './componet/detail/week_detail';
import Detail2 from './componet/detail/box_office_detail';
import Detail3 from './componet/detail/hot_detail';
import Detail4 from './componet/detail/search_detail';
import Detail5 from './componet/detail/top_detail';

import List1 from './componet/list/week_list ';
import List2 from './componet/list/box_office_list';
import List3 from './componet/list/hot_list';
import List4 from './componet/list/search_list';
import List5 from './componet/list/top_list ';

import Pie from './componet/charts/pie'
import Hist from './componet/charts/hist'
import Bar from './componet/charts/bar';
import cloud from './componet/charts/cloud';
import Line from './componet/charts/line';

import img1 from "./img/spider3.png"
import img2 from "./img/title.png"

import { Layout, Menu, Icon, ConfigProvider, message } from 'antd';
import { Row, Col } from 'antd';

import zhCN from "antd/es/locale/zh_CN"
import Home from './componet/home';
import Search from './componet/search';




const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout; //const声明必须放在所以import的后面




const About = props => <h2>About</h2>
const Default = props => <h2 style={{ textAlign: 'center', marginTop: '100px' }}>404 Not Found</h2>
const Always = props => <div><hr /><h3>System Design ©2024 Created by Mr.Z</h3></div>



class App extends React.Component {
  state = {
    current: 'home',
  };
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return <Router>
      <div>
        <Layout className="layout">
          <Header style={{ padding: "0", background: "white" }}>
            <Row>
              <Col span={5} >
                <div>
                  <img src={img1} alt="" width="30" height="auto" style={{ margin: "0 3px 0 15px" }} />
                  <img src={img2} alt="" width="190" height="auto" />
                </div>
              </Col>
              <Col span={10}>
                <Menu onClick={this.handleClick}
                  defaultSelectedKeys={this.state.current}
                  mode="horizontal"
                  theme='light'
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="img" disabled='True'>
                  </Menu.Item>
                  <Menu.Item key="home"><Link to="/index"><Icon type="home" />首页</Link></Menu.Item>
                  <Menu.Item key="login"><Link to="/login"><Icon type="login" />登录</Link></Menu.Item>
                  <Menu.Item key="reg"><Link to="/reg"><Icon type="form" />注册</Link></Menu.Item>
                  <Menu.Item key="about"><Link to="/about"><Icon type="question-circle" />关于</Link></Menu.Item>
                </Menu>
              </Col>
              <Col span={5} offset={3}>
                <div style={{ margin: '16px 0 0 0' }}><Search /></div>
              </Col>
            </Row>
          </Header>
          <Layout>
            <Sider width={280} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="area-chart" />
                      数据视图
                    </span>
                  }
                >
                  <Menu.Item key="p1"><Link to="/pie">主要地区电影发布数量-环形图</Link></Menu.Item>
                  <Menu.Item key="l1"><Link to="/hist">电影时长分布-直方图</Link></Menu.Item>
                  <Menu.Item key="b1"><Link to="/bar">电影类型发布数量-柱状图</Link></Menu.Item>
                  <Menu.Item key="li1"><Link to="/line">年度电影发布数量-折线图</Link></Menu.Item>
                  <Menu.Item key="c1"><Link to="/cloud">搜索关键词词云-词云图</Link></Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="star" />
                      最新上映
                    </span>
                  }
                >
                  <Menu.Item key="2"><Link to="/hot/list">正在热映</Link></Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="fire" />
                      热门影片
                    </span>
                  }
                >
                  <Menu.Item key="13"><Link to="/top/list">豆瓣高分榜</Link></Menu.Item>
                  <Menu.Item key="3"><Link to="/week/list">一周口碑榜</Link></Menu.Item>
                  <Menu.Item key="31"><Link to="/box_office/list">北美票房榜</Link></Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <Icon type="cloud-server" />
                      服务支持
                    </span>
                  }
                >
                  <Menu.Item key="4">option2</Menu.Item>
                </SubMenu>
              </Menu>

            </Sider>
            <Layout style={{ padding: '10px 0 0 10px' }}>
              <Content style={{
                background: '#fff',
                padding: 7,
                margin: 0,
                minHeight: 400,
              }}>
                <Switch>
                  <Route exact path="/about"><About /></Route>
                  <Route exact path={["/", '/index']} component={Home}></Route>
                  <Route strict path='/login' component={Login}></Route>
                  <Route strict path='/reg' component={Reg}></Route>
                  <Route strict path='/profile' component={Profile}></Route>
                  <Route strict path='/pie' component={Pie}></Route>
                  <Route strict path='/hist' component={Hist}></Route>
                  <Route strict path='/bar' component={Bar}></Route>
                  <Route strict path='/line' component={Line}></Route>
                  <Route strict path='/cloud' component={cloud}></Route>
                  <Route strict path='/week/list' component={List1}></Route>
                  <Route strict path='/box_office/list' component={List2}></Route>
                  <Route strict path='/hot/list' component={List3}></Route>
                  <Route strict path='/top/list' component={List5}></Route>
                  <Route strict path='/movies/week/:id' component={Detail1}></Route>
                  <Route strict path='/movies/hot/:id' component={Detail3}></Route>
                  <Route strict path='/movies/box_office/:id' component={Detail2}></Route>
                  <Route strict path='/movies/top/:id' component={Detail5}></Route>
                  <Route strict path='/movies/search' component={List4}></Route>
                  <Route strict path='/search/:id' component={Detail4}></Route>
                  <Route component={Default}></Route>
                </Switch>
              </Content>
            </Layout>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>
            <Route component={Always}></Route>
          </Footer>
        </Layout>
      </div>
    </Router>
  }
}


render(<ConfigProvider locale={zhCN}>
  <App />
</ConfigProvider>, document.getElementById("root"))





