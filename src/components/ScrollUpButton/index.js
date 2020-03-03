import React from "react";
import ScrollUpButton from "react-scroll-up-button";

import ScrollUpWidger from "./style";

export default class Index extends React.Component {
  render() {
    return (
      <ScrollUpWidger>
        <ScrollUpButton EasingType="easeInQuad" />
      </ScrollUpWidger>
    );
  }
}
