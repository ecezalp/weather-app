import * as React from 'react';
import {Route} from "react-router-dom";
import LandingContainer from "./components/containers/landingContainer";
import DashBoardContainer from "./components/containers/dashboardContainer";

export default function Routes() {

  const landing = ({history}: {history: any}) => <LandingContainer history={history}/>;

  const dashboard = () => <DashBoardContainer/>;

  return <div className="app-container">
    <Route exact path="/" component={landing}/>
    <Route exact path="/dashboard" component={dashboard}/>
  </div>;
}

