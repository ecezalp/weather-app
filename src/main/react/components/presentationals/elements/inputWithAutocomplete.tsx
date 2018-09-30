import * as React from 'react';
import * as Autosuggest from 'react-autosuggest'
import {CityWithId, InputWithAutocompleteProps} from "../../../types/interfaces";

import * as cityData from "../../../../resources/constants/cities.json";

const InputWithAutocomplete: React.SFC<InputWithAutocompleteProps> = ({
                                                                        setInputValueAndId,
                                                                        setSuggestions,
                                                                        suggestions,
                                                                        onChange,
                                                                        placeholder,
                                                                        value
                                                                      }) => {

  const onSuggestionsFetchRequested = ({value = ""}: { value: string }) => setSuggestions(getSuggestions(value));

  const onSuggestionsClearRequested = () => setSuggestions([]);

  const getSuggestions = (value: string) => {
    let suggestions: CityWithId[] = [];
    for (let city of cityData) {
      if (suggestions.length > 4) break;
      if (filterCity(city, value)) {
        suggestions = [...suggestions, city];
      }
    }
    return suggestions;
  };

  const filterCity = (city: CityWithId, value: string = "") =>
    city.name.toLowerCase().slice(0, value.length) === value.trim().toLowerCase();

  const getSuggestionValue = (suggestion: CityWithId) =>
    suggestion.name;

  const renderSuggestion = (suggestion: CityWithId) => {
    const bold: string = suggestion.name.slice(0, value.length);
    const normal: string = suggestion.name.slice(value.length, suggestion.name.length);
    const onClick = () => setInputValueAndId(suggestion);

    return <div className="suggestion" onClick={onClick}>
      <span className="bold">{bold}</span>
      {normal}
      <span>
        <img src={`https://www.countryflags.io/${suggestion.country}/flat/24.png`}/>
      </span>
    </div>;
  };

  return <Autosuggest
    suggestions={suggestions}
    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
    onSuggestionsClearRequested={onSuggestionsClearRequested}
    getSuggestionValue={getSuggestionValue}
    renderSuggestion={renderSuggestion}
    inputProps={{onChange, placeholder, value}}
  />
};

export default InputWithAutocomplete;