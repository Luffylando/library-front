import React, { Component } from "react";
import ServiceStyle from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default class Service extends Component {
  render() {
    return (
      <>
        <Header />
        <ServiceStyle>Service Style</ServiceStyle>
        <Footer />
      </>
    );
  }
}
