import * as React from 'react';
import {DashboardProps} from "../../../types/interfaces/propsAndState";
import {findCountryFlagByCode} from "../../../constants/endpoints";
import {findWeatherImageByCode} from "../../../constants/weatherIcons";
import Map from "../elements/map";
import Degree from "../elements/degree";
import DateTime from "../elements/dateTime";
import {default as Graph} from "../elements/graph";

const DashBoard: React.SFC<DashboardProps> = ({weather, city, isCelsius, setIsCelsius, forecast}) => {

  const titleTile = <div className="title paper">
    <div className="place">
      {weather.name}
      <img src={findCountryFlagByCode(city.country.toLowerCase(), 64)}/>
    </div>
  </div>;

  const weatherArtTile = <div className="temperature paper">
    <div className="image-container">
      <div className={findWeatherImageByCode(weather.weather[0].icon)}/>
    </div>
    <div className="status">
      {weather.weather[0].description}
    </div>
  </div>;

  const dateTimeTile = <DateTime/>;

  const mapTile = <div className="paper">
    <Map lat={weather.coord.lat} lon={weather.coord.lon}/>
  </div>;

  const degreeTile = <Degree
    weather={weather}
    isCelsius={isCelsius}
    setIsCelsius={setIsCelsius}
  />;

  const windTile = <div className="paper image-container">
    <div className="wind"/>
    <div className="wind-speed-container">
      <div className="wind-speed">{weather.wind.speed} m/s</div>
      <i className="fas fa-arrow-up" style={{transform: `rotate(${weather.wind.deg}deg)`}}/>
    </div>
  </div>;

  const graphTile = <div className="paper graph">
    <div className="graph-title">Five Day Forecast</div>
    <Graph forecast={forecast} isCelsius={isCelsius}/>
  </div>;

  return <div className="dashboard">
    {weatherArtTile}
    {titleTile}
    {degreeTile}
    {dateTimeTile}
    {mapTile}
    {windTile}
    {graphTile}
  </div>;
};

export default DashBoard;