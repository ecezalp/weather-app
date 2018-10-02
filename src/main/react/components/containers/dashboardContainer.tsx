import {connect} from 'react-redux';

import {DashboardProps, DashboardState, Store} from "../../types/interfaces/propsAndState";
import DashBoard from "../presentationals/pages/dashboard";

const mapStateToProps = (state: Store): DashboardProps => ({
  ...state.dashboard,
  city: state.landing.selectedCity,
});

export default connect(
  mapStateToProps,
  null,
)(DashBoard);