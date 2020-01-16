import React, { Component } from "react";
import LoginStyle from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { eye, cEye } from "../../assets/icons";
import SVGInline from "react-svg-inline";
import axios from "axios";
import { Form, Input } from "@rocketseat/unform";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMsg: "",
      hidden: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(data) {
    try {
      let login = await axios.post(`http://localhost:4000/users/login`, {
        email: data.email,
        password: data.password
      });

      localStorage.setItem("loginToken", login.data.token);
      localStorage.setItem("userId", login.data.userId);
      localStorage.setItem("userRole", login.data.userRole);
      localStorage.setItem("userFirstName", login.data.userFirstName);
      localStorage.setItem("userLastName", login.data.userLastName);

      window.location.href = "/";
    } catch (err) {
      this.setState({ password: "" });
      if (err.message !== "") {
        this.setState({ errorMsg: "Login Error. Please try again." });
      }
    }
  }

  triggerEye = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  render() {
    return (
      <>
        <Header />
        <LoginStyle>
          <div className="loginBox">
            <h1>
              Login<span className="borderBottom"></span>
            </h1>
            <Form onSubmit={this.handleSubmit}>
              <div className="inputBox">
                <Input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email:"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                <div className="divInput">
                  <Input
                    id="password"
                    name="password"
                    type={this.state.hidden ? "password" : "text"}
                    placeholder="Password:"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                  {this.state.password.length !== 0 ? (
                    <SVGInline
                      onClick={this.triggerEye}
                      svg={this.state.hidden ? cEye : eye}
                      title={"Hold to see password"}
                    />
                  ) : null}
                </div>
                {/* <div class="center">
                <a href="javascript:0;">Cool</a>
              </div> */}
              </div>
              <div className="btnArea">
                {this.state.errorMsg ? (
                  <p className="errorMsg">{this.state.errorMsg}</p>
                ) : null}
                <input type="submit" value="Login" />
              </div>
            </Form>
          </div>
        </LoginStyle>
        <Footer />
      </>
    );
  }
}
