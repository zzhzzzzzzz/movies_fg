import React from "react";
import { observer } from "mobx-react";
import ReactDOM from 'react-dom';
import ReactECharts from 'echarts-for-react';
import { chartService as service } from "F:/vscode/毕设/my-app/src/service/chart.js";
import { inject } from "F:/vscode/毕设/my-app/src/utils/index.js";



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
    console.log(this.props.service.piedata)
    let data = this.props.service.piedata

    let option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        bottom: '2%',
        left: 'center'
      },
      series: [
        {
          name: '电影发布地区数量占比',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
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
          // data:data
          data: [
            { 'value': 26, 'name': '中国大陆' },
            { 'value': 4, 'name': '英国' },
            { 'value': 18, 'name': '美国' },
            { 'value': 4, 'name': '中国香港' },
            { 'value': 2, 'name': '法国' },
            { 'value': 2, 'name': '加拿大' },
            { 'value': 1, 'name': '日本' },
            { 'value': 1, 'name': '中国台湾' }
          ]
        }
      ]
    };
    return <ReactECharts option={option} style={{height:400}} />

  }
}
