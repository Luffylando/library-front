import React, { Component } from "react";
import NavbarStyle from "./style";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ActiveMenuItem } from "../../../actions/ActiveMenuItem";
import { DeactiveMenuItem } from "../../../actions/DeactiveMenuItem";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  changeActiveMenu = name => {
    this.props.ActiveMenuItem(name);
  };
  render() {
    return (
      <NavbarStyle>
        <li>
          <Link
            to="/"
            className={
              this.props.setActiveMenu.activeMenu === "Home"
                ? "active-cool-link2"
                : "normal-cool-link2"
            }
            onClick={() => {
              this.changeActiveMenu("Home");
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={
              this.props.setActiveMenu.activeMenu === "Contact"
                ? "active-cool-link2"
                : "normal-cool-link2"
            }
            onClick={() => {
              this.changeActiveMenu("Contact");
            }}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={
              this.props.setActiveMenu.activeMenu === "About"
                ? "active-cool-link2"
                : "normal-cool-link2"
            }
            onClick={() => {
              this.changeActiveMenu("About");
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/catalog"
            className={
              this.props.setActiveMenu.activeMenu === "Catalog"
                ? "active-cool-link2"
                : "normal-cool-link2"
            }
            onClick={() => {
              this.changeActiveMenu("Catalog");
            }}
          >
            Catalog
          </Link>
        </li>
        {localStorage.getItem("userRole") === "admin" ||
        localStorage.getItem("userRole") === "moderator" ? (
          <li>
            <Link
              to="/contact/messages/1/5"
              className={
                this.props.setActiveMenu.activeMenu === "Messages"
                  ? "active-cool-link2"
                  : "normal-cool-link2"
              }
              onClick={() => {
                this.changeActiveMenu("Messages");
              }}
            >
              Messages
            </Link>
          </li>
        ) : null}
      </NavbarStyle>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  ActiveMenuItem: value => dispatch(ActiveMenuItem(value)),
  DeactiveMenuItem: value => dispatch(DeactiveMenuItem(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
