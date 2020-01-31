import React from "react";
import ConfirmButtonStyle from "./style";

const ConfirmButton = props => {
  return (
    <ConfirmButtonStyle>
      <div className="question">{props.question}</div>
      <div className="answers">
        <button onClick={props.confirmed}>Yes</button>
        <button onClick={props.canceled}>No</button>
      </div>
    </ConfirmButtonStyle>
  );
};

export default ConfirmButton;
