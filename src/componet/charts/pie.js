import React from "react";
import { observer } from "mobx-react";
import ReactECharts from 'echarts-for-react';
import { chartService as service } from "../../service/chart.js";
import { inject } from "../../utils/index.js";


export default class extends React.Component {
  render() {
    return <div><DemoPie /></div>
  }
}

@inject({ service })
@observer
class DemoPie extends React.Component {
  constructor(props) {
    super(props)
    props.service.getpiedata()
  }


  render() {
    console.log(this.props.service.piedata, typeof (this.props.service.piedata))
    const data = this.props.service.piedata
    console.log(data, typeof (data))

    let option = {
      title:
      {
        left: 'center',
        text: '主要地区高分(≥8.5)电影发布数量占比图'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        bottom: '1%',
        left: 'center'
      },
      color: [
        '#a5a5a5',
        '#5470c6',
        '#73c0de',
        '#ffda88',
        '#34ee60',
        '#ff0036',
        '#ff6e31',
        '#9A60B4',
        '#ef6567',
        '#f9c956',
        '#3BA272',
        '#fc8251',
      ],
      series: [
        {
          name: '高分电影发布数量',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            // color:function () {
            //   return (
            //     'rgb(' +
            //     [
            //       Math.round(Math.random() * 250),
            //       Math.round(Math.random() * 300),
            //       Math.round(Math.random() * 350)
            //     ].join(',') +
            //     ')'
            //   )
            // },
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: data
          // data: [
          //   { 'value': 13, 'name': '韩国' },
          //   { 'value': 23, 'name': '法国' },
          //   { 'value': 9, 'name': '意大利' },
          //   { 'value': 172, 'name': '美国' },
          //   { 'value': 49, 'name': '英国' },
          //   { 'value': 53, 'name': '中国大陆' },
          //   { 'value': 35, 'name': '中国香港' },
          //   { 'value': 12, 'name': '加拿大' },
          //   { 'value': 37, 'name': '日本' },
          //   { 'value': 10, 'name': '中国台湾' },
          //   { 'value': 13, 'name': '德国' },
          //   { 'value': 38, 'name': '其它地区(发布电影数<5的地区集合)' }
          // ]
        }
      ]
    };
    return <ReactECharts option={option} style={{ height: 400 }} />

  }
}
