import React, { Component } from "react";
import AboutStyle from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

export default class About extends Component {
  render() {
    return (
      <>
        <Header />
        <AboutStyle>
          <div className="mainTitle">- Our Mision -</div>
          <div className="mainSubtitle">
            Lorem Ipsum Doloret. Lorem Ipsum Doloret. Lorem Ipsum Doloret
          </div>
          <div className="libImg"></div>
          <div className="btns">
            <Button
              bgColor={"#F15925"}
              width={"200px"}
              padding={"20px"}
              margin={"50px 30px"}
              fWeight={"600"}
              bRadius={"50px"}
              txtColor={"#fff"}
              hoverBg={"#fff"}
              hoverTxt={"#F15925"}
              transition={"all 0.3s"}
              hoverBorder={"1px solid #F15925"}
              btnText={"Register"}
            ></Button>
            <Button
              bgColor={"#F15925"}
              width={"200px"}
              padding={"20px"}
              margin={"50px 30px"}
              fWeight={"600"}
              bRadius={"50px"}
              txtColor={"#fff"}
              hoverBg={"#fff"}
              hoverTxt={"#F15925"}
              transition={"all 0.3s"}
              hoverBorder={"1px solid #F15925"}
              btnText={"Home"}
            ></Button>
          </div>
        </AboutStyle>
        <Footer />
      </>
    );
  }
}
