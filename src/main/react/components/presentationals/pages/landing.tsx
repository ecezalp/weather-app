import * as React from 'react';
import InputWithAutocomplete from "../elements/inputWithAutocomplete";
import {LandingProps} from "../../../types/interfaces";

const Landing: React.SFC<LandingProps> = ({
                                            setIsInputVisible,
                                            isInputVisible,
                                            inputValue,
                                            setInputValue,
                                            submitInput,
                                            inputError
                                          }) => {

  const title = <h1>Ece's Weather App</h1>;

  const city = <span
    className="artificial-link"
    onClick={() => setIsInputVisible(true)}
  >
      city
    </span>;

  const intro = <div className="intro">
    You are sitting on your couch, sipping on your coffee. Suddenly, you wonder: is it a wet fog that is outside, or
    the warming rays of the new sun? The curtains are closed. You remember the name of the {city} you live in.
  </div>;

  const withAnimation = (element: any) => <div
    style={!isInputVisible ? ({visibility: "hidden"}) : {}}
    className={isInputVisible && "animate"}
  >
    {element}
  </div>;

  const textField = <InputWithAutocomplete
    placeholder="city"
    handleChange={(e: any) => setInputValue(e.target.value)}
    value={inputValue}
  />;

  const submitButton = <button
    onClick={() => submitInput(inputValue)}>
    Submit
  </button>;

  const inputErrorMessage = inputError &&
    <div className={"input-error"}>
      {inputError}
    </div>;

  return <div className="landing-container">
    {title}
    {intro}
    {withAnimation(textField)}
    {inputErrorMessage}
    {withAnimation(submitButton)}
  </div>;
};

export default Landing;