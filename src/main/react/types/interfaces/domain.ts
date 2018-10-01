export interface Action<T extends string> {
  type: T
}

export interface ActionWithPayload<T extends string, P> {
  type: T,
  payload: P
}

export interface CityWithId {
  name: string,
  country: string,
  id: number,
}