import React, { useState } from "react";
import Input from "../components/Input";
import Password from "../components/Password";
import Select from "../components/Select";

export default function Form(props) {
  const [state, setState] = useState([]);

  const handleInput = params => {
    setState({ ...state, name: params });
  };

  const handlePassword = params => {
    setState({ ...state, password: params });
  };

  const handleSelect = params => {
    setState({ ...state, city: params });
  };

  const handleSubmit = params => {
    params.preventDefault();

    if (state.password.password === state.password.rpassword) {
      setState({ ...state, isMatch: "true" });
    } else {
      setState({ ...state, isMatch: "false" });
    }

    if (state.city === "" || state.city === "0" || state.city === null) {
      alert("Select City");
    } else {
      const data = {
        nama: state.name,
        password: state.password.password,
        isMatch: state.isMatch,
        city: state.city
      };
      console.log("data final", data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input handleInput={handleInput} />
      <br />
      <Password handlePassword={handlePassword} />
      <br />
      <Select handleSelect={handleSelect} />
      <br />
      <br />

      <button type="submit">Save</button>
    </form>
  );
}
