import * as React from 'react';
import {Route} from "react-router-dom";
import LandingContainer from "./components/containers/landingContainer";

export default function Routes() {

  const landing = () => <LandingContainer/>;

  return <div className="app-container">
    <Route exact path="/" component={landing}/>
  </div>;
}

