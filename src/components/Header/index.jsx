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
import axios from "axios";
import Button from "../Button";
import Select from "react-select";

const options = [
  { value: "title", label: "Title" },
  { value: "author", label: "Author" },
  { value: "genre", label: "Genre" }
];

const customStyles = {
  option: (styles, state) => ({
    ...styles,
    color: state.isSelected ? "#FFF" : styles.color,
    backgroundColor: state.isSelected ? "#F3969A" : styles.color,
    borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
    border: "none",

    "&:hover": {
      color: "#FFF",
      backgroundColor: "#F3969A",
      border: "none"
    },
    height: "fit-content"
  }),
  control: (styles, state) => ({
    ...styles,
    boxShadow: "none",
    borderColor: "none",
    border: "none",
    "&:hover": {
      borderColor: state.isFocused ? "#D0EAE2" : "#CED4DA"
    }
  })
};

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
      toggleSubmenu: false,
      selectedOption: null
    };
  }

  async componentDidMount() {
    let id = parseInt(localStorage.getItem("userId"));
    let currentUser = await axios.get(`http://localhost:4000/users/${id}`);
    this.setState({ imageName: currentUser.data.image });
  }

  handleClickOutside = evt => {
    // ..handling code goes here...

    this.setState({ toggleSubmenu: false });
  };

  setValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchClick = () => {
    let tag = this.state.tag.value === "" ? "tag" : this.state.tag.value;
    let keyword = this.state.keyword === "" ? "keyword" : this.state.keyword;
    window.location.href = `/books/search/${keyword}/${tag}`;
  };

  toggleSubmenu = () => {
    this.setState({ toggleSubmenu: !this.state.toggleSubmenu });
  };

  handleSelectChange = selectedOption => {
    console.log("sele", selectedOption);
    this.setState({ selectedOption, tag: selectedOption });
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
                  <Select
                    styles={customStyles}
                    value={this.state.selectedOption}
                    onChange={this.handleSelectChange}
                    options={options}
                    className="selectInput"
                    classNamePrefix="selectField"
                    placeholder="Sort By:"
                    defaultValue=""
                  />
                </div>
                <Button
                  onClick={this.searchClick}
                  btnBorder={"none"}
                  btnText={"Go"}
                  fWeight={"400"}
                  bRadius={"25px"}
                  padding={"10px 25px"}
                  margin={"10px 5"}
                  width={"fit-content"}
                  height={"45px"}
                  bgColor={"#f15922"}
                  txtColor={"#fff"}
                  transition={"none"}
                />
              </div>
            </div>
          </div>
          <div className="auth">
            {localStorage.loginToken ? (
              <>
                <div className="item">
                  {/* <img
                    className="accountImage"
                    src={`/team/${this.state.imageName}`}
                  /> */}

                  <Link to="#" onClick={this.toggleSubmenu}>
                    <SVGInline svg={account} />
                  </Link>
                  <P>
                    {localStorage.userFirstName} {localStorage.userLastName}
                  </P>
                  <div className="arrow">
                    <Link to="#" onClick={this.toggleSubmenu}>
                      <SVGInline svg={downArrow} />
                    </Link>
                  </div>
                </div>
                {this.state.toggleSubmenu ? (
                  <div className="submenuWindow">
                    <Link to="/changePassword">
                      <p>Change Password</p>
                    </Link>
                  </div>
                ) : null}
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
                  <Link to="/login">
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
