import React from "react";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";

import { observer } from "mobx-react";
import { Card, Row, Col, Empty } from 'antd';

import { movieService as service } from "F:/vscode/毕设/my-app/src/service/movie.js";
import { inject } from "F:/vscode/毕设/my-app/src/utils/index.js";


@inject({ service })
@observer
class Detail extends React.Component {
    constructor(props) {
        super(props)
        console.log('--------------')
        console.log(props)
        console.log('--------------')
        const { id = 0 } = props.match.params
        console.log(id)
        props.service.getHotMovie(id)
    }

    render() {
        console.log(this.props.service.hotmovie)
        const { id, title, releasedate, director, rate, kind, country, language, time, actor } = this.props.service.hotmovie
        if (!id) {
            return <Empty />
        }
        return <div>
            <Card title={title} >
                <Row>
                    <Col><p>导演：{director}</p></Col>
                </Row>
                <Row>
                    <Col>上映时间：{releasedate}</Col>
                </Row>
                <Row>
                    <Col>豆瓣评分：{rate}</Col>
                </Row>
                <Row>
                    <Col>电影类型：{kind}</Col>
                </Row>
                <Row>
                    <Col>发行地区：{country}</Col>
                </Row>
                <Row>
                    <Col>发行语言：{language}</Col>
                </Row>
                <p>电影片长：{time}</p>
                <p>主演演员：{actor}</p>
            </Card>
        </div>
    }
}

export default Detail