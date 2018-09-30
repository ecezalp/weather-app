import {connect} from 'react-redux';

import Landing from '../presentationals/pages/landing';
import * as actions from '../../actions/actionCreators';
import * as asyncActions from '../../actions/asyncActionCreators';

import {CityWithId, LandingState, Store} from "../../types/interfaces";
import {setInputValueAndId} from "../../actions/actionCreators";

const mapStateToProps = (state: Store): LandingState => ({...state.landing});

const mapDispatchToProps = (dispatch: any) => ({
  setIsInputVisible: (payload: boolean) => dispatch(actions.setIsInputVisible(payload)),
  setInputValue: (payload: string) => dispatch(actions.setInputValue(payload)),
  submitInput: (inputValue: string, cityId: number) => asyncActions.submitInput(dispatch, inputValue, cityId),
  setInputValueAndId: (payload: CityWithId) => dispatch(actions.setInputValueAndId(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);