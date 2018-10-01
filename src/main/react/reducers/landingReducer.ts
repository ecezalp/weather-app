import {
  SET_INPUT_ERROR, SET_INPUT_VALUE, SET_INPUT_VALUE_AND_ID, SET_IS_FETCHING_DATA,
  SET_IS_INPUT_VISIBLE
} from "../actions/actionConstants";
import {LandingActionType} from "../types/actions";
import {LandingState} from "../types/interfaces/propsAndState";
import {ActionWithPayload} from "../types/interfaces/domain";

const initialState: LandingState = {
  isInputVisible: false,
  inputValue: "",
  inputError: "",
  cityId: 0,
  isFetchingData: false,
};


const landingReducer = (state = initialState,
                        action: ActionWithPayload<LandingActionType, any>): LandingState => {
  switch (action.type) {
    case SET_IS_INPUT_VISIBLE:
      return {...state, isInputVisible: true};
    case SET_INPUT_VALUE:
      return {...state, inputValue: action.payload ? action.payload : "", inputError: ""};
    case SET_INPUT_ERROR:
      return {...state, inputError: action.payload};
    case SET_INPUT_VALUE_AND_ID:
      return {...state, inputValue: action.payload.name, cityId: action.payload.id};
    case SET_IS_FETCHING_DATA:
      console.log("in the reducer")
      return {...state, isFetchingData: action.payload};
    default:
      return state;
  }
};

export default landingReducer;