import React, { Component } from "react";
import SingleEventStyle from "./style";
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
      event: {}
    };
  }

  componentDidMount = async () => {
    let event_id = this.props.match.params.id;

    let event = await axios.get(`http://localhost:4000/events/${event_id}`);
    this.setState({ event: event.data });
  };

  deleteEvent = async () => {
    let event_id = this.props.match.params.id;
    await axios.delete(`http://localhost:4000/events/delete/${event_id}`);
    window.location.href = "/events";
  };

  render() {
    return (
      <>
        <Header />
        <SingleEventStyle>
          <div className="topBtns">
            <div className="goBack">
              <Link className="backBtn" to="/events">
                <Button
                  bgColor={"#3F5D88"}
                  width={"200px"}
                  padding={"10px 0px"}
                  margin={"10px 0px"}
                  fWeight={"600"}
                  bRadius={"50px"}
                  txtColor={"#fff"}
                  hoverBg={"#fff"}
                  hoverTxt={"#3F5D88"}
                  transition={"all 0.3s"}
                  hoverBorder={"1px solid #3F5D88"}
                  btnText={"Go Back"}
                ></Button>
              </Link>
            </div>
            <div className="bookBtns">
              <Link
                className="editBtn"
                to={`/events/edit/${this.props.match.params.id}`}
              >
                <Button
                  bgColor={"#3F5D88"}
                  width={"200px"}
                  padding={"10px 0px"}
                  margin={"10px 5px"}
                  fWeight={"600"}
                  bRadius={"50px"}
                  txtColor={"#fff"}
                  hoverBg={"#fff"}
                  hoverTxt={"#3F5D88"}
                  transition={"all 0.3s"}
                  hoverBorder={"1px solid #3F5D88"}
                  btnText={"Edit Event"}
                ></Button>
              </Link>
              <div
                className="deleteBtn"
                onClick={() => {
                  this.deleteEvent();
                }}
              >
                <Button
                  bgColor={"#3F5D88"}
                  width={"200px"}
                  padding={"10px 5px"}
                  margin={"10px 0px"}
                  fWeight={"600"}
                  bRadius={"50px"}
                  txtColor={"#fff"}
                  hoverBg={"#fff"}
                  hoverTxt={"#3F5D88"}
                  transition={"all 0.3s"}
                  hoverBorder={"1px solid #3F5D88"}
                  btnText={"Delete Event"}
                ></Button>
              </div>
            </div>
          </div>
          <div className="eventDiv">
            <div className="eventImage">
              <img
                src={
                  this.state.event.eventImage
                    ? `../events/${this.state.event.eventImage}`
                    : defaultImage
                }
                alt={
                  this.state.event.eventImage
                    ? `${this.state.event.eventImage} + ${this.state.event.id}`
                    : "No image"
                }
              />
            </div>
            <div className="eventInfo">
              <div className="info">
                <p>Event Name: {this.state.event.eventName}</p>
                <p>Event Description: {this.state.event.eventDescription}</p>
                <p>Event Date: {this.state.event.eventDate}</p>
              </div>
              <div className="detailsBtn">
                <Link to={`#`}>
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
                    btnText={"Interested"}
                  ></Button>
                </Link>
              </div>
            </div>
          </div>
        </SingleEventStyle>
        <Footer />
      </>
    );
  }
}
