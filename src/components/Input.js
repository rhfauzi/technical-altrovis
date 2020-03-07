import React, { useState, useEffect } from "react";

const Input = props => {
  const [input, setInput] = useState("");
  const [errors, setErrors] = useState("");

  useEffect(() => {
    props.handleInput(input);
  }, [input]);

  const handleChange = params => {
    setInput(params.target.value);

    if (params.target.value.length < 3) {
      setErrors("Name cannot be less than 3 Characters!");
    } else if (params.target.value.length > 25) {
      setErrors("Name cannot be longer than 25 Characters!");
    } else {
      setErrors(null);
    }
  };

  return (
    <label>
      Name
      <br />
      <input type="text" name="name" onChange={handleChange} required />
      {/* or can use this */}
      {/* <input type="text" name="name" onChange={handleChange} required minlength="3" maxlength="25" /> */}
      <br />
      {errors !== null ? <span style={{ color: "red" }}>{errors}</span> : ""}
      <br />
    </label>
  );
};

export default Input;
