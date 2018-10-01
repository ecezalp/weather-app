import {
  SET_INPUT_VALUE, SET_IS_INPUT_VISIBLE, SUBMIT_INPUT, SET_INPUT_ERROR, SET_SUGGESTIONS,
  SET_INPUT_VALUE_AND_ID, SET_IS_FETCHING_DATA
} from "./actionConstants";
import {createAction} from "../types/actions";
import {CityWithId} from "../types/interfaces/domain";

// landing action creators
export const setIsInputVisible = (isVisible: boolean) => createAction(SET_IS_INPUT_VISIBLE, isVisible);
export const setInputValue = (value: string) => createAction(SET_INPUT_VALUE, value);
export const setInputError = (errorMessage: string) => createAction(SET_INPUT_ERROR, errorMessage);
export const setInputValueAndId = (suggestion: CityWithId) => createAction(SET_INPUT_VALUE_AND_ID, suggestion);

// input with autocomplete action creators
export const setSuggestions = (suggestions: CityWithId[]) => createAction(SET_SUGGESTIONS, suggestions);

// dashboard action creators
export const setIsFetchingData = (isFetchingData: boolean) => createAction(SET_IS_FETCHING_DATA, isFetchingData);
