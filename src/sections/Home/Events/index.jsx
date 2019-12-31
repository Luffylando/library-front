import React, { Component } from "react";
import EventsStyle from "./style";
import SVGInline from "react-svg-inline";
import { clock, calendar, flag } from "../../../assets/icons";
import library from "../../../assets/imgs/library.jpg";

class Events extends Component {
  render() {
    return (
      <EventsStyle>
        <div className="titleSection">
          <div className="mainTitle">PROGRAMS & EVENTS</div>
          <div className="subTitle">
            Choose from 1000+ programs & events a year.
          </div>
        </div>

        <div className="eventsSection">
          <div className="scheduleSection">
            <div className="singleEvent">
              <div className="date">
                <div className="dateMount">Jan</div>
                <div className="dateNumber">18</div>
              </div>
              <div className="eventTitle">
                <div className="eventName">Event Name</div>
                <div className="eventTime">
                  <SVGInline svg={clock} />
                  10:00am
                </div>
                <div className="eventDay">
                  <SVGInline svg={calendar} /> Wednesday
                </div>
              </div>
              <div className="tag">
                <SVGInline svg={flag} />
                <div className="tagName">adult</div>
              </div>
            </div>

            <div className="singleEvent">
              <div className="date">
                <div className="dateMount">Jan</div>
                <div className="dateNumber">18</div>
              </div>
              <div className="eventTitle">
                <div className="eventName">Event Name</div>
                <div className="eventTime">
                  <SVGInline svg={clock} />
                  10:00am
                </div>
                <div className="eventDay">
                  <SVGInline svg={calendar} /> Wednesday
                </div>
              </div>
              <div className="tag">
                <SVGInline svg={flag} />
                <div className="tagName">adult</div>
              </div>
            </div>

            <div className="singleEvent">
              <div className="date">
                <div className="dateMount">Jan</div>
                <div className="dateNumber">18</div>
              </div>
              <div className="eventTitle">
                <div className="eventName">Event Name</div>
                <div className="eventTime">
                  <SVGInline svg={clock} />
                  10:00am
                </div>
                <div className="eventDay">
                  <SVGInline svg={calendar} /> Wednesday
                </div>
              </div>
              <div className="tag">
                <SVGInline svg={flag} />
                <div className="tagName">adult</div>
              </div>
            </div>
            <div className="singleEvent">
              <div className="date">
                <div className="dateMount">Jan</div>
                <div className="dateNumber">18</div>
              </div>
              <div className="eventTitle">
                <div className="eventName">Event Name</div>
                <div className="eventTime">
                  <SVGInline svg={clock} />
                  10:00am
                </div>
                <div className="eventDay">
                  <SVGInline svg={calendar} /> Wednesday
                </div>
              </div>
              <div className="tag">
                <SVGInline svg={flag} />
                <div className="tagName">adult</div>
              </div>
            </div>

            <div className="btn">More Events</div>
          </div>
          <div className="imageSection">
            <img src={library} alt="lbirary-img" />
          </div>
        </div>
      </EventsStyle>
    );
  }
}

export default Events;
