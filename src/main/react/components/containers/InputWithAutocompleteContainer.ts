import {connect} from 'react-redux';

import InputWithAutocomplete from '../presentationals/elements/inputWithAutocomplete';

import * as actions from '../../actions/actionCreators';

import {CityWithId, InputWithAutocompleteState, Store} from "../../types/interfaces";

const mapStateToProps = (state: Store): InputWithAutocompleteState => ({...state.autocomplete});

const mapDispatchToProps = (dispatch: any) => ({
  setInputValueAndId: (suggestion: CityWithId) => dispatch(actions.setInputValueAndId(suggestion)),
  setSuggestions: (payload: CityWithId[]) => dispatch(actions.setSuggestions(payload)),
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