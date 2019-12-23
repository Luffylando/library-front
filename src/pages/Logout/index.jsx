import { Component } from "react";
import history from "../../history";

export default class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("loginToken");
    localStorage.removeItem("loggedUser");

    history.push("/");
  }
  render() {
    return null;
  }
}
