import * as React from 'react';
import {SpinnerProps} from "../../../types/interfaces/propsAndState";

const Spinner: React.SFC<SpinnerProps> = ({isVisible}) => {

  return <div className="spinner-wave" style={{visibility: isVisible ? "visible" : "hidden"}}>
    <div className="wave"/>
    <div className="wave"/>
    <div className="wave"/>
    <div className="wave"/>
    <div className="wave"/>
  </div>
};

export default Spinner;