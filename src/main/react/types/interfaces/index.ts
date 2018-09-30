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
  setIsInputVisible: (payload: boolean) => any,
  setInputValue: (payload: string) => any,
  submitInput: (payload: string) => any,
  isInputVisible: boolean,
  inputValue: string,
  inputError: string,
  cityId: number,
}

export interface InputWithAutocompleteState {
  suggestions: CityWithId[];
}

export interface InputWithAutocompleteProps {
  setInputValueAndId: (payload: CityWithId) => any,
  setSuggestions: (payload: CityWithId[]) => any,
  suggestions: CityWithId[],
  placeholder: string,
  onChange: (payload: any) => any,
  value: string,
}

export interface CityWithId {
  name: string,
  country: string,
  id: number,
}