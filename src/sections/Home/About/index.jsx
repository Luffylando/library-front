import React, { Component } from "react";
import AboutStyle from "./style";
import H1 from "../../../ui/H1";
import P from "../../../ui/P";

class About extends Component {
  render() {
    return (
      <AboutStyle>
        <div className="mainTitle">
          <H1>About</H1>
          <H1>Us</H1>
        </div>
        <div className="description">
          <P>
            <b>Lorem Ipsum</b> is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </P>
        </div>
      </AboutStyle>
    );
  }
}

export default About;
