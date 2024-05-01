import React from "react";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";

import { observer } from "mobx-react";
import { Card, Row, Col, Empty } from 'antd';

import { movieService as service } from "../../service/movie.js";
import { inject } from "../../utils/index.js";


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
        props.service.gettopMovie(id)
    }

    render() {
        console.log(this.props.service.topmovie)
        const { id, C_title, E_title, url, releasedate, director, rate, kind, country, people, actor } = this.props.service.topmovie
        if (!id) {
            return <Empty />
        }
        return <div>
            <Card title={C_title +' / '+E_title} >
                <Row>
                    <Col><p>导演：{director}</p></Col>
                </Row>
                <Row>
                    <Col><p>主演演员：{actor}</p></Col>
                </Row>
                <Row>
                    <Col>上映时间：{releasedate}</Col>
                </Row>
                <Row>
                    <Col>发行地区：{country}</Col>
                </Row>
                <Row>
                    <Col>电影类型：{kind}</Col>
                </Row>
                <Row>
                    <Col>豆瓣评分：{rate}</Col>
                </Row>
                <Row>
                    <Col>评分人数：{people}</Col>
                </Row>
                <Row>
                    <Col>详情链接：<a href={url} target='_blank' >{url}</a></Col>
                </Row>
            </Card>
        </div>
    }
}

export default Detail