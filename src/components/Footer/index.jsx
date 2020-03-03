import React, { Component } from "react";
import FooterStyle from "./style";
import SVGInline from "react-svg-inline";
import { logo, fb, ins, tw, li } from "../../assets/icons";
import H1 from "../../ui/H1";
import P from "../../ui/P";
import FooterSection from "../../components/FooterSection";
import ScrollUpButton from "../../components/ScrollUpButton";

export default class Footer extends Component {
  render() {
    var date = new Date();
    var currentYear = date.getFullYear();
    return (
      <FooterStyle>
        <div className="mainSection">
          <div className="titleSection">
            <div className="title">
              <H1>Luffy's Library</H1>
              <SVGInline svg={logo} />
            </div>

            <div className="address">
              <P>Tolstojeva 12 </P>
              <P>Beograd, Serbia</P>
              <P>+381 111 333</P>
              <P>contact@luffyslibrary.com</P>
            </div>
          </div>

          <div className="linksSection">
            <FooterSection
              number={"01"}
              mainTitle={"Home"}
              item1={"Books"}
              item2={"Events"}
              item1Link={"/catalog"}
              item2Link={"/events"}
            />
            <FooterSection
              number={"02"}
              mainTitle={"Catalog"}
              item1={"Books"}
              item1Link={"/catalog"}
            />
            <FooterSection
              number={"03"}
              mainTitle={"Contact"}
              item1={"Contact Form"}
              item1Link={"/contact"}
            />
            <FooterSection
              number={"04"}
              mainTitle={"About"}
              item1={"About us"}
              item2={"Contact us"}
              item1Link={"/about"}
              item2Link={"/contact"}
            />
          </div>
        </div>
        <div className="privacySection">
          <div className="privacy">
            Luffy’s Library - All Rights Reserved - {currentYear}
          </div>
          <div className="socialIcons">
            <a href="http://facebook.com">
              <SVGInline svg={fb} />
            </a>
            <a href="http://instagram.com">
              <SVGInline svg={ins} />
            </a>
            <a href="http://twitter.com">
              <SVGInline svg={tw} />
            </a>
            <a href="http://linkedin.com">
              <SVGInline svg={li} />
            </a>
          </div>
        </div>
        <ScrollUpButton />
      </FooterStyle>
    );
  }
}
