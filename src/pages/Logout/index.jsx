import { Component } from "react";
import history from "../../history";

export default class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("loginToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userFirstName");
    localStorage.removeItem("userLastName");

    history.push("/");
  }
  render() {
    return null;
  }
}
