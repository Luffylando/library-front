import React, { Component } from "react";
import MainStyle from "./style";
import njegos from "../../../assets/imgs/njegos.jpg";
import SVGInline from "react-svg-inline";
import { fb } from "../../../assets/icons";
import Button from "../../../components/Button";
import Spinner from "../../../components/Spinner";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ActiveMenuItem } from "../../../actions/ActiveMenuItem";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      rendered: false,
      loading: true
    };
  }

  componentDidMount = async () => {
    setTimeout(async () => {
      let events = await axios.get(`http://localhost:4000/events/highlighted`);
      let rearangedArray = events.data.sort(function(a, b) {
        return b.id - a.id;
      });

      this.setState({
        events: rearangedArray[0] ? rearangedArray[0] : [],
        rendered: true
      });
    }, 1000);
  };

  changeActiveMenu = name => {
    this.props.ActiveMenuItem(name);
  };

  render() {
    return this.state.rendered ? (
      <MainStyle>
        <div className="backgroundImg">
          <img
            src={
              this.state.events.eventImage
                ? `../events/${this.state.events.eventImage}`
                : njegos
            }
            alt="bg"
          />
        </div>
        <div className="eventBox">
          <div className="descriptionSection">
            <div className="descTitle">
              {this.state.events.eventName
                ? this.state.events.eventName
                : "Kant's groundwork of methaphysics"}
            </div>
            <div className="descText">
              {this.state.events.eventDescription
                ? this.state.events.eventDescription
                : "Kant's groundwork of methaphysics. Some thoughts about his categorical imperativ vs hipotetical one. And conclusion about which one i more important."}
            </div>
            <div className="descText">
              {this.state.events.eventDate
                ? moment(this.state.events.eventDate).format(
                    "dddd, MMMM Do, h:mm a"
                  )
                : moment("12.01.1994 12:00 ").format("dddd, MMMM Do, h:mm a")}
              {/* <div className="shareEvent">
                <SVGInline svg={fb} />
                Share Event >>
              </div> */}
            </div>

            <Link
              to={
                this.state.events.id
                  ? `/events/${this.state.events.id}`
                  : "/events"
              }
              onClick={() => {
                this.changeActiveMenu("Events");
              }}
            >
              <Button
                btnText={"Learn More"}
                bgColor={"#F15925"}
                txtColor={"#fff"}
                width={"200px"}
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
          <div className="imageContainer">
            <img
              src={
                this.state.events.eventImage
                  ? `../events/${this.state.events.eventImage}`
                  : njegos
              }
              alt="event-img"
            />
          </div>
        </div>
      </MainStyle>
    ) : (
      <Spinner />
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  ActiveMenuItem: value => dispatch(ActiveMenuItem(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
