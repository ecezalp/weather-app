import {SET_INPUT_VALUE, SET_IS_INPUT_VISIBLE, SUBMIT_INPUT, SET_INPUT_ERROR} from "./actionConstants";
import {createAction} from "./actionTypeHelpers";

export const setIsInputVisible = (isVisible: boolean) => createAction(SET_IS_INPUT_VISIBLE, isVisible);

export const setInputValue = (value: string) => createAction(SET_INPUT_VALUE, value);

export const setInputError = (errorMessage: string) => createAction(SET_INPUT_ERROR, errorMessage);