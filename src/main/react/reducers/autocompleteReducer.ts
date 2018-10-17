import {SET_SUGGESTIONS} from "../actions/actionConstants";
import {AutocompleteActionType} from "../types/actions";
import {InputWithAutocompleteState} from "../types/interfaces/propsAndState";
import {ActionWithPayload} from "../types/interfaces/domain";

const initialState: InputWithAutocompleteState = {
  suggestions: [],
};


const autocompleteReducer = (state = initialState,
                        action: ActionWithPayload<AutocompleteActionType, any>): InputWithAutocompleteState => {
  switch (action.type) {
    case SET_SUGGESTIONS:
      return {...state, suggestions: action.payload};
    default:
      return state;
  }
};

export default autocompleteReducer;