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
  pencil,
  downArrow
} from "../../assets/icons";
import { Link } from "react-router-dom";
import H2 from "../../ui/H2";
import P from "../../ui/P";
import onClickOutside from "react-onclickoutside";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      author: "",
      title: "",
      genre: "",
      quote: "",
      keyword: "",
      tag: "",
      toggleSubmenu: false
    };
  }

  handleClickOutside = evt => {
    // ..handling code goes here...

    this.setState({ toggleSubmenu: false });
  };

  setValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchClick = () => {
    let tag = this.state.tag === "" ? "tag" : this.state.tag;
    let keyword = this.state.keyword === "" ? "keyword" : this.state.keyword;
    window.location.href = `/books/search/${keyword}/${tag}`;
  };

  toggleSubmenu = () => {
    this.setState({ toggleSubmenu: !this.state.toggleSubmenu });
  };
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
                  name="keyword"
                  onChange={this.setValue}
                  value={this.state.keyword}
                  className="searchInput"
                  placeholder="Search"
                ></input>
                <div className="sortBy">
                  <select
                    name="tag"
                    onChange={this.setValue}
                    defaultValue="Sort By:"
                  >
                    <option value="">Search By:</option>
                    <option value="title">title</option>
                    <option value="author">author</option>
                    <option value="genre">genre</option>
                    <option value="quotes">quote</option>
                  </select>
                </div>

                <button onClick={this.searchClick} className="goButton">
                  Go
                </button>
              </div>
            </div>
          </div>
          <div className="auth">
            {localStorage.loginToken ? (
              <>
                <div className="item">
                  <SVGInline svg={account} />
                  <Link to="#" onClick={this.toggleSubmenu}>
                    <P>
                      {localStorage.userFirstName} {localStorage.userLastName}{" "}
                      <SVGInline svg={downArrow} />
                      {this.state.toggleSubmenu ? (
                        <div className="submenuWindow">
                          <Link to="#">
                            <p>Change/Set Image</p>
                          </Link>
                          <Link to="/changePassword">
                            <p>Change Password</p>
                          </Link>
                        </div>
                      ) : null}
                    </P>
                  </Link>
                </div>
                <div className="item">
                  <SVGInline svg={pencil} />
                  <Link to={`/users/edit/${localStorage.userId}`}>
                    <P>Edit Profile</P>
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

export default onClickOutside(Header);
