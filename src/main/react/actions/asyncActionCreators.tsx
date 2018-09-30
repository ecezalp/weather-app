import axios from 'axios';

import * as actions from "./actionCreators";

export const submitInput = (dispatch: any, inputValue: string) => {
  if(!inputValue) return dispatch(actions.setInputError("Please enter a city name"));


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
//
// const setPicturesFromLink = (url, dispatch, handleSuccess) => {
//   dispatch(actions.setFetchingPicturesTrue());
//   return axios.get(url)
//     .then(response => {
//       handleSuccess();
//       dispatch(actions.setPicturesFromInsta(response.data));
//       dispatch(actions.clearSearchInput());
//     })
//     .catch(() => dispatch(actions.clearSearchInput()));
// };
//
// export const search = (dispatch, term, token) => {
//   const url = `https://api.instagram.com/v1/tags/${term.replace("#", "")}/media/recent?access_token=${token}`;
//   setPicturesFromLink(url, dispatch, () => {});
// };
//
// export const getPictureDataFromInstagram = (dispatch, token, handleSuccess) => {
//   const url = `https://api.instagram.com/v1/users/self/media/recent?access_token=${token}`;
//   setPicturesFromLink(url, dispatch, handleSuccess);
// };
//
// export const getPictureTags = (dispatch, picture) => {
//   dispatch(actions.setFetchingTagsTrue());
//   return axios.post(`/api/tags`, picture)
//     .then(response => dispatch(actions.setVisionTags(response.data)));
// };