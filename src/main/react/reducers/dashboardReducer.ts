import {
  SET_IS_FETCHING_DATA,
} from "../actions/actionConstants";
import {DashboardActionType} from "../types/actions";
import {DashboardState} from "../types/interfaces/propsAndState";
import {ActionWithPayload} from "../types/interfaces/domain";

const initialState: DashboardState = {
  isFetchingData: false,
};


const dashboardReducer = (state = initialState,
                        action: ActionWithPayload<DashboardActionType, any>): DashboardState => {
  switch (action.type) {
    case SET_IS_FETCHING_DATA:
      return {...state, isFetchingData: action.payload};
    default:
      return state;
  }
};

export default dashboardReducer;