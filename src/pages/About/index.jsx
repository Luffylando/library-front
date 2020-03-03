import React, { Component } from "react";
import AboutStyle from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

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
            {!localStorage.getItem("userId") ? (
              <Link to="/register">
                <Button
                  bgColor={"#F15925"}
                  width={"200px"}
                  padding={"20px"}
                  margin={"30px 30px"}
                  fWeight={"600"}
                  bRadius={"50px"}
                  txtColor={"#fff"}
                  hoverBg={"#fff"}
                  hoverTxt={"#F15925"}
                  transition={"all 0.3s"}
                  hoverBorder={"1px solid #F15925"}
                  btnText={"Register"}
                ></Button>
              </Link>
            ) : null}
            <Link to="/">
              <Button
                bgColor={"#F15925"}
                width={"200px"}
                padding={"20px"}
                margin={"30px 30px"}
                fWeight={"600"}
                bRadius={"50px"}
                txtColor={"#fff"}
                hoverBg={"#fff"}
                hoverTxt={"#F15925"}
                transition={"all 0.3s"}
                hoverBorder={"1px solid #F15925"}
                btnText={"Home"}
              ></Button>
            </Link>
          </div>
        </AboutStyle>
        <Footer />
      </>
    );
  }
}
