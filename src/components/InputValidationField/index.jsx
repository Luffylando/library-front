import React from "react";
import InputValidationFieldStyle from "./style";

const InputValidationField = props => {
  return (
    <InputValidationFieldStyle>
      <label>{props.label}</label>
      <div className="inputDiv">
        <input
          type={props.type}
          placeholder={props.placehodler}
          name={props.name}
          onBlur={props.onBlur}
          value={props.value}
          onChange={props.onChange}
        />
        {props.errors && props.touched ? (
          <div className="errorsShow">({props.errors})</div>
        ) : null}
      </div>
    </InputValidationFieldStyle>
  );
};

export default InputValidationField;
