import {City, Forecast, Weather} from "./domain";

export interface Store {
  landing: LandingState,
  autocomplete: InputWithAutocompleteState,
  dashboard: DashboardState,
}

export interface LandingState {
  isInputVisible: boolean,
  inputValue: string,
  inputError: string,
  selectedCity: City,
  isFetchingData: boolean,
}

export interface LandingProps {
  setSelectedCity: (selectedCity: City) => any,
  setIsInputVisible: (isInputVisible: boolean) => any,
  setInputValue: (inputValue: string) => any,
  handleSubmit: (inputValue: string, cityId: number) => any,
  isInputVisible: boolean,
  inputValue: string,
  inputError: string,
  selectedCity: City,
  isFetchingData: boolean,
  history: any,
}

export interface InputWithAutocompleteState {
  suggestions: City[];
}

export interface InputWithAutocompleteProps {
  setSelectedCity: (selectedCity: City) => any,
  setSuggestions: (payload: City[]) => any,
  suggestions: City[],
  placeholder: string,
  onKeyDown: (payload: any) => any,
  value: string,
  disabled: boolean,
}

export interface MapProps {
  lat: number,
  lon: number,
}

export interface DashboardState {
  weather: Weather,
  isCelsius: boolean,
  forecast: Forecast,
}

export interface DashboardProps {
  weather: Weather,
  city: City,
  forecast: Forecast,
  isCelsius: boolean,
  setIsCelsius: (isCelsius: boolean) => any;
}

export interface SpinnerProps {
  isVisible: boolean,
}