import { observer } from "mobx-react";
import React from 'react';
import ReactECharts from 'echarts-for-react';
import { chartService as service } from "F:/vscode/毕设/my-app/src/service/chart.js";
import { inject } from "F:/vscode/毕设/my-app/src/utils/index.js";


export default class Bar extends React.Component {
  render() {
    return <div><DemoBar /></div>
  }
}

@inject({ service })
@observer
class DemoBar extends React.Component {
  constructor(props) {
    super(props)
    props.service.getbardata()
  }

  render() {
    const xdata = Object.keys(this.props.service.bardata)
    const ydata = Object.values(this.props.service.bardata)
    console.log(xdata)
    console.log(ydata)

    let option = {
      title:
      {
        left: 'center',
        text: '高分(≥8.5)电影类型统计图'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: xdata,
          // data: ['剧情', '喜剧', '动画', '歌舞', '纪录片', '传记', '历史', '战争', '惊悚', '同性', '家庭', '音乐', '运动', '动作', '爱情', '悬疑', '科幻', '犯罪', '奇幻', '冒险', '真人秀', '短片', '武侠', '古装', '戏曲', '灾难', '西部', '情色', '儿童', '恐怖'],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            rotate: 40
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '电影数量',
          type: 'bar',
          barWidth: '60%',
          data: ydata,
          itemStyle:{
            color:'#7cd6cf',
          }
          // data: [217, 73, 51, 12, 7, 20, 13, 18, 40, 10, 23, 13, 3, 45, 63, 32, 35, 46, 51, 66, 1, 1, 5, 11, 1, 2, 3, 2, 4, 2]
        },
        
      ]
    };
    return <div><ReactECharts option={option} style={{ height: 400 }} /></div>

  }
}
