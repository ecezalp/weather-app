import {ActionWithPayload} from "../actions/actionTypeHelpers";
import {LandingActionType, LandingState} from "../types/Landing";
import {SET_INPUT_ERROR, SET_INPUT_VALUE, SET_IS_INPUT_VISIBLE} from "../actions/actionConstants";

const initialState: LandingState = {
  isInputVisible: false,
  inputValue: "",
  inputError: "",
};


const landingReducer = (state = initialState,
                        action: ActionWithPayload<LandingActionType, any>): LandingState => {
  switch (action.type) {
    case SET_IS_INPUT_VISIBLE:
      return {...state, isInputVisible: true};
    case SET_INPUT_VALUE:
      return {...state, inputValue: action.payload, inputError: ""};
    case SET_INPUT_ERROR:
      console.log(action);
      return {...state, inputError: action.payload};
    default:
      return state;
  }
};

export default landingReducer;