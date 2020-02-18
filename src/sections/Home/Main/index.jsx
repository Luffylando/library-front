import React, { Component } from "react";
import MainStyle from "./style";
import njegos from "../../../assets/imgs/njegos.jpg";
import P from "../../../ui/P";
import SVGInline from "react-svg-inline";
import { fb } from "../../../assets/icons";
import Button from "../../../components/Button";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  componentDidMount = async () => {
    let events = await axios.get(`http://localhost:4000/events/highlighted`);

    this.setState({ events: events.data[0] });
  };
  render() {
    return (
      <MainStyle>
        <div className="backgroundImg">
          <img src={njegos} alt="bg" />
        </div>
        <div className="eventBox">
          <div className="descriptionSection">
            <div className="descTitle">
              {this.state.events
                ? this.state.events.eventName
                : "Kant's groundwork of methaphysics"}
            </div>
            <div className="descText">
              {this.state.events
                ? this.state.eventDescription
                : "Place for Description..."}
            </div>
            <div className="descText">
              {this.state.events
                ? moment(this.state.events.eventDate).format(
                    "dddd, MMMM Do, h:mm a"
                  )
                : moment("12.01.1994 12:00 ").format("dddd, MMMM Do, h:mm a")}
            </div>

            <div className="shareEvent">
              <SVGInline svg={fb} />
              Share Event >>
            </div>
            <Link
              to={
                this.state.events
                  ? `/events/${this.state.events.id}`
                  : "/events"
              }
            >
              <Button
                btnText={"Learn More"}
                bgColor={"#F15925"}
                txtColor={"#fff"}
                width={"200px"}
                padding={"5px 25px"}
                fWeight={"500"}
                letterSpacing={"1px"}
                padding={"15px 20px"}
                bRadius={"50px"}
                hoverBg={"#fff"}
                hoverBorder={"1px solid #F15925"}
                hoverTxt={"#F15925"}
                transition={"all 0.3s"}
              />
            </Link>
          </div>
          <img src={njegos} alt="event-img" />
        </div>
      </MainStyle>
    );
  }
}

export default Main;
