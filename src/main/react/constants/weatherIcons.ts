export const findWeatherImageByCode = (code: string) => {
  switch (code) {
    case '01d':
      return 'sun';
    case '02d':
      return 'cloudy';
    case '03d':
      return 'cloud';
    case '04d':
      return 'cloud-1';
    case '09d':
      return 'rain-1';
    case '10d':
      return 'rain-2';
    case '11d':
      return 'storm';
    case '13d':
      return 'snowflake';
    case '50d':
      return 'tornado';
    case '01n':
      return 'moon-6';
    case '02n':
      return 'cloud-1';
    case '03n':
      return 'cloud';
    case '04n':
      return 'cloud-1';
    case '09n':
      return 'rain-1';
    case '10n':
      return 'rain-3';
    case '11n':
      return 'storm';
    case '13n':
      return 'snowflake';
    case '50n':
      return 'tornado';
    default:
      return '';
  }
};