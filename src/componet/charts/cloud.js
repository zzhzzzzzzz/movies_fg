import React from "react";
import { observer } from "mobx-react";
import ReactECharts from 'echarts-for-react';
import 'echarts-wordcloud';



export default class extends React.Component {
  render() {
    return <DemoCloud />
  }
}

@observer
class DemoCloud extends React.Component {
  render() {
    let keywords = [{ "name": "男神", "value": 2.64 },
    { "name": "好身材", "value": 4.03 },
    { "name": "校草", "value": 24.95 },
    { "name": "酷", "value": 4.04 },
    { "name": "时尚", "value": 5.27 },
    { "name": "阳光活力", "value": 5.80 },
    { "name": "初恋", "value": 3.09 },
    { "name": "英俊潇洒", "value": 24.71 },
    { "name": "霸气", "value": 6.33 },
    { "name": "腼腆", "value": 2.55 },
    { "name": "蠢萌", "value": 3.88 },
    { "name": "青春", "value": 8.04 },
    { "name": "网红", "value": 5.87 },
    { "name": "萌", "value": 6.97 },
    { "name": "认真", "value": 2.53 },
    { "name": "古典", "value": 2.49 },
    { "name": "温柔", "value": 3.91 },
    { "name": "有个性", "value": 3.25 },
    { "name": "可爱", "value": 9.93 },
    { "name": "幽默诙谐", "value": 3.65 }]

    let option = {
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'shadow'
        }
      },
      series: [{
        type: 'wordCloud',
        //maskImage: maskImage,
        sizeRange: [15, 80],
        rotationRange: [0, 0],
        rotationStep: 45,
        gridSize: 8,
        shape: 'pentagon',

        textStyle: {
          normal: {
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')';
            },
            fontFamily: 'sans-serif',
            fontWeight: 'normal'
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: keywords
      }]
    };

    return <ReactECharts option={option} style={{ height: 400 }} />
  }
}
