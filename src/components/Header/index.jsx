import React, { Component } from "react";
import HeaderStyle from "./style";
import Navbar from "./Navbar";
import SVGInline from "react-svg-inline";
import {
  logo,
  login,
  register,
  contact,
  account,
  pencil
} from "../../assets/icons";
import { Link } from "react-router-dom";
import H2 from "../../ui/H2";
import P from "../../ui/P";

export default class Header extends Component {
  render() {
    return (
      <HeaderStyle>
        <div className="header">
          <div className="logoSearch">
            <Link to="/">
              <div className="logo">
                <SVGInline svg={logo} />
                <div className="logoText">
                  <H2>Luffy's</H2>
                  <H2>Library</H2>
                </div>
              </div>
            </Link>
            <div className="search">
              <div className="searchButton">
                <input
                  type="search"
                  className="searchInput"
                  placeholder="Search"
                ></input>
                <button className="goButton">Go</button>
              </div>
            </div>
          </div>
          <div className="auth">
            {localStorage.loginToken ? (
              <>
                <div className="item">
                  <SVGInline svg={account} />
                  <Link to="#">
                    <P>
                      {localStorage.userFirstName} {localStorage.userLastName}
                    </P>
                  </Link>
                </div>
                <div className="item">
                  <SVGInline svg={pencil} />
                  <Link to="#">
                    <P>Edit</P>
                  </Link>
                </div>
                <div className="item">
                  <SVGInline svg={login} />
                  <Link to="/logout">
                    <P>Logout</P>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="item">
                  <SVGInline svg={login} />
                  <Link to="login">
                    <P>Login</P>
                  </Link>
                </div>
                <div className="item">
                  <SVGInline svg={register} />
                  <Link to="register">
                    <P>Register</P>
                  </Link>
                </div>
                <div className="item">
                  <SVGInline svg={contact} />

                  <P>Contact</P>
                </div>
              </>
            )}
          </div>
        </div>
        <Navbar />
      </HeaderStyle>
    );
  }
}
