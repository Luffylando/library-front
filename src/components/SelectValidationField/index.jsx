import React from "react";
import SelectValidationFieldStyle from "./style";

const SelectValidationField = props => {
  let options = props.options;
  return (
    <SelectValidationFieldStyle>
      <label>{props.label}</label>
      <div className="inputDiv">
        <select
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          style={{ display: "block" }}
        >
          <option key={""} value={""} />

          {options.map(option => (
            <option key={option.id} value={option.name} label={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        {props.errors ? (
          <div className="errorsShow">({props.errors})</div>
        ) : null}
      </div>
    </SelectValidationFieldStyle>
  );
};

export default SelectValidationField;
