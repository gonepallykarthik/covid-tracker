import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { getCountries } from "../../api/index";

function CountryPicker({ handle }) {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const countries = await getCountries();
      setCountry(countries);
    };
    fetchdata();
  });

  return (
    <FormControl>
      <NativeSelect onChange={(e) => handle(e.target.value)}>
        <option value="">Global</option>
        {country.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
