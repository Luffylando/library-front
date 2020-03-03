import React, { Component } from "react";
import EventsStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import H1 from "../../../ui/H1";
import defaultImage from "../../../assets/imgs/defaultBook.png";
import moment from "moment";

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
          <H1>Events</H1>
          {localStorage.getItem("userRole") === "admin" ? (
            <div className="adminAddBtn">
              <Link to="events/add">
                <Button
                  bgColor={"#3F5D88"}
                  width={"150px"}
                  padding={"10px"}
                  margin={"0px 10px 30px 10px"}
                  bRadius={"5px"}
                  txtColor={"#fff"}
                  hoverBg={"#fff"}
                  hoverTxt={"#3F5D88"}
                  transition={"all 0.3s"}
                  hoverBorder={"1px solid #3F5D88"}
                  btnText={"Add New Event"}
                ></Button>
              </Link>
            </div>
          ) : null}

          <div className="eventsCatalog">
            {this.state.events.length !== 0 ? (
              this.state.events.map((val, key) => (
                <div className="event" key={key}>
                  <Link to={`/events/${val.id}`}>
                    <img
                      className="eventImg"
                      src={
                        val.eventImage
                          ? `../events/${val.eventImage}`
                          : defaultImage
                      }
                      alt={val.eventName + val.id}
                    />
                  </Link>
                  <div className="eventDesc">
                    <p className="eventName">{val.eventName}</p>
                    <p className="eventDate">
                      {moment(val.eventDate).format("dddd, MMMM Do")}
                    </p>
                    <p className="eventDate">
                      {moment(val.eventDate).format("h:mm a")}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="noEvents">
                There are no Books in Catalog, please check again later.
                <Link to="/"> Go back to home page. </Link>
              </div>
            )}
          </div>
        </EventsStyle>
        <Footer />
      </>
    );
  }
}
