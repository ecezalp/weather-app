import * as React from 'react';
import {DashboardProps} from "../../../types/interfaces/propsAndState";
import {findCountryFlagByCode} from "../../../constants/endpoints";
import * as dateFns from 'date-fns';
import {findWeatherImageByCode} from "../../../constants/weatherIcons";

const DashBoard: React.SFC<DashboardProps> = ({weather, city}) => {

  const place = <div className="place">
    {weather.name}
    <img src={findCountryFlagByCode(city.country.toLowerCase(), 64)}/>
  </div>;

  const time = <div className="time">
    <div>{dateFns.format(new Date(), 'MMMM D, YYYY')}</div>
    <div>{dateFns.format(new Date(), 'hh:mm:ss A')} PST</div>
  </div>;

  const status = <div className="status">
    {weather.weather[0].description}
  </div>;

  const title = <div className="title paper">
    {place}
  </div>;

  const temperatureImage = <div className="image-container">
    <div className={findWeatherImageByCode(weather.weather[0].icon)}/>
  </div>;

  const temperature = <div className="temperature paper">
    {temperatureImage}
    {status}
  </div>;

  return <div className="dashboard">
    {temperature}
    {title}
    <div className="paper">
      {time}
    </div>
    <div className="paper"/>
    <div className="paper"/>
    <div className="paper"/>
  </div>;
};

export default DashBoard;