import React, { Component } from "react";
import FooterSectionStyle from "./style";

export default class FooterSection extends Component {
  render() {
    return (
      <FooterSectionStyle>
        <div className="titleSection">
          <div className="number">{this.props.number}</div>
          <div className="title">{this.props.mainTitle}</div>
        </div>
        <div className="itemsSection">
          {this.props.item1 ? <p>{this.props.item1}</p> : null}
          {this.props.item2 ? <p>{this.props.item2}</p> : null}
          {this.props.item3 ? <p>{this.props.item3}</p> : null}
          {this.props.item4 ? <p>{this.props.item4}</p> : null}
        </div>
      </FooterSectionStyle>
    );
  }
}
