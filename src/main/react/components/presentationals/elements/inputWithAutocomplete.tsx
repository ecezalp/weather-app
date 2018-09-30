import * as React from 'react';
import * as Autosuggest from 'react-autosuggest'

import {cities} from '../../../../resources/constants/cities';

import {CityWithId, InputWithAutocompleteProps} from "../../../types/interfaces";

const InputWithAutocomplete: React.SFC<InputWithAutocompleteProps> = ({placeholder, handleChange, value}) => {

  const CityAutosuggest = Autosuggest as { new (): Autosuggest<CityWithId> };

  const getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : cities.filter(city =>
      city.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  const getSuggestionValue = (suggestion: CityWithId) => suggestion.name;

  const renderSuggestion = (suggestion: CityWithId) =>
    <div>
      {suggestion.name}
    </div>
  ;


  return <input
    placeholder={placeholder}
    onChange={handleChange}
    value={value}
  />;
};

export default InputWithAutocomplete;