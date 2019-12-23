import React, { Component } from "react";
import ContactStyle from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <ContactStyle>Contact Style</ContactStyle>
        <Footer />
      </>
    );
  }
}
