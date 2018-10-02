export const findCityById = (id: number) =>
  `http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=${process.env.WEATHER_API_KEY}`;

export const findCountryFlagByCode = (code: string, size: number = 24) =>
  `https://www.countryflags.io/${code}/flat/${size}.png`;
