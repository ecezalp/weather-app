import * as React from 'react';
import {Route} from "react-router-dom";
import LandingContainer from "./components/containers/landingContainer";
import DashBoard from "./components/presentationals/pages/dashboard";

export default function Routes() {

  const landing = () => <LandingContainer/>;

  const dashboard = () => <DashBoard/>;

  return <div className="app-container">
    <Route exact path="/" component={landing}/>
    <Route exact path="/dashboard" component={dashboard}/>
  </div>;
}

