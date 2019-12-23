import React, { Component } from "react";
import AboutStyle from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default class About extends Component {
  render() {
    return (
      <>
        <Header />
        <AboutStyle>About Style</AboutStyle>
        <Footer />
      </>
    );
  }
}
