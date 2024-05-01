import React from "react";
import { observer } from "mobx-react";
import ReactECharts from 'echarts-for-react';
import { chartService as service } from "../../service/chart.js";
import { inject } from "../../utils/index.js";


export default class extends React.Component {
  render() {
    return <div><DemoLine /></div>
  }
}

@inject({ service })
@observer
class DemoLine extends React.Component {
  constructor(props) {
    super(props)
    props.service.gethistdata()
  }


  render() {
    // let time = ['141', '118', '73', '117', '98',
    //   '105', '126', '99', '91', '102', '129', '141', '121',
    //   '139', '133', '86', '108', '117', '97', '88', '132',
    //   '105', '125', '114', '96', '99', '119', '128', '101',
    //   '124', '116', '169', '38', '95', '102', '92', '98', '99',
    //   '137', '127 ', '108', '87', '86', '92', '90', '113', '180', '156', '134', '116',
    //   '128', '102', '166', '112', '108', '123', '116', '116', '82', '139', '116', '84', '105']
    console.log(this.props.service.histdata)
    let time = this.props.service.histdata
    console.log(time)

    let option = {
      title: {
        left: 'center',
        text: '高分(≥8.5)电影时长分布图'
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        boundaryGap: true, // 不显示左右边界
        data: ['40-60', '60-80', '80-100', '100-120', '120-140', '140-160', '160-180', '180-200', '200-220'],
        name: '时长/分钟'
      },
      yAxis: {
        type: 'value',
        name: '数量'
      },
      series: [{
        name: '电影时长范围',
        type: 'bar',
        data: [
          // 根据时间范围统计频次
          time.filter(time => time >= 40 && time < 60).length,
          time.filter(time => time >= 60 && time < 80).length,
          time.filter(time => time >= 80 && time < 100).length,
          time.filter(time => time >= 100 && time < 120).length,
          time.filter(time => time >= 120 && time < 140).length,
          time.filter(time => time >= 140 && time < 160).length,
          time.filter(time => time >= 160 && time < 180).length,
          time.filter(time => time >= 180 && time < 200).length,
          time.filter(time => time >= 200 && time <= 220).length
        ],
        itemStyle: {
          color: '#7898e1',
        }
      },
      ],
      barGap: 0,
      barCategoryGap: 0
    };

    return <ReactECharts option={option} style={{ height: 400 }
    } />

  }
}
