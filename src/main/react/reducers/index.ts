import {combineReducers} from 'redux';
import landing from './landingReducer';
import autocomplete from './autocompleteReducer';

export default combineReducers({
  landing,
  autocomplete,
});