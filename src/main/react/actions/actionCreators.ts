import {
  SET_INPUT_VALUE, SET_IS_INPUT_VISIBLE, SET_INPUT_ERROR, SET_SUGGESTIONS,
  SET_SELECTED_CITY, SET_IS_FETCHING_DATA, SET_WEATHER, SET_IS_CELSIUS, SET_FORECAST,
} from "./actionConstants";
import {createAction} from "../types/actions";
import {City, Forecast, Weather} from "../types/interfaces/domain";

// landing action creators
export const setIsInputVisible = (isVisible: boolean) => createAction(SET_IS_INPUT_VISIBLE, isVisible);
export const setInputValue = (value: string) => createAction(SET_INPUT_VALUE, value);
export const setInputError = (errorMessage: string) => createAction(SET_INPUT_ERROR, errorMessage);
export const setSelectedCity = (suggestion: City) => createAction(SET_SELECTED_CITY, suggestion);

// input with autocomplete action creators
export const setSuggestions = (suggestions: City[]) => createAction(SET_SUGGESTIONS, suggestions);

// dashboard action creators
export const setIsFetchingData = (isFetchingData: boolean) => createAction(SET_IS_FETCHING_DATA, isFetchingData);
export const setWeather = (data: Weather) => createAction(SET_WEATHER, data);
export const setForecast = (data: Forecast) => createAction(SET_FORECAST, data);
export const setIsCelsius = (isCelsius: boolean) => createAction(SET_IS_CELSIUS, isCelsius);
