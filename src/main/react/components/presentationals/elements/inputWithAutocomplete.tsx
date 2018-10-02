import * as React from 'react';
import * as Autosuggest from 'react-autosuggest'

import * as cityData from "../../../../resources/json/testCities.json";
import {InputWithAutocompleteProps} from "../../../types/interfaces/propsAndState";
import {City} from "../../../types/interfaces/domain";
import {findCountryFlagByCode} from "../../../constants/endpoints";

const InputWithAutocomplete: React.SFC<InputWithAutocompleteProps> = ({
                                                                        setSelectedCity,
                                                                        setSuggestions,
                                                                        suggestions,
                                                                        onKeyDown,
                                                                        placeholder,
                                                                        value,
                                                                        disabled
                                                                      }) => {

  const onSuggestionsFetchRequested = ({value = ""}: { value: string }) => setSuggestions(getSuggestions(value));

  const onSuggestionsClearRequested = () => setSuggestions([]);

  const getSuggestions = (value: string) => {
    let suggestions: City[] = [];
    for (let city of cityData) {
      if (suggestions.length > 4) break;
      if (filterCity(city, value)) {
        suggestions = [...suggestions, city];
      }
    }
    return suggestions;
  };

  const filterCity = (city: City, value: string = "") =>
    city.name.toLowerCase().slice(0, value.length) === value.trim().toLowerCase();

  const getSuggestionValue = (suggestion: City) =>
    suggestion.name;

  const renderSuggestion = (suggestion: City) => {
    const bold: string = suggestion.name.slice(0, value.length);
    const normal: string = suggestion.name.slice(value.length, suggestion.name.length);
    const onClick = () => setSelectedCity(suggestion);

    return <div className="suggestion" onClick={onClick}>
      <span className="bold">{bold}</span>
      {normal}
      <span>
        <img src={findCountryFlagByCode(suggestion.country)}/>
      </span>
    </div>;
  };

  const inputProps = {
    onKeyDown,
    onChange: onKeyDown,
    placeholder,
    value,
    disabled,
  };

  return <Autosuggest
    suggestions={suggestions}
    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
    onSuggestionsClearRequested={onSuggestionsClearRequested}
    getSuggestionValue={getSuggestionValue}
    renderSuggestion={renderSuggestion}
    inputProps={inputProps}
  />
};

export default InputWithAutocomplete;