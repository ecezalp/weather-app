import {connect} from 'react-redux';

import Landing from '../presentationals/pages/landing';
import * as actions from '../../actions/actionCreators';
import * as asyncActions from '../../actions/asyncActionCreators';

import {LandingState, Store} from "../../types/interfaces";

const mapStateToProps = (state: Store): LandingState => ({...state.landing});

const mapDispatchToProps = (dispatch: any) => ({
  setIsInputVisible: (payload: boolean) => dispatch(actions.setIsInputVisible(payload)),
  setInputValue: (payload: string) => dispatch(actions.setInputValue(payload)),
  submitInput: (inputValue: string) => asyncActions.submitInput(dispatch, inputValue)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);