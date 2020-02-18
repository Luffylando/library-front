import React, { Component } from "react";
import EventsStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import H1 from "../../../ui/H1";
import defaultImage from "../../../assets/imgs/defaultBook.png";

export default class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  componentDidMount = async () => {
    let events = await axios.get("http://localhost:4000/events");
    this.setState({ events: events.data });
  };

  render() {
    return (
      <>
        <Header />
        <EventsStyle>
          {localStorage.loginToken ? (
            <div className="adminAddBtn">
              <Link to="/events/add">
                <Button
                  bgColor={"#F15925"}
                  width={"200px"}
                  padding={"20px"}
                  margin={"0px 30px"}
                  fWeight={"600"}
                  bRadius={"50px"}
                  txtColor={"#fff"}
                  hoverBg={"#fff"}
                  hoverTxt={"#F15925"}
                  transition={"all 0.3s"}
                  hoverBorder={"1px solid #F15925"}
                  btnText={"Add New Event"}
                ></Button>
              </Link>
            </div>
          ) : null}
          <H1>Events</H1>
          {this.state.events.map(value => (
            <div className="eventDiv" key={value.id}>
              <div className="eventImage">
                <img
                  src={
                    value.eventImage
                      ? `../events/${value.eventImage}`
                      : defaultImage
                  }
                  alt={value.eventImage + value.id}
                />
              </div>
              <div className="eventInfo">
                <div className="info">
                  <p>Event Name: {value.eventName}</p>
                  <p>Event Description: {value.eventDescription}</p>
                  <p>Event Date: {value.eventDate}</p>
                </div>
                <div className="detailsBtn">
                  <Link to={`/events/${value.id}`}>
                    <Button
                      bgColor={"#3F5D88"}
                      width={"200px"}
                      padding={"15px 10px"}
                      margin={"10px 30px"}
                      fWeight={"600"}
                      bRadius={"50px"}
                      txtColor={"#fff"}
                      hoverBg={"#fff"}
                      hoverTxt={"#3F5D88"}
                      transition={"all 0.3s"}
                      hoverBorder={"1px solid #3F5D88"}
                      btnText={"Details"}
                    ></Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </EventsStyle>
        <Footer />
      </>
    );
  }
}
