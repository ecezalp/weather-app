import {
  SET_IS_FETCHING_DATA,
} from "../actions/actionConstants";
import {WeatherActionType} from "../types/actions";
import {WeatherState} from "../types/interfaces/propsAndState";
import {ActionWithPayload} from "../types/interfaces/domain";

const initialState: WeatherState = {
  isFetchingData: false,
};


const weatherReducer = (state = initialState,
                        action: ActionWithPayload<WeatherActionType, any>): WeatherState => {
  switch (action.type) {
    case SET_IS_FETCHING_DATA:
      return {...state, isFetchingData: action.payload};
    default:
      return state;
  }
};

export default weatherReducer;