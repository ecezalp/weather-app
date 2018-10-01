import axios from 'axios';

import * as actions from "../actionCreators";
import {findCityById} from "./endpoints";

export const submitInput = (dispatch: any, inputValue: string, cityId: number) => {
  if (!inputValue || cityId === 0) return dispatch(actions.setInputError("Please pick a city"));
  dispatch(actions.setIsFetchingData(true));

  console.log(findCityById(cityId));

  return axios.get(findCityById(cityId)).then(response => console.log(response.data));

  // return axios.get(`/api/authentication`)
  //   .then(response => {
  //     persistStateOnLocalStorage(state);
  //     setWindowLocation(response.data);
  //   })
  //   .catch(error => {
  //     dispatch(actions.getTokenUrlFailure(error.data));
  //     dispatch(actions.setFetchingTokenFalse());
  //   });
};