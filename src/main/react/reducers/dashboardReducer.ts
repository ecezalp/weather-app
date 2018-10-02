import {SET_FORECAST, SET_IS_CELSIUS, SET_WEATHER,} from "../actions/actionConstants";
import {DashboardActionType} from "../types/actions";
import {DashboardState} from "../types/interfaces/propsAndState";
import {ActionWithPayload} from "../types/interfaces/domain";

// to showcase the app in case internet is down
const initialState: DashboardState = {
  isCelsius: true,
  weather: {
    "coord": {"lon": 133.53, "lat": 35.38},
    "weather": [{
      "id": 521,
      "main": "Rain",
      "description": "shower rain",
      "icon": "09n"
    }],
    "base": "stations",
    "main": {
      "temp": 290.15,
      "pressure": 1014,
      "humidity": 77,
      "temp_min": 289.15,
      "temp_max": 291.15
    },
    "visibility": 10000,
    "wind": {
      "speed": 2.6,
      "deg": 190
    },
    "clouds": {"all": 75},
    "dt": 1538434800,
    "sys": {
      "type": 1,
      "id": 7579,
      "message": 0.0231,
      "country": "JP",
      "sunrise": 1538341264,
      "sunset": 1538383747
    },
    "id": 1864427,
    "name": "Daisen",
    "cod": 200
  },
  forecast: {
    "cod": "200",
    "message": 0.0036,
    "cnt": 40,
    "list": [
      {
        "dt": 1485799200,
        "main": {
          "temp": 261.45,
          "temp_min": 259.086,
          "temp_max": 261.45,
          "pressure": 1023.48,
          "sea_level": 1045.39,
          "grnd_level": 1023.48,
          "humidity": 79,
          "temp_kf": 2.37
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 4.77,
          "deg": 232.505
        },
        "snow": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2017-01-30 18:00:00"
      }
    ],
    "city": {
      "id": 524901,
      "name": "Moscow",
      "coord": {
        "lat": 55.7522,
        "lon": 37.6156
      },
      "country": "none"
    }
  },
};

const dashboardReducer = (state = initialState,
                          action: ActionWithPayload<DashboardActionType, any>): DashboardState => {
  switch (action.type) {
    case SET_WEATHER:
      return {...state, weather: action.payload};
    case SET_FORECAST:
      return {...state, forecast: action.payload};
    case SET_IS_CELSIUS:
      return {...state, isCelsius: action.payload};
    default:
      return state;
  }
};

export default dashboardReducer;