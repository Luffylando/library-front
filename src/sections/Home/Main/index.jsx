import React, { Component } from "react";
import MainStyle from "./style";
import njegos from "../../../assets/imgs/njegos.jpg";
import P from "../../../ui/P";
import SVGInline from "react-svg-inline";
import { fb } from "../../../assets/icons";

class Main extends Component {
  render() {
    return (
      <MainStyle>
        <div className="backgroundImg">
          <img src={njegos} alt="bg" />
        </div>
        <div className="eventBox">
          <div className="descriptionSection">
            <div className="descTitle">
              Groundwork of the Metaphysic of Morals
            </div>
            <div className="descText">Tuesday, December 10 at 6:30 pm</div>
            <div className="shareEvent">
              <SVGInline svg={fb} />
              Share Event >>
            </div>
            <button>
              <P>Learn More</P>
            </button>
          </div>
          <img src={njegos} alt="event-img" />
        </div>
      </MainStyle>
    );
  }
}

export default Main;
