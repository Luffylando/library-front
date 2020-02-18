import React, { Component } from "react";
import CatalogStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";

import axios from "axios";
import H1 from "../../../ui/H1";
import { Link } from "react-router-dom";
import defaultBook from "../../../assets/imgs/books/defaultBook.png";

export default class ArchivedBooks extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  componentDidMount = async () => {
    let books = await axios.get("http://localhost:4000/books/archived");
    this.setState({ books: books.data });
  };
  render() {
    return (
      <>
        <Header />
        <CatalogStyle>
          {localStorage.loginToken ? (
            <div className="adminAddBtn">
              <Link to="books/add">
                <Button
                  bgColor={"#F15925"}
                  width={"200px"}
                  padding={"20px"}
                  margin={"0px 30px"}
                  fWeight={"600"}
                  bRadius={"50px"}
                  txtColor={"#fff"}
                  hoverBg={"#fff"}
                  hoverTxt={"#F15925"}
                  transition={"all 0.3s"}
                  hoverBorder={"1px solid #F15925"}
                  btnText={"Add New Book"}
                ></Button>
              </Link>
              <Link to="/catalog">
                <Button
                  bgColor={"#F15925"}
                  width={"200px"}
                  padding={"20px"}
                  margin={"0px 30px"}
                  fWeight={"600"}
                  bRadius={"50px"}
                  txtColor={"#fff"}
                  hoverBg={"#fff"}
                  hoverTxt={"#F15925"}
                  transition={"all 0.3s"}
                  hoverBorder={"1px solid #F15925"}
                  btnText={"Actual Catalog"}
                ></Button>
              </Link>
            </div>
          ) : null}
          <H1>Archived Books</H1>
          {this.state.books.length !== 0
            ? this.state.books.map((val, key) => (
                <div className="book" key={key}>
                  <img
                    className="bookImg"
                    src={val.image ? `../books/${val.image}` : defaultBook}
                    alt={val.title + val.id}
                  />
                  <div className="bookDesc">
                    <div className="desc">
                      <p>Author: {val.author}</p>
                      <p>Title: {val.title}</p>
                      <p>Genre: {val.genre}</p>
                      <p className="quote">Quote: Quote ...</p>
                    </div>
                    <div className="btn">
                      <Link to={`/books/${val.id}`}>
                        <Button
                          bgColor={"#3F5D88"}
                          width={"200px"}
                          padding={"15px 10px"}
                          margin={"10px 30px"}
                          fWeight={"600"}
                          bRadius={"50px"}
                          txtColor={"#fff"}
                          hoverBg={"#fff"}
                          hoverTxt={"#3F5D88"}
                          transition={"all 0.3s"}
                          hoverBorder={"1px solid #3F5D88"}
                          btnText={"Details"}
                        ></Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            : "No Books in catalog..."}
        </CatalogStyle>
        <Footer />
      </>
    );
  }
}
