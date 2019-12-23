import React, { Component } from "react";
import CatalogStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import axios from "axios";
import H1 from "../../../ui/H1";
import { Link } from "react-router-dom";

export default class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  componentDidMount = async () => {
    let books = await axios.get("http://localhost:4000/books");
    this.setState({ books: books.data });
  };
  render() {
    console.log("books", this.state.books);
    return (
      <>
        <Header />
        <CatalogStyle>
          <div className="adminAddBtn">
            <Link to="books/add">Add New Book</Link>
          </div>
          <H1>Books Catalog</H1>
          {this.state.books.length !== 0
            ? this.state.books.map((val, key) => (
                <div className="book" key={key}>
                  <img
                    className="bookImg"
                    src={`../books/${val.image}.jpg`}
                    alt={val.title + val.id}
                  />
                  <div className="bookDesc">
                    <p>Author: {val.author}</p>
                    <p>Title: {val.title}</p>
                    <p>Genre: {val.genre}</p>
                    <p className="quote">Quote: Quote ...</p>
                    <div className="btn">
                      <Link to={`books/${val.id}`}>
                        <button>Details</button>
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
