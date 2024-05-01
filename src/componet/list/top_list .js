import React from "react";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";

import { observer } from "mobx-react";
import { List, Row, Col } from 'antd';

import { movieService as service } from "../../service/movie.js";
import { inject } from "../../utils/index.js";

@inject({ service })
@observer
export default class extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        let params = new URLSearchParams(props.location.search)
        props.service.toplist(params)
    }
    render() {
        const { movies: data = [], pagination = {} } = this.props.service.topmovies //解构加缺省值，结构不出来返回缺省值
        const { page: current = 1, size: pageSize = 20, total } = pagination
        return (<List
            header={<div >影片排行  Top250</div>}
            bordered
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <Link to={"/movies/top/" + item.id}> {item.title}</Link>
                    <Link to={"/movies/top/" + item.id}> {item.rate}</Link>
                </List.Item>
            )}
            pagination={{
                onChange: page => {
                    console.log(page)
                    let params = new URLSearchParams(this.props.location.search)
                    params.set("page", page)
                    this.props.service.toplist(params)
                },
                current,
                pageSize,
                total
            }}
        />)
    }
}
