import React, { Component } from "react";
import NavbarStyle from "./style";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <NavbarStyle>
        <li>
          <Link to="/" className="cool-link2">
            Home
          </Link>
        </li>
        <li>
          <Link to="/service" className="cool-link2">
            Service
          </Link>
        </li>
        <li>
          <Link to="/contact" className="cool-link2">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/about" className="cool-link2">
            About
          </Link>
        </li>
        <li>
          <Link to="/catalog" className="cool-link2">
            Catalog
          </Link>
        </li>
      </NavbarStyle>
    );
  }
}
