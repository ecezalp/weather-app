export interface Action<T extends string> {
  type: T
}

export interface ActionWithPayload<T extends string, P> {
  type: T,
  payload: P
}

export interface City {
  name: string,
  country: string,
  id: number,
}

export interface Weather {
  base: string,
  clouds: {
    all: number
  },
  cod: number,
  coord: {
    lon: number, lat: number
  },
  dt: number,
  id: number,
  main: {
    grnd_level?: number,
    humidity: number,
    pressure: number,
    sea_level?: number,
    temp: number,
    temp_max: number,
    temp_min: number,
  }
  name: string,
  sys: {
    message: number,
    country: string,
    sunrise: number,
    sunset: number,
    type: number,
    id: number,
  }
  weather: Description[],
  wind: {
    speed: number,
    deg: number,
  }
  visibility: number,
}

export interface Forecast {
  cod: string,
  message: number,
  cnt: number,
  list: ForecastItem[],
  city: ForecastCity,
}

export interface ForecastItem {
  "dt": number,
  "main": {
    "temp": number,
    "temp_min": number,
    "temp_max": number,
    "pressure": number,
    "sea_level": number,
    "grnd_level": number,
    "humidity": number,
    "temp_kf": number,
  },
  "weather": Description[],
  "clouds": {
    "all": number,
  },
  "wind": {
    "speed": number,
    "deg": number,
  },
  "snow": {},
  "sys": {
    "pod": string,
  },
  "dt_txt": string,
}

export interface ForecastCity {
  name: string,
  country: string,
  id: number,
  coord: {
    lon: number, lat: number
  },
}

export interface Description {
  description: string,
  icon: string,
  id: number,
  main: string,
}