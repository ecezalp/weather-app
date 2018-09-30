import {
  SET_INPUT_VALUE, SET_IS_INPUT_VISIBLE, SUBMIT_INPUT, SET_INPUT_ERROR, SET_SUGGESTIONS,
  SET_INPUT_VALUE_AND_ID
} from "./actionConstants";
import {createAction} from "./actionTypeHelpers";
import {CityWithId} from "../types/interfaces";

// landing action creators

export const setIsInputVisible = (isVisible: boolean) => createAction(SET_IS_INPUT_VISIBLE, isVisible);

export const setInputValue = (value: string) => createAction(SET_INPUT_VALUE, value);

export const setInputError = (errorMessage: string) => createAction(SET_INPUT_ERROR, errorMessage);

export const setInputValueAndId = (suggestions: CityWithId) => createAction(SET_INPUT_VALUE_AND_ID, suggestions);


// input with autocomplete action creators

export const setSuggestions = (suggestions: CityWithId[]) => createAction(SET_SUGGESTIONS, suggestions);
