import * as React from "react";
import ReactEcharts from "echarts-for-react";
import {Forecast, ForecastItem} from "../../../types/interfaces/domain";
import {getCelsiusFromKelvin, getFahrenheitFromKelvin} from "../../../helpers/temperatureHelpers";

export default function Graph({forecast, isCelsius}: { forecast: Forecast, isCelsius: boolean }) {

  const getDataFromForecast = (item: ForecastItem) => isCelsius
    ? getCelsiusFromKelvin(item.main.temp).toFixed(1)
    : getFahrenheitFromKelvin(item.main.temp).toFixed(1);

  const getHoursFromForecast = (item: ForecastItem) => item.dt_txt.substring(11, 13);

  const option = {
    tooltip: {},
    xAxis: {
      data: forecast.list.map(getHoursFromForecast),
    },
    yAxis: {},
    series: [{
      name: 'hours',
      type: 'line',
      data: forecast.list.map(getDataFromForecast)
    }]
  };

  return <ReactEcharts
    option={option}
    notMerge={true}
    lazyUpdate={true}/>
}

