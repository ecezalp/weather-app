import {SET_INPUT_ERROR, SET_INPUT_VALUE, SET_IS_INPUT_VISIBLE, SUBMIT_INPUT} from "../actions/actionConstants";

export type LandingActionType =
  typeof SET_IS_INPUT_VISIBLE |
  typeof SET_INPUT_VALUE |
  typeof SUBMIT_INPUT |
  typeof SET_INPUT_ERROR;

