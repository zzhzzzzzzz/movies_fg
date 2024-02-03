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
import Pub from './componet/pub';

import { Layout, Menu, Icon, message } from 'antd';

import { observable } from 'mobx'
import { observer } from "mobx-react" //给react组件用的

const { Header, Content, Footer } = Layout; //const声明必须放在所以import的后面

const Home = props => <h2>Home</h2>
const About = props => <h2>About</h2>
const Default = props => <h2>缺省显示</h2>
const Always = props => <div><hr /><h3>Blog Design ©2024 Created by Mr.Z</h3></div>
const Profile = props => <h2>用户信息</h2>

// function Always(){return <div><hr/><h3>页脚</h3></div>}

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
    // exact只能匹配本路径，不包含子路径
    // strict路径尾部有/，则必须匹配这个/，也可以匹配子路径
    // exact和strict一起用，表示严格的等于当前指定的路径
    // switch：一旦匹配Switch中的一个route，就不在匹配其他。但是route是匹配所有，如果匹配会显示组件，无path的route始终匹配
    render() {
        return <Router>
            <div>
                <Layout className="layout">
                    <Header>
                        <Menu onClick={this.handleClick}
                            // selectedKeys={}
                            defaultSelectedKeys={this.state.current}
                            mode="horizontal"
                            theme='dark'
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="home"><Link to="/index"><Icon type="home" />首页</Link></Menu.Item>
                            <Menu.Item key="login"><Link to="/login"><Icon type="login" />登录</Link></Menu.Item>
                            <Menu.Item key="reg"><Link to="/reg"><Icon type="form" />注册</Link></Menu.Item>
                            <Menu.Item key="pub"><Link to="/posts"><Icon type="edit" />编写博客</Link></Menu.Item>
                            <Menu.Item key="about"><Link to="/about"><Icon type="question-circle" />关于</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '10px 50px' }}>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                            <Switch>
                                <Route exact path="/about"><About /></Route>
                                <Route exact path={["/", '/index']} component={Home}></Route>
                                <Route strict path='/login' component={Login}></Route>
                                <Route strict path='/reg' component={Reg}></Route>
                                <Route strict path='/profile' component={Profile}></Route>
                                <Route strict path='/posts' component={Pub}></Route>
                                <Route component={Default}></Route>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        <Route component={Always}></Route>
                    </Footer>
                </Layout>
            </div>
        </Router>
    }
}


render(<App />, document.getElementById("root"))





