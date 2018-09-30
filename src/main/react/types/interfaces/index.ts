export interface Store {
  landing: LandingState,
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
}

export interface LandingProps {
  setIsInputVisible: (payload: boolean) => any,
  setInputValue: (payload: string) => any,
  submitInput: (payload: string) => any,
  isInputVisible: boolean,
  inputValue: string,
  inputError: string,
}

export interface InputWithAutocompleteProps {
  placeholder: string,
  handleChange: (payload: any) => any,
  value: string,
}

export interface CityWithId {
  name: string,
  country: string,
  id: number,
}