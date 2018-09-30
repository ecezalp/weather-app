export interface Store {
  landing: LandingState,
  autocomplete: InputWithAutocompleteState,
}

export interface Action<T extends string> {
  type: T
}

export interface ActionWithPayload<T extends string, P> {
  type: T,
  payload: P
}

export interface LandingState {
  isInputVisible: boolean,
  inputValue: string,
  inputError: string,
  cityId: number,
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
}

export interface CityWithId {
  name: string,
  country: string,
  id: number,
}