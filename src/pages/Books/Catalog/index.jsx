import React, { Component } from "react";
import CatalogStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";

import axios from "axios";
import H1 from "../../../ui/H1";
import { Link } from "react-router-dom";
import defaultBook from "../../../assets/imgs/books/defaultBook.png";

export default class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  componentDidMount = async () => {
    let books = await axios.get("http://localhost:4000/books/unarchived");
    this.setState({ books: books.data });
  };
  render() {
    return (
      <>
        <Header />
        <CatalogStyle>
          <H1>Books Catalog</H1>
          {localStorage.getItem("userRole") === "admin" ? (
            <div className="adminAddBtn">
              <Link to="books/add">
                <Button
                  bgColor={"#3F5D88"}
                  width={"150px"}
                  padding={"10px"}
                  margin={"0px 10px 30px 10px"}
                  bRadius={"5px"}
                  txtColor={"#fff"}
                  hoverBg={"#fff"}
                  hoverTxt={"#3F5D88"}
                  transition={"all 0.3s"}
                  hoverBorder={"1px solid #3F5D88"}
                  btnText={"Add New Book"}
                ></Button>
              </Link>
              <Link to="/catalog/archived">
                <Button
                  bgColor={"#3F5D88"}
                  width={"150px"}
                  padding={"10px"}
                  margin={"0px 10px 30px 10px"}
                  bRadius={"5px"}
                  txtColor={"#fff"}
                  hoverBg={"#fff"}
                  hoverTxt={"#3F5D88"}
                  transition={"all 0.3s"}
                  hoverBorder={"1px solid #3F5D88"}
                  btnText={"Archived Books"}
                ></Button>
              </Link>
            </div>
          ) : null}

          <div className="booksCatalog">
            {this.state.books.length !== 0 ? (
              this.state.books.map((val, key) => (
                <div className="book" key={key}>
                  <Link to={`/books/${val.id}`}>
                    <img
                      className="bookImg"
                      src={val.image ? `../books/${val.image}` : defaultBook}
                      alt={val.title + val.id}
                    />
                  </Link>
                  <div className="bookDesc">
                    <p className="title">{val.title}</p>
                    <p className="author"> by {val.author}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="noBooks">
                There are no Books in Catalog, please check again later.
                <Link to="/"> Go back to home page. </Link>
              </div>
            )}
          </div>
        </CatalogStyle>
        <Footer />
      </>
    );
  }
}
