import React from "react";
import { observer } from "mobx-react";
import ReactDOM from 'react-dom';
import ReactECharts from 'echarts-for-react';



export default class extends React.Component {
  render() {
    return <div><DemoLine /></div>
  }
}

@observer
class DemoLine extends React.Component {
  render() {
    let option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };
    return <ReactECharts option={option} />
    
  }
}
