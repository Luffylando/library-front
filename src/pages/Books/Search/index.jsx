import React, { Component } from "react";
import SearchStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import axios from "axios";
import H1 from "../../../ui/H1";
import { Link } from "react-router-dom";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  componentDidMount = async () => {
    let keyword = window.location.pathname.split("/")[3];
    let tag = window.location.pathname.split("/")[4];
    this.setState({keyword, tag});

    let books = await axios.get(`http://localhost:4000/books/search/${keyword}/${tag}`);
    this.setState({ books: books.data.search });
    
  };
  render() {
    let tag = window.location.pathname.split("/")[4];
    let keyword = window.location.pathname.split("/")[3];

    return (
      <>
        <Header />
        <SearchStyle>
          <H1>Search Results</H1> 
          <h4>( Searched keyword: "{keyword === "keyword" ? "No Keyword Provided" : keyword}", searched by tag: "{tag === "tag" ? "No Tag Provided" : tag}")</h4>
          {this.state.books.length > 1
            ? this.state.books.map((val, key) => (
                <div className="book" key={key}>
                  <img
                    className="bookImg"
                    src={`../../../books/${val.image}`}
                    alt={val.title + val.id}
                  />
                  <div className="bookDesc">
                    <p>Author: {val.author}</p>
                    <p>Title: {val.title}</p>
                    <p>Genre: {val.genre}</p>
                    <p className="quote">Quote: Quote ...</p>
                    <div className="btn">
                      <Link to={`/books/${val.id}`}>
                        <button>Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            : this.state.books.length === 1  ? 
            <div className="book">
            <img
              className="bookImg"
              src={`../../../books/${this.state.books[0].image}`}
              alt={this.state.books[0].title + this.state.books[0].id}
            />
            <div className="bookDesc">
              <p>Author: {this.state.books[0].author}</p>
              <p>Title: {this.state.books[0].title}</p>
              <p>Genre: {this.state.books[0].genre}</p>
              <p className="quote">Quote: Quote ...</p>
              <div className="btn">
                <Link to={`books/${this.state.books[0].id}`}>
                  <button>Details</button>
                </Link>
              </div>
            </div>
          </div> : "No books by that search combination."}
        </SearchStyle>
        <Footer />
      </>
    );
  }
}
