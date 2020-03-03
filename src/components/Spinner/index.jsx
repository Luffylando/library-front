import React, { Component } from "react";
import SpinnerStyle from "./style";

class Spinner extends Component {
  render() {
    return (
      <SpinnerStyle>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </SpinnerStyle>
    );
  }
}

export default Spinner;
