
import {SET_SUGGESTIONS} from "../actions/actionConstants";
import {ActionWithPayload, InputWithAutocompleteState} from "../types/interfaces";
import {AutocompleteActionType} from "../types/actions";

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