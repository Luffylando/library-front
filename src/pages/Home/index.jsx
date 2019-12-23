import React, { Component } from "react";
import HomeStyle from "./style";
import Header from "../../components/Header";
import Main from "../../sections/Home/Main";
import Featured from "../../sections/Home/Featured";
import Events from "../../sections/Home/Events";
import Sponsors from "../../sections/Home/Sponsors";
import Footer from "../../components/Footer";

export default class Home extends Component {
  render() {
    return (
      <HomeStyle>
        <Header />
        <Main />
        <Featured />
        <Events />
        <Sponsors />
        <Footer />
      </HomeStyle>
    );
  }
}
