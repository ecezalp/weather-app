import {
  SET_INPUT_ERROR, SET_INPUT_VALUE, SET_IS_INPUT_VISIBLE,
  SUBMIT_INPUT, SET_SUGGESTIONS, SET_IS_FETCHING_DATA, SET_WEATHER, SET_SELECTED_CITY
} from "../../actions/actionConstants"
import {Action, ActionWithPayload} from "../interfaces/domain";

export type LandingActionType =
  typeof SET_IS_INPUT_VISIBLE |
  typeof SET_INPUT_VALUE |
  typeof SUBMIT_INPUT |
  typeof SET_INPUT_ERROR |
  typeof SET_SELECTED_CITY |
  typeof SET_IS_FETCHING_DATA;

export type DashboardActionType =
  typeof SET_WEATHER;

export type AutocompleteActionType =
  typeof SET_SUGGESTIONS;

export function createAction<T extends string>(type: T): Action<T>
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>
export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload ? {type, payload} : {type};
}
