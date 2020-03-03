import React, { Component } from "react";
import FeaturedEventStyle from "./style";
import { Link } from "react-router-dom";
import SVGInline from "react-svg-inline";
import { clock, calendar, flag } from "../../assets/icons";

class MainPageFeaturedEvent extends Component {
  render() {
    return (
      <FeaturedEventStyle>
        <div className="singleEvent">
          <div className="date">
            <div className="dateMount">{this.props.dateMonth}</div>
            <div className="dateNumber">{this.props.dateDay}</div>
          </div>
          <div className="eventTitle">
            <Link
              onClick={this.props.onClick ? this.props.onClick : null}
              to={this.props.linkTo ? this.props.linkTo : "#"}
            >
              <div className="eventName">{this.props.eventName}</div>
            </Link>
            <div className="eventTime">
              <SVGInline svg={clock} />
              {this.props.eventTime}
            </div>
            <div className="eventDay">
              <SVGInline svg={calendar} /> {this.props.eventDay}
            </div>
          </div>
          <div className="tag">
            <SVGInline svg={flag} />
            <div className="tagName">adult</div>
          </div>
        </div>
      </FeaturedEventStyle>
    );
  }
}

export default MainPageFeaturedEvent;
