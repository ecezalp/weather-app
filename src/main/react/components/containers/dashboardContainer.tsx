import {connect} from 'react-redux';

import Landing from '../presentationals/pages/landing';
import {DashboardState, Store} from "../../types/interfaces/propsAndState";

const mapStateToProps = (state: Store): DashboardState => ({...state.dashboard});

export default connect(
  mapStateToProps,
  null,
)(Landing);