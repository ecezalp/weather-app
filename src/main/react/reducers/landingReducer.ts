import {
  SET_INPUT_ERROR, SET_INPUT_VALUE, SET_IS_FETCHING_DATA,
  SET_IS_INPUT_VISIBLE, SET_SELECTED_CITY
} from "../actions/actionConstants";
import {LandingActionType} from "../types/actions";
import {LandingState} from "../types/interfaces/propsAndState";
import {ActionWithPayload} from "../types/interfaces/domain";

const initialState: LandingState = {
  isInputVisible: false,
  inputValue: "",
  inputError: "",
  selectedCity: {name: "", country: "", id: 0},
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
    case SET_SELECTED_CITY:
      return {...state, inputValue: action.payload.name, selectedCity: action.payload};
    case SET_IS_FETCHING_DATA:
      return {...state, isFetchingData: action.payload};
    default:
      return state;
  }
};

export default landingReducer;