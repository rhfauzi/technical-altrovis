import React, { useState, useEffect, Fragment } from "react";

const Select = props => {
  const [input, setInput] = useState("");
  useEffect(() => {
    props.handleSelect(input);
  }, [input]);

  const namaKota = [
    "Kabupaten Bantul",
    "Kabupaten Gunungkidul",
    "Kabupaten Kulon Progo",
    "Kabupaten Sleman",
    "Kota Yogyakarta"
  ];

  const handleChange = params => {
    setInput(params.target.value);
  };

  return (
    <label>
      Select City
      <br />
      <select name="city" onChange={handleChange}>
        <option value="0">Select City</option>
        {namaKota.map((value, index) => {
          return (
            <Fragment key={index}>
              <option value={value}>{value}</option>
            </Fragment>
          );
        })}
      </select>
    </label>
  );
};

export default Select;
