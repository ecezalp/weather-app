import {combineReducers} from 'redux';
import landing from './landingReducer';
import autocomplete from './autocompleteReducer';
import weather from './weatherReducer';

export default combineReducers({
  landing,
  autocomplete,
  weather,
});