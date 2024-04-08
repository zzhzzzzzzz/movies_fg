import React, { Children } from 'react';   //主模块
import { render } from 'react-dom';  //dom树模块
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Label1 from './componet/label/year_label';
import Label2 from './componet/label/kind_label';

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
import { Row, Col,List,Avatar } from 'antd';

import zhCN from "antd/es/locale/zh_CN"
import Home from './componet/home';
import Search from './componet/search';




const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout; //const声明必须放在所以import的后面




const About = props => (<div style={{padding:'30px'}}>
  <h2>系统简介：</h2>
  <p style={{ fontSize: 15, textIndent: '2em' }}>电影数据分析可视化系统能利用网络爬虫技术将海量的电影数据获取后进行数据处理，通过图表、图像、文字等形式进行展示，帮助使用者更好地理解电影市场、观众喜好、电影表现等方面的情况，例如爬取该系列电影的各类数据：上映时间，电影类型，发行语言，热门影评等等,分析其数据,以统计饼图、条形图、折线图和词云图的可视化方式展示，便于使用者决策。通过自动化地获取和分析电影数据，更好地对电影数据进行分析,让人们更直观地了解到分类趋势分布,分析电影的数据，可以节省大量的人力和时间成本，提高效率。除此之外，该系统还可以提供电影信息的查询、标签的分类和高分推荐功能。</p>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <h3>作者邮箱：<a style={{ fontSize: 16 }} href='https://wx.mail.qq.com/' target='_blank'>1336029976@qq.com</a></h3>
  <h3>Github：<a style={{ fontSize: 16 }} href='https://github.com/zzhzzzzzzz' target='_blank'>项目源码</a></h3>
</div>)

class Env extends React.Component {
  render() {
    const data = [
      {
        title: 'Django',
        url1:'https://ts3.cn.mm.bing.net/th?id=ODLS.33234e7c-56ed-40b5-a831-94c8a2723b83&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
        url2:'https://docs.djangoproject.com/zh-hans/5.0/',
        description:'一个高级的Python Web框架，可以快速开发安全和可维护的网站。'

      },
      {
        title: 'React',
        url1:'https://ts3.cn.mm.bing.net/th?id=ODLS.821cc3b9-7d20-4199-ba13-669eeac9dc36&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
        url2:'https://react.docschina.org/',
        description:'一套用于构建 Web 和原生交互界面的库。'
      },
      {
        title: 'Scrapy',
        url1:'https://ts1.cn.mm.bing.net/th?id=ODLS.7c59a4c2-1c1a-47a1-b5c0-a9a7a345bbfb&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
        url2:'https://scrapy.org/',
        description:'一个快速、高效率的网络爬虫框架，用于抓取Web站点并从页面中提取结构化的数据。'
      },
      {
        title: 'Ant Design',
        url1:'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        url2:'https://3x.ant.design/index-cn',
        description:'一套企业级 UI 设计语言和 React 组件库。'
      },
      {
        title: 'Echarts',
        url1:'https://ts1.cn.mm.bing.net/th?id=ODLS.e8e5d7af-dab0-4c46-8d5b-a1efc790556d&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
        url2:'https://echarts.apache.org/zh/index.html',
        description:'一个基于 JavaScript 的开源可视化图表库。'
      },
      {
        title: 'MySQL',
        url1:'https://ts1.cn.mm.bing.net/th?id=ODLS.2c140311-019d-40ea-b122-46c337688787&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
        url2:'https://www.mysql.com/cn/',
        description:'一个免费且开源的数据库管理系统。'
      },
      {
        title: 'Git',
        url1:'https://ts4.cn.mm.bing.net/th?id=ODLS.41a3726a-404b-4a69-a7d8-22611d9b240a&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
        url2:'https://git-scm.com/',
        description:'一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。'
      },
    ];
    return <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.url1} />}
            title={<a href={item.url2} target='_blank'>{item.title}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  }
}
class Tech extends React.Component {
  render() {
    const data = [
      {
        title: 'lxml',
        url1:'https://ts3.cn.mm.bing.net/th?id=ODLS.67a4194b-1e14-4bcd-b689-d9a890b22a94&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
        url2:'https://lxml.de/',
        description:'Python的一个解析库，支持HTML和XML的解析，支持XPath解析方式，而且解析效率非常高。'

      },
      {
        title: 'Axios',
        url1:'https://ts4.cn.mm.bing.net/th?id=ODLS.ac4f1e9d-b9b1-4ddb-b032-d976e8817f24&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
        url2:'https://axios.nodejs.cn/',
        description:'一个基于 promise 的网络请求库，可以用于浏览器和 node.js。'
      },
      {
        title: 'Mobx',
        url1:'https://ts3.cn.mm.bing.net/th?id=ODLS.c106c3f9-d730-4aa7-8a23-fd50f790eaa2&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
        url2:'https://cn.mobx.js.org/',
        description:'一个基于响应式编程的状态管理库，可以让你简化和优化 UI 和数据的处理。'
      },
      {
        title: 'Matplotlib',
        url1:'https://ts3.cn.mm.bing.net/th?id=ODLS.52bd85f3-a366-4464-9a67-664b779630fb&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
        url2:'https://matplotlib.org/',
        description:'一个综合库，用于在 Python 中创建静态、动画和交互式可视化。'
      },
      {
        title: 'NumPy',
        url1:'https://ts1.cn.mm.bing.net/th?id=ODLS.26a307b6-2035-4be5-9fd4-7bdae24400a8&w=32&h=32&qlt=91&pcl=fffffa&o=6&pid=1.2',
        url2:'https://numpy.org/',
        description:'一个用于科学计算和数值计算的Python库，提供了丰富的数组操作、函数和模块。'
      },
      {
        title: 'Pandas',
        url1:'https://ts4.cn.mm.bing.net/th?id=ODLS.8601f07a-df18-4e20-b53d-5cea0928d1ea&w=32&h=32&qlt=91&pcl=fffffa&o=6&pid=1.2',
        url2:'https://pandas.pydata.org/',
        description:'建立在Python之上的一种用于数据分析和操作的工具。'
      },
    ];
    return <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.url1} />}
            title={<a href={item.url2} target='_blank'>{item.title}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  }
}

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
                  <Menu.Item key="c1"><Link to="/cloud">热门影评词云-词云图</Link></Menu.Item>
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
                  <Menu.Item key="3"><Link to="/week/list">本周口碑榜</Link></Menu.Item>
                  <Menu.Item key="31"><Link to="/box_office/list">北美票房榜</Link></Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub5"
                  title={
                    <span>
                      <Icon type="tags" />
                      电影分类
                    </span>
                  }
                >
                  <Menu.Item key="5"><Link to="/label">年代</Link></Menu.Item>
                  <Menu.Item key="6"><Link to="/label1">类型</Link></Menu.Item>
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
                  <Menu.Item key="4"><Link to="/environment">开发环境</Link></Menu.Item>
                  <Menu.Item key="234"><Link to="/technology">使用技术</Link></Menu.Item>
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
                  <Route strict path='/label' component={Label1}></Route>
                  <Route strict path='/label/:id' component={Detail4}></Route>
                  <Route strict path='/label1' component={Label2}></Route>
                  <Route strict path='/label1/:id' component={Detail4}></Route>
                  <Route strict path='/environment' component={Env}></Route>
                  <Route strict path='/technology' component={Tech}></Route>
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





