import React from "react";
import InputValidationFieldStyle from "./style";

const TextareaValidationField = props => {
  return (
    <InputValidationFieldStyle>
      <label>{props.label}</label>
      <div className="textareaDiv">
        <textarea
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

export default TextareaValidationField;
