import React, { Component } from "react";
import FooterSectionStyle from "./style";
import { Link } from "react-router-dom";

export default class FooterSection extends Component {
  render() {
    return (
      <FooterSectionStyle>
        <div className="titleSection">
          {/* <div className="number">{this.props.number}</div> */}
          <div className="title">{this.props.mainTitle}</div>
        </div>
        <div className="itemsSection">
          <Link to={this.props.item1Link ? this.props.item1Link : "#"}>
            {this.props.item1 ? <p>{this.props.item1}</p> : null}
          </Link>
          <Link to={this.props.item2Link ? this.props.item2Link : "#"}>
            {this.props.item2 ? <p>{this.props.item2}</p> : null}
          </Link>

          <Link to={this.props.item3Link ? this.props.item3Link : "#"}>
            {this.props.item3 ? <p>{this.props.item3}</p> : null}
          </Link>

          <Link to={this.props.item4Link ? this.props.item4Link : "#"}>
            {this.props.item4 ? <p>{this.props.item4}</p> : null}
          </Link>
        </div>
      </FooterSectionStyle>
    );
  }
}
