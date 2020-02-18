import React, { Component } from "react";
import ButtonStyle from "./style";
import SVGInline from "react-svg-inline";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ButtonStyle
        onClick={this.props.onClick}
        bgColor={this.props.bgColor}
        width={this.props.width}
        height={this.props.height}
        padding={this.props.padding}
        margin={this.props.margin}
        fSize={this.props.fSize}
        fWeight={this.props.fWeight}
        btnBorder={this.props.btnBorder}
        bRadius={this.props.bRadius}
        txtColor={this.props.txtColor}
        hoverBg={this.props.hoverBg}
        hoverTxt={this.props.hoverTxt}
        transition={this.props.transition}
        letterSpacing={this.props.letterSpacing}
        hoverBorder={this.props.hoverBorder}
        type={this.props.type}
        disabled={this.props.disabled}
        svg={this.props.svg}
      >
        {this.props.btnText}{" "}
        {/* {this.props.svg ? <SVGInline svg={this.props.svg} /> : null} */}
      </ButtonStyle>
    );
  }
}

export default Button;
