import {connect} from 'react-redux';

import InputWithAutocomplete from '../presentationals/elements/inputWithAutocomplete';

import * as actions from '../../actions/actionCreators';
import {InputWithAutocompleteState, Store} from "../../types/interfaces/propsAndState";
import {City} from "../../types/interfaces/domain";


const mapStateToProps = (state: Store): InputWithAutocompleteState => ({...state.autocomplete});

const mapDispatchToProps = (dispatch: any) => ({
  setSelectedCity: (suggestion: City) => dispatch(actions.setSelectedCity(suggestion)),
  setSuggestions: (payload: City[]) => dispatch(actions.setSuggestions(payload)),
});

const injectedProps = (stateProps: any, dispatchProps: any, ownProps: any) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  injectedProps
)(InputWithAutocomplete);