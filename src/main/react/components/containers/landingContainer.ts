import {connect} from 'react-redux';

import Landing from '../presentationals/pages/landing';
import * as actions from '../../actions/actionCreators';
import * as asyncActions from '../../actions/asyncActions/asyncActionCreators';
import {LandingState, Store} from "../../types/interfaces/propsAndState";
import {City} from "../../types/interfaces/domain";

const mapStateToProps = (state: Store): LandingState => ({...state.landing});

const mapDispatchToProps = (dispatch: any) => ({
  setIsInputVisible: (payload: boolean) => dispatch(actions.setIsInputVisible(payload)),
  setInputValue: (payload: string) => dispatch(actions.setInputValue(payload)),
  handleSubmit: (history: any, cityId: number) => asyncActions.handleSubmit(dispatch, history, cityId),
  setSelectedCity: (payload: City) => dispatch(actions.setSelectedCity(payload)),
});

const injectedProps = (stateProps: LandingState, dispatchProps: any, ownProps: any) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  injectedProps
)(Landing);