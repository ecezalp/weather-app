import axios from 'axios';

import * as actions from "./actionCreators";

export const submitInput = (dispatch: any, inputValue: string, cityId: number) => {
  if(!inputValue) return dispatch(actions.setInputError("Please enter a city name"));
  if(cityId === 0) return dispatch(actions.setInputError("Please pick a city from the list"));


  // dispatch(actions.setFetchingTokenTrue());
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