export const findCityById = (id: number) =>
  `http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=${process.env.API_KEY}`;
