import React, { Component } from "react";
import SponsorsStyle from "./style";
import H2 from "../../../ui/H2";
import P from "../../../ui/P";

import { sponsor1, sponsor2, sponsor3 } from "../../../assets/icons";
import SVGInline from "react-svg-inline";

class Sponsors extends Component {
  render() {
    return (
      <SponsorsStyle>
        <H2 className="title">Our Sponsors</H2>
        <div className="sponsors">
          <div className="single">
            <SVGInline svg={sponsor3} />
            <P>Lorem Ipsum</P>
          </div>
          <div className="single">
            <SVGInline svg={sponsor1} />
            <P>Lorem Ipsum</P>
          </div>
          <div className="single">
            <SVGInline svg={sponsor2} />
            <P>Lorem Ipsum</P>
          </div>
          <div className="single">
            <SVGInline svg={sponsor3} />
            <P>Lorem Ipsum</P>
          </div>
        </div>
      </SponsorsStyle>
    );
  }
}

export default Sponsors;
