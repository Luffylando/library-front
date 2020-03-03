import React, { Component } from "react";
import SingleEventStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import { store } from "react-notifications-component";
import axios from "axios";
import defaultImage from "../../../assets/imgs/defaultBook.png";
import ToggleMenu from "../../../components/ToggleMenu";
import moment from "moment";
import SVGInline from "react-svg-inline";
import { threeDots } from "../../../assets/icons";

export default class Events extends Component {
  constructor() {
    super();
    this.state = {
      event: {},
      toggleOptionMenu: false,
      interested: false,
      interestedCount: null
    };
  }

  componentDidMount = async () => {
    let event_id = this.props.match.params.id;
    let user_id = localStorage.getItem("userId");

    let event = await axios.get(`http://localhost:4000/events/${event_id}`);

    let check = await axios.get(
      `http://localhost:4000/eventInterested/check/${event_id}/${user_id}`
    );
    let getCount = await axios.get(
      `http://localhost:4000/eventInterested/${event_id}/interested`
    );
    if (check.data.length !== 0) {
      this.setState({
        interestedCount: getCount.data[0],
        interested: check.data[0].interested === "interested" ? true : false
      });
    } else {
      this.setState({ interestedCount: getCount.data[0] });
    }
    this.setState({ event: event.data });
  };

  deleteEvent = async () => {
    let event_id = this.props.match.params.id;
    await axios.delete(`http://localhost:4000/events/delete/${event_id}`);
    window.location.href = "/events";
  };

  toggleOptionMenu = () => {
    this.setState({ toggleOptionMenu: !this.state.toggleOptionMenu });
  };

  hideOptionMenu = () => {
    this.setState({ toggleOptionMenu: false });
  };

  updateInterested = async () => {
    let event_id = this.props.match.params.id;
    let user_id = localStorage.getItem("userId");
    let check = await axios.get(
      `http://localhost:4000/eventInterested/check/${event_id}/${user_id}`
    );

    if (check.data.length === 0) {
      // Add to Interested
      await axios.post(`http://localhost:4000/eventInterested/insert`, {
        user_id,
        event_id,
        interested: "interested"
      });
    } else {
      // update to what is not

      if (check.data[0].interested === "interested") {
        let eId = check.data[0].id;
        await axios.put(`http://localhost:4000/eventInterested/update/${eId}`, {
          interested: "neutral"
        });
      } else if (check.data[0].interested === "neutral") {
        let eId = check.data[0].id;

        await axios.put(`http://localhost:4000/eventInterested/update/${eId}`, {
          interested: "interested"
        });
      }
    }
    this.componentDidMount();
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

            {localStorage.getItem("userRole") === "admin" ? (
              <>
                <SVGInline
                  svg={threeDots}
                  onClick={() => {
                    this.toggleOptionMenu();
                  }}
                  className={"toggleSvg"}
                />
                {this.state.toggleOptionMenu ? (
                  <ToggleMenu
                    id="move"
                    top={"100px"}
                    background={"#3F5D88"}
                    color={"#fff"}
                    right={"-50px"}
                    padding={"10px 20px"}
                    borderRadius={"5px"}
                    border={"1px solid #000"}
                    handleClickOutside={() => {
                      this.hideOptionMenu();
                    }}
                    ref={this.myRef}
                  >
                    <Link
                      className="editBtn"
                      to={`/events/edit/${this.state.event.id}`}
                    >
                      <p>Edit</p>
                    </Link>
                    <div
                      className="deleteBtn"
                      onClick={() => {
                        this.deleteEvent();
                      }}
                    >
                      <p>Delete</p>
                    </div>
                  </ToggleMenu>
                ) : null}
              </>
            ) : null}
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
                <p className="eventName">
                  Event Name: <b>{this.state.event.eventName}</b>
                </p>
                <p className="eventDescription">
                  Event Description: <b>{this.state.event.eventDescription}</b>
                </p>
                <p className="eventCreator">
                  Event Creator: <b>{this.state.event.eventCreator}</b>
                </p>

                <p className="eventDate">
                  Event Date:{" "}
                  <b>
                    {" "}
                    {moment(this.state.event.eventDate).format(
                      "dddd, MMMM Do, h:mm a"
                    )}
                  </b>
                </p>
              </div>
              <div className="interestedCount">
                Number of Interested People: {this.state.interestedCount}
              </div>
              <div className="detailsBtn">
                <Link to={`#`}>
                  <Button
                    bgColor={"#F15925"}
                    width={"150px"}
                    padding={"15px 15px"}
                    margin={"10px 5px"}
                    fWeight={"600"}
                    bRadius={"50px"}
                    txtColor={"#fff"}
                    hoverBg={"#fff"}
                    hoverTxt={"#F15925"}
                    transition={"all 0.3s"}
                    hoverBorder={"1px solid #F15925"}
                    btnText={this.state.interested ? "Cancel" : "Interested"}
                    onClick={
                      localStorage.getItem("userId")
                        ? () => {
                            this.updateInterested();
                          }
                        : () => {
                            store.addNotification({
                              type: "danger",
                              insert: "top",
                              container: "top-right",
                              animationIn: ["animated", "bounceIn"],
                              animationOut: ["animated", "bounceOut"],
                              dismiss: {
                                duration: 5000,
                                onScreen: false
                              },
                              content: (
                                <div className="notification-custom-success">
                                  <div className="notification-custom-content">
                                    <div className="notification-message">
                                      <div className="message-header">
                                        You must be logged in to use this
                                        function.
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )
                            });
                          }
                    }
                  ></Button>
                </Link>

                {this.state.interested ? (
                  <div>(You are interested for this Event)</div>
                ) : null}
              </div>
            </div>
          </div>
        </SingleEventStyle>
        <Footer />
      </>
    );
  }
}
