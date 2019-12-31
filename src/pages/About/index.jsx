import React, { Component } from "react";
import AboutStyle from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default class About extends Component {
  render() {
    return (
      <>
        <Header />
        <AboutStyle>


          <div className="mainTitle">
            - Our Mision -
          </div>
          <div className="mainSubtitle">
            Lorem Ipsum Doloret. Lorem Ipsum Doloret. Lorem Ipsum Doloret
          </div>
          <div className="aboutTitle">About Us</div>
          <p>Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. 
          Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. 
          Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. 
          Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. 
          Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. 
          Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. 
          Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. 
          Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. 
          Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. 
          Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. 
          Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. Long ass Text. 
          </p>

          <div className="btns">
            <button className="register">Register</button>
            <button className="learn">Learn More</button>

          </div>

        </AboutStyle>
        <Footer />
      </>
    );
  }
}
