import {
  SET_IS_CELSIUS,
  SET_WEATHER,
} from "../actions/actionConstants";
import {DashboardActionType} from "../types/actions";
import {DashboardState} from "../types/interfaces/propsAndState";
import {ActionWithPayload} from "../types/interfaces/domain";

const initialState: DashboardState = {
  isCelsius: true,
  weather: {"coord":{"lon":133.53,"lat":35.38},
    "weather":[{"id":521,
      "main":"Rain",
      "description":"shower rain",
      "icon":"09n"}],
    "base":"stations",
    "main":{"temp":290.15,
      "pressure":1014,
      "humidity":77,
      "temp_min":289.15,
      "temp_max":291.15},
    "visibility":10000,
    "wind":{"speed":2.6,
      "deg":190},
    "clouds":{"all":75},
    "dt":1538434800,
    "sys":{"type":1,
      "id":7579,
      "message":0.0231,
      "country":"JP",
      "sunrise":1538341264,
      "sunset":1538383747},
    "id":1864427,
    "name":"Daisen",
    "cod":200}
};

const dashboardReducer = (state = initialState,
                        action: ActionWithPayload<DashboardActionType, any>): DashboardState => {
  switch (action.type) {
    case SET_WEATHER:
      return {...state, weather: action.payload};
    case SET_IS_CELSIUS:
      return {...state, isCelsius: action.payload};
    default:
      return state;
  }
};

export default dashboardReducer;