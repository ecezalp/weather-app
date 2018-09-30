import * as React from 'react';
import {LandingProps} from "../../../types/interfaces";
import InputWithAutocompleteContainer from "../../containers/InputWithAutocompleteContainer";

const Landing: React.SFC<LandingProps> = ({ cityId,
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
    You are sitting on your couch, sipping on your coffee. Suddenly, you wonder what is outside: is it a wet fog, or
    the warming rays of the new sun? The curtains are closed. You remember the name of the {city} you live in.
  </div>;

  const withAnimation = (element: any, condition: boolean) => <div
    style={!condition ? ({visibility: "hidden"}) : {}}
    className={condition && "animate"}
  >
    {element}
  </div>;

  const handleTextChange = (e: any) =>
    e.type === "change" && setInputValue(e.target.value);

  const textField = <InputWithAutocompleteContainer
    placeholder="city"
    onChange={handleTextChange}
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
    {withAnimation(textField, isInputVisible)}
    {inputErrorMessage}
    {withAnimation(submitButton, cityId !== 0)}
  </div>;
};

export default Landing;