import * as React from 'react';
import {SpinnerProps} from "../../../types/interfaces/propsAndState";

const Spinner: React.SFC<SpinnerProps> = ({isVisible}) => {

  const style = {visibility: isVisible ? "visible" : "hidden"};

  return <div className="spinner-wave" style={style}>
    <div className="wave"/>
    <div className="wave"/>
    <div className="wave"/>
    <div className="wave"/>
    <div className="wave"/>
  </div>
};

export default Spinner;