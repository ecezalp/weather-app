import axios from 'axios';

import * as actions from "../actionCreators";
import {findCityById} from "../../constants/endpoints";

export const handleSubmit = (dispatch: any, history: any, cityId: number) => {
  if (cityId === 0) return dispatch(actions.setInputError("Please pick a city"));
  dispatch(actions.setIsFetchingData(true));

  return axios.get(findCityById(cityId))
    .then(response => {
      dispatch(actions.setWeather(response.data));
      dispatch(actions.setIsFetchingData(false));
      history.push("/dashboard");
    })
    .catch(error => {
      dispatch(actions.setIsFetchingData(false));
      dispatch(actions.setInputError("Could not fetch data"))
    });
};