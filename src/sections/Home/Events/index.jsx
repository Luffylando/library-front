import React, { Component } from "react";
import EventsStyle from "./style";
import SVGInline from "react-svg-inline";
import { clock, calendar, flag } from "../../../assets/icons";
import library from "../../../assets/imgs/library.jpg";
import Button from "../../../components/Button";
import axios from "axios";
import moment from "moment";

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  componentDidMount = async () => {
    let events = await axios.get(`http://localhost:4000/events/highlighted`);
    this.setState({ events: events.data });
  };
  render() {
    console.log("eventrs", this.state.events);
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
            {this.state.events.length > 0 ? (
              this.state.events.map(value => (
                <div key={value.id} className="singleEvent">
                  <div className="date">
                    <div className="dateMount">
                      {moment(value.eventsDate).format("MMM")}
                    </div>
                    <div className="dateNumber">
                      {moment(value.eventsDate).format("DD")}
                    </div>
                  </div>
                  <div className="eventTitle">
                    <div className="eventName">{value.eventName}</div>
                    <div className="eventTime">
                      <SVGInline svg={clock} />

                      {moment(value.eventsDate).format(" h:mm a")}
                    </div>
                    <div className="eventDay">
                      <SVGInline svg={calendar} />{" "}
                      {moment(value.eventsDate).format("dddd")}
                    </div>
                  </div>
                  <div className="tag">
                    <SVGInline svg={flag} />
                    <div className="tagName">adult</div>
                  </div>
                </div>
              ))
            ) : (
              <>
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
              </>
            )}

            <Button
              btnText={"Learn More"}
              bgColor={"#F15925"}
              txtColor={"#fff"}
              fWeight={"500"}
              width={"300px"}
              margin={"50px 10px 30px 10px"}
              letterSpacing={"1px"}
              padding={"20px 20px"}
              bRadius={"50px"}
              hoverBg={"#fff"}
              hoverBorder={"1px solid #F15925"}
              hoverTxt={"#F15925"}
              transition={"all 0.3s"}
            />
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
