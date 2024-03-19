import React from "react";
import { observer } from "mobx-react";
import ReactDOM from 'react-dom';
import ReactECharts from 'echarts-for-react';
import { chartService as service } from "F:/vscode/毕设/my-app/src/service/chart.js";
import { inject } from "F:/vscode/毕设/my-app/src/utils/index.js";


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
    props.service.getlinedata()
  }


  render() {
    console.log(this.props.service.linedata)
    const data = this.props.service.linedata
    let arr1 = []
    let arr2 = []
    const x1data = Object.keys(this.props.service.linedata).filter(year => year >= 1900 && year < 2000)
    for (let i = 0; i < x1data.length; i = i + 1) {
      let index = x1data[i]
      let value = data[index]
      arr1.push(value)
    }
    const y1data = arr1

    const x2data = Object.keys(this.props.service.linedata).filter(year => year >= 2000 && year < 2100)
    for (let i = 0; i < x2data.length; i = i + 1) {
      let index = x2data[i]
      let value = data[index]
      arr2.push(value)
    }
    const y2data = arr2

    const colors = ['#7898e1','#fa6d1d',];
    let option = {
      color: colors,
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'line'
        }
      },
      legend: {},
      grid: {
        top: 70,
        bottom: 50
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[1]
            }
          },
          axisLabel: {
            interval: 0,
            rotate: 40
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return (
                  '21世纪 ' +
                  params.value +
                  (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                );
              }
            }
          },
          // prettier-ignore
          data: x2data
        },
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[0]
            }
          },
          axisLabel: {
            interval: 0,
            rotate: 40
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return (
                  '20世纪 ' +
                  params.value +
                  (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                );
              }
            }
          },
          // prettier-ignore
          data: x1data
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '20世纪 ',
          type: 'line',
          xAxisIndex: 1,
          smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: y1data
        },
        {
          name: '21世纪',
          type: 'line',
          smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: y2data
        }
      ]
    };

    return <ReactECharts option={option} style={{ height: 400 }
    } />

  }
}
