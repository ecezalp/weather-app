import {combineReducers} from 'redux';
import landing from './landingReducer';
import autocomplete from './autocompleteReducer';
import dashboard from './dashboardReducer';

export default combineReducers({
  landing,
  autocomplete,
  dashboard,
});