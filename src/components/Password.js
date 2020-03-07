import React, { useState, useEffect, Fragment } from "react";

const Password = props => {
  const [input, setInput] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    props.handlePassword(input);
  }, [input]);

  const handleChange = params => {
    if (params.target.name === "password") {
      setInput({ ...input, password: params.target.value });
      if (params.target.value.length < 8) {
        setErrors({
          password: "Password cannot be less than 8 Characters!"
        });
      } else {
        setErrors({ password: null });
      }
    } else {
      setInput({ ...input, rpassword: params.target.value });
      if (params.target.value.length < 8) {
        setErrors({
          rpassword: "Repeat Password cannot be less than 8 Characters!"
        });
      } else {
        setErrors({ rpassword: null });
      }
    }
  };

  return (
    <Fragment>
      <label>
        Password
        <br />
        <input
          type="text"
          name="password"
          // value={input.password}
          onChange={handleChange}
          required
        />
        <br />
        {errors.password !== null ? (
          <span style={{ color: "red" }}>{errors.password}</span>
        ) : (
          ""
        )}
        <br />
      </label>
      <label>
        Repeat Password
        <br />
        <input type="text" name="rpassword" onChange={handleChange} required />
        <br />
        {errors.rpassword !== null ? (
          <span style={{ color: "red" }}>{errors.rpassword}</span>
        ) : (
          ""
        )}
        <br />
      </label>
    </Fragment>
  );
};

export default Password;
