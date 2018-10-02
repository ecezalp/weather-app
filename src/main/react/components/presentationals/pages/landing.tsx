import * as React from 'react';
import InputWithAutocompleteContainer from "../../containers/InputWithAutocompleteContainer";
import {LandingProps} from "../../../types/interfaces/propsAndState";
import Spinner from "../elements/spinner";

const Landing: React.SFC<LandingProps> = (props: LandingProps) => {

  const {
    setIsInputVisible,
    isInputVisible,
    inputValue,
    setInputValue,
    selectedCity,
    setSelectedCity,
    handleSubmit,
    inputError,
    isFetchingData,
    history
  } = props;

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
    style={{visibility: condition ? "visible" : "hidden"}}
    className={condition ? "animate" : ""}
  >
    {element}
  </div>;

  const handleTextChange = (e: any) => {
    if (e.key === "Backspace") {
      return setSelectedCity({name: e.target.value, id: 0, country: ""});
    }
    e.type === "change" && setInputValue(e.target.value);
  };

  const textField = <InputWithAutocompleteContainer
    placeholder="city"
    onKeyDown={handleTextChange}
    value={inputValue}
    disabled={isFetchingData}
  />;

  const submitButton = <button
    onClick={() => handleSubmit(history, selectedCity.id)}>
    Submit
  </button>;

  const inputErrorMessage = inputError &&
    <div className={"input-error"}>
      {inputError}
    </div>;

  const spinner = <Spinner isVisible={isFetchingData}/>;

  return <div className="landing-container">
    {title}
    {intro}
    {withAnimation(textField, isInputVisible)}
    {inputErrorMessage}
    {withAnimation(submitButton, selectedCity.id !== 0)}
    {spinner}
  </div>;
};

export default Landing;