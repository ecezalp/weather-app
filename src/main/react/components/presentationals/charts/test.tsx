import * as React from "react";
import ReactEcharts from "echarts-for-react";

export default function Test () {

  const option = {
    title: {
      text: 'ECharts entry example'
    },
    tooltip: {},
    legend: {
      data:['Sales']
    },
    xAxis: {
      data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
    },
    yAxis: {},
    series: [{
      name: 'Sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };

  return  <ReactEcharts
    option={option}
    notMerge={true}
    lazyUpdate={true}/>
}

