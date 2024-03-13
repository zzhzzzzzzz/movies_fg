import React from "react";
import { Link, Redirect } from "react-router-dom";
import { movieService as service } from "../service/movie";
import { observer } from "mobx-react";
import { Input, message } from 'antd';

const { Search } = Input;

export default class extends React.Component {
  render() {
    return <_Search service={service} />
  }
}

@observer
class _Search extends React.Component {

  handleClick(info) {
    if (info){
      console.log(info)
      this.props.service.searchlist(info)
    }
    else{
      message.info('搜索关键词不能为空')
    }
  }

  render() {
    if (this.props.service.isSearch){
      this.props.service.isSearch=false
      return <Redirect to="/movies/search" />
    }
    return <div>
      <Search placeholder="请输入您想搜索的影片名称" onSearch={this.handleClick.bind(this)} enterButton />
    </div>
  }
}
