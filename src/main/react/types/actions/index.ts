import {
  SET_INPUT_ERROR, SET_INPUT_VALUE, SET_INPUT_VALUE_AND_ID, SET_IS_INPUT_VISIBLE,
  SUBMIT_INPUT, SET_SUGGESTIONS
} from "../../actions/actionConstants"

export type LandingActionType =
  typeof SET_IS_INPUT_VISIBLE |
  typeof SET_INPUT_VALUE |
  typeof SUBMIT_INPUT |
  typeof SET_INPUT_ERROR |
  typeof SET_INPUT_VALUE_AND_ID;


export type AutocompleteActionType =
  typeof SET_SUGGESTIONS;

