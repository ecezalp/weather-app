import * as actions from "../actionCreators";

export const submitInput = (dispatch: any, inputValue: string, cityId: number) => {
  if (!inputValue || cityId === 0) return dispatch(actions.setInputError("Please pick a city"));

  dispatch(actions.setIsFetchingData(true));
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