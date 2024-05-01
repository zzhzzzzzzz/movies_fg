import React from "react";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { observer } from "mobx-react";
import { List } from 'antd';
import { movieService as service } from "../../service/movie.js";

import { inject } from "../../utils/index.js";

@inject({ service })
@observer
export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { movies: data = [], pagination = {} } = this.props.service.searchmovies //解构加缺省值，结构不出来返回缺省值
        return (<List
            header={<div>为您检索到以下影片</div>}
            bordered
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <Link to={"/search/" + item.id}>{item.title}</Link>
                    <Link to={"/search/" + item.id}>{item.rate}</Link>
                </List.Item>
            )}
        />)
    }
}
