import React, { Component } from "react";
import EventsStyle from "./style";
import library from "../../../assets/imgs/library.jpg";
import Button from "../../../components/Button";
import MainPageFeaturedEvent from "../../../components/MainPageFeaturedEvent";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ActiveMenuItem } from "../../../actions/ActiveMenuItem";

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  changeActiveMenu = name => {
    this.props.ActiveMenuItem(name);
  };

  componentDidMount = async () => {
    let events = await axios.get(`http://localhost:4000/events/highlighted`);
    this.setState({ events: events.data });
  };

  renderDefaultEvents(eventsCount) {
    if (eventsCount === 1) {
      return (
        <>
          <MainPageFeaturedEvent
            dateMonth={"Jan"}
            dateDay={"18"}
            eventName={"Placeholder 1"}
            eventTime={"10:00am"}
            eventDay={"Wednesday"}
            linkTo={"#"}
            onClick={() => {
              this.changeActiveMenu("Events");
            }}
          />
          <MainPageFeaturedEvent
            dateMonth={"May"}
            dateDay={"25"}
            eventName={"Placeholder 2"}
            eventTime={"12:00am"}
            eventDay={"Thursday"}
            linkTo={"#"}
            onClick={() => {
              this.changeActiveMenu("Events");
            }}
          />
          <MainPageFeaturedEvent
            dateMonth={"Feb"}
            dateDay={"22"}
            eventName={"Placeholder 3"}
            eventTime={"14:00am"}
            eventDay={"Sunday"}
            linkTo={"#"}
            onClick={() => {
              this.changeActiveMenu("Events");
            }}
          />
        </>
      );
    } else if (eventsCount === 2) {
      return (
        <>
          <MainPageFeaturedEvent
            dateMonth={"Jan"}
            dateDay={"18"}
            eventName={"Placeholder 1"}
            eventTime={"10:00am"}
            eventDay={"Wednesday"}
            linkTo={"#"}
            onClick={() => {
              this.changeActiveMenu("Events");
            }}
          />
          <MainPageFeaturedEvent
            dateMonth={"May"}
            dateDay={"25"}
            eventName={"Placeholder 2"}
            eventTime={"12:00am"}
            eventDay={"Thursday"}
            linkTo={"#"}
            onClick={() => {
              this.changeActiveMenu("Events");
            }}
          />
        </>
      );
    } else if (eventsCount === 3) {
      return (
        <MainPageFeaturedEvent
          dateMonth={"May"}
          dateDay={"25"}
          eventName={"Placeholder 2"}
          eventTime={"12:00am"}
          eventDay={"Thursday"}
          linkTo={"#"}
          onClick={() => {
            this.changeActiveMenu("Events");
          }}
        />
      );
    }
  }

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
            {this.state.events.length > 0 ? (
              this.state.events.map(value => (
                <MainPageFeaturedEvent
                  key={value.id}
                  dateMonth={moment(value.eventDate).format("MMM")}
                  dateDay={moment(value.eventDate).format("DD")}
                  eventName={value.eventName}
                  eventTime={moment(value.eventDate).format(" h:mm a")}
                  eventDay={moment(value.eventDate).format("dddd")}
                  linkTo={`/events/${value.id}`}
                  onClick={() => {
                    this.changeActiveMenu("Events");
                  }}
                />
              ))
            ) : (
              <>
                <MainPageFeaturedEvent
                  dateMonth={"DEC"}
                  dateDay={"11"}
                  eventName={"Placeholder 1"}
                  eventTime={"17:00am"}
                  eventDay={"Monday"}
                  linkTo={"#"}
                  onClick={() => {
                    this.changeActiveMenu("Events");
                  }}
                />
                <MainPageFeaturedEvent
                  dateMonth={"Jan"}
                  dateDay={"18"}
                  eventName={"Placeholder 2"}
                  eventTime={"10:00am"}
                  eventDay={"Wednesday"}
                  linkTo={"#"}
                  onClick={() => {
                    this.changeActiveMenu("Events");
                  }}
                />
                <MainPageFeaturedEvent
                  dateMonth={"May"}
                  dateDay={"25"}
                  eventName={"Placeholder 3"}
                  eventTime={"12:00am"}
                  eventDay={"Thursday"}
                  linkTo={"#"}
                  onClick={() => {
                    this.changeActiveMenu("Events");
                  }}
                />
                <MainPageFeaturedEvent
                  dateMonth={"Feb"}
                  dateDay={"22"}
                  eventName={"Placeholder 4"}
                  eventTime={"14:00am"}
                  eventDay={"Sunday"}
                  linkTo={"#"}
                  onClick={() => {
                    this.changeActiveMenu("Events");
                  }}
                />
              </>
            )}

            {this.renderDefaultEvents(this.state.events.length)}
            <Link
              to="/events"
              onClick={() => {
                this.changeActiveMenu("Events");
              }}
            >
              <Button
                btnText={"More Events"}
                bgColor={"#F15925"}
                txtColor={"#fff"}
                fWeight={"600"}
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
            </Link>
          </div>
          <div className="imageSection">
            <img src={library} alt="lbirary-img" />
          </div>
        </div>
      </EventsStyle>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  ActiveMenuItem: value => dispatch(ActiveMenuItem(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
