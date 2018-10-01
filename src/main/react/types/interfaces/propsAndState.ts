import {CityWithId} from "./domain";

export interface Store {
  landing: LandingState,
  autocomplete: InputWithAutocompleteState,
  weather: WeatherState,
}

export interface LandingState {
  isInputVisible: boolean,
  inputValue: string,
  inputError: string,
  cityId: number,
  isFetchingData: boolean,
}

export interface LandingProps {
  setInputValueAndId: (suggestion: CityWithId) => any,
  setIsInputVisible: (isInputVisible: boolean) => any,
  setInputValue: (inputValue: string) => any,
  submitInput: (inputValue: string, cityId: number) => any,
  isInputVisible: boolean,
  inputValue: string,
  inputError: string,
  cityId: number,
  isFetchingData: boolean,
}

export interface InputWithAutocompleteState {
  suggestions: CityWithId[];
}

export interface InputWithAutocompleteProps {
  setInputValueAndId: (suggestion: CityWithId) => any,
  setSuggestions: (payload: CityWithId[]) => any,
  suggestions: CityWithId[],
  placeholder: string,
  onKeyDown: (payload: any) => any,
  value: string,
  disabled: boolean,
}

export interface WeatherState {

}

export interface SpinnerProps {
  isVisible: boolean,
}