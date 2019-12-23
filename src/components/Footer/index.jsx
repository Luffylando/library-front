import React, { Component } from "react";
import FooterStyle from "./style";
import SVGInline from "react-svg-inline";
import { logo, fb, ins, tw, li } from "../../assets/icons";
import H1 from "../../ui/H1";
import P from "../../ui/P";
import FooterSection from "../../components/FooterSection";

export default class Footer extends Component {
  render() {
    return (
      <FooterStyle>
        <div className="mainSection">
          <div className="titleSection">
            <div className="title">
              <H1>Luffy's Library</H1>
              <SVGInline svg={logo} />
            </div>

            <div className="address">
              <P>Address 19-20</P>
              <P>Lorem Ipsum, Serbia</P>
              <P>+381 *** ****</P>
              <P>contact@luffyslibrary.com</P>
            </div>
          </div>

          <div className="linksSection">
            <FooterSection
              number={"01"}
              mainTitle={"Home"}
              item1={"Lorem Ipsum"}
              item2={"Lorem Ipsum"}
            />
            <FooterSection
              number={"02"}
              mainTitle={"Catalog"}
              item1={"Lorem Ipsum"}
              item2={"Lorem Ipsum"}
              item3={"Lorem Ipsum"}
            />
            <FooterSection
              number={"03"}
              mainTitle={"Contact"}
              item1={"Lorem Ipsum"}
            />
            <FooterSection
              number={"04"}
              mainTitle={"About"}
              item1={"Lorem Ipsum"}
              item2={"Lorem Ipsum"}
            />
          </div>
        </div>
        <div className="privacySection">
          <div className="privacy">
            Luffy’s Library - All Rights Reserved - 2019
          </div>
          <div className="socialIcons">
            <SVGInline svg={fb} />
            <SVGInline svg={ins} />
            <SVGInline svg={tw} />
            <SVGInline svg={li} />
          </div>
        </div>
      </FooterStyle>
    );
  }
}
