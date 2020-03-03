import React, { Component } from "react";
import ToggleMenuStyle from "./style";
import onClickOutside from "react-onclickoutside";

class ToggleMenu extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClickOutside = evt => {
    this.props.handleClickOutside();
  };

  render() {
    return (
      <ToggleMenuStyle
        id={this.props.id}
        background={this.props.background}
        color={this.props.color}
        top={this.props.top}
        right={this.props.right}
        left={this.props.left}
        bottom={this.props.bottom}
        padding={this.props.padding}
        border={this.props.border}
        borderRadius={this.props.borderRadius}
      >
        {this.props.children}
      </ToggleMenuStyle>
    );
  }
}

export default onClickOutside(ToggleMenu);
