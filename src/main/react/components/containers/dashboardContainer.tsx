import {connect} from 'react-redux';
import * as actions from '../../actions/actionCreators';
import {Store} from '../../types/interfaces/propsAndState';
import DashBoard from '../presentationals/pages/dashboard';

const mapStateToProps = (state: Store): any => ({
  ...state.dashboard,
  city: state.landing.selectedCity,
});

const mapDispatchToProps = (dispatch: any) => ({
  setIsCelsius: (isCelsius: boolean) => dispatch(actions.setIsCelsius(isCelsius)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashBoard);