import { Component } from "react";
import axios from "axios";

class Verify extends Component {
  async componentDidMount() {
    let id = window.location.pathname.split("/")[3];
    let verificationToken = window.location.pathname.split("/")[4];

    let data = {
      id: id,
      verificationToken: null,
      verified: true
    };
    await axios.put(
      `http://localhost:4000/users/verify/${id}/${verificationToken}`,
      data
    );

    window.location.href = `/login`;
  }
  render() {
    return "";
  }
}

export default Verify;
