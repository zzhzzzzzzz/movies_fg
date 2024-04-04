import React from "react";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";

import { observer } from "mobx-react";
import { List, Row, Col, Card, Pagination } from 'antd';


import { movieService as service } from "F:/vscode/毕设/my-app/src/service/movie.js";
import { inject } from "F:/vscode/毕设/my-app/src/utils/index.js";

@inject({ service })
@observer
export default class extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    let params = new URLSearchParams(props.location.search)
    props.service.labellist1(params)
    props.service.labellist2(params)
    props.service.labellist3(params)
    this.state = {
      key: 'tab1',
      noTitleKey: 'label1',
    };
  }

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    const { movies: data = [], pagination = {} } = this.props.service.yearlabels
    const { page: current = 1, size: pageSize = 20, total } = pagination
    const { movies: data2 = [], pagination2 = {} } = this.props.service.yearlabels2
    const { page: current2 = 1, size: pageSize2 = 20, total2 } = pagination2
    const { movies: data3 = [], pagination3 = {} } = this.props.service.yearlabels3
    const { page: current3 = 1, size: pageSize3 = 20, total3 } = pagination3

    const tabListNoTitle = [
      {
        key: 'label1',
        tab: '2000-至今',
      },
      {
        key: 'label2',
        tab: '90年代',
      },
      {
        key: 'label3',
        tab: '80年代',
      },
    ];

    const contentListNoTitle = {
      label1: <List
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Link to={"/search/" + item.id}>
              {item.title}
              <br />
              {item.release_date}
            </Link>
            <Link to={"/search/" + item.id}>{item.rate}</Link>
          </List.Item>
        )}
        pagination={{
          onChange: page => {
            console.log(page)
            let params = new URLSearchParams(this.props.location.search)
            params.set("page", page)
            this.props.service.labellist1(params)
          },
          current: current,
          pageSize: pageSize,
          total: total
        }}
      />,
      label2: <List
        bordered
        dataSource={data2}
        renderItem={item => (
          <List.Item>
            <Link to={"/search/" + item.id}>
              {item.title}
              <br />
              {item.release_date}
            </Link>
            <Link to={"/search/" + item.id}>{item.rate}</Link>
          </List.Item>
        )}
        pagination={{
          onChange: page2 => {
            console.log(page2)
            let params2 = new URLSearchParams(this.props.location.search)
            params2.set("page", page2)
            this.props.service.labellist2(params2)
          },
          current: current2,
          pageSize: pageSize2,
        }}
      />,
      label3: <List
        bordered
        dataSource={data3}
        renderItem={item => (
          <List.Item>
            <Link to={"/search/" + item.id}>
              {item.title}
              <br />
              {item.release_date}
            </Link>
            <Link to={"/search/" + item.id}>{item.rate}</Link>
          </List.Item>
        )}
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 5,
        }}
      />
      ,
    };

    return (
      <div>
        <Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          tabBarExtraContent={<a href="#">More</a>}
          onTabChange={key => {
            this.onTabChange(key, 'noTitleKey');
          }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </div>
    );

  }
}
