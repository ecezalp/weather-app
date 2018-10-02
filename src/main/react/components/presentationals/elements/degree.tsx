import * as React from 'react';
import {Weather} from "../../../types/interfaces/domain";

const Degree = ({weather, isCelsius, setIsCelsius}:
                  {weather: Weather, isCelsius: boolean, setIsCelsius: (isCelsius: boolean) => any }) => {

  const getDegreeType = (letter: string, callback: () => any, isBold: boolean) =>
    <div className="temperature-letter" onClick={callback}>
      <div style={{fontWeight: isBold ? "bold" : "normal", color: isBold ? "black" : "gray"}}>
        {letter}
      </div>
    </div>;

  const getCelsiusFromKelvin = (degree: number) => degree - 273.15;

  const getFahrenheitFromKelvin = (degree: number) => ((9 * (degree - 273)) / 5) + 32;

  const displayDegree = (degree: number) => isCelsius
    ? getCelsiusFromKelvin(degree)
    : getFahrenheitFromKelvin(degree);

  return <div className="degree paper">
    <div className="degree-number">{displayDegree(weather.main.temp).toFixed(1)}°</div>
    <div className="min-max">
      <div className="max">☀ {displayDegree(weather.main.temp_max).toFixed(1)}°</div>
      <div className="min">☾ {displayDegree(weather.main.temp_min).toFixed(1)}°</div>
    </div>
    <div className="degree-types">
      {getDegreeType("C", () => setIsCelsius(true), isCelsius)}
      {getDegreeType("F", () => setIsCelsius(false), !isCelsius)}
    </div>
  </div>;
};

export default Degree;