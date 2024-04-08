import React from "react";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";

import { observer } from "mobx-react";
import { List } from 'antd';

import { movieService as service } from "F:/vscode/毕设/my-app/src/service/movie.js";
import { inject } from "F:/vscode/毕设/my-app/src/utils/index.js";

@inject({ service })
@observer
export default class extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        let params = new URLSearchParams(props.location.search)
        props.service.labellist6(params)
    }
    render() {
        const { movies: data = [], pagination = {} } = this.props.service.kindlabels3
        const { page: current = 1, size: pageSize = 20, total } = pagination
        return (<List
            bordered
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <Link to={"/search/" + item.id}>
                        {item.title}
                        <br />
                        {item.kind}
                    </Link>
                    <Link to={"/search/" + item.id}>{item.rate}</Link>
                </List.Item>
            )}
            pagination={{
                onChange: page => {
                    console.log(page)
                    let params = new URLSearchParams(this.props.location.search)
                    params.set("page", page)
                    this.props.service.labellist6(params)
                },
                current,
                pageSize,
                total
            }}
        />)
    }
}
