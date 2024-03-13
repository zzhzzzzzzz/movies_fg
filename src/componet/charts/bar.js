import { observer } from "mobx-react";
import React from 'react';
import ReactECharts from 'echarts-for-react';

export default class Bar extends React.Component {
  render() {
    return <div><DemoBar /></div>
  }
}

@observer
class DemoBar extends React.Component {
  render() {
    let option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }]
    };
    return <div><ReactECharts option={option} /></div>

  }
}
