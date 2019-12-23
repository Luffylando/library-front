import React, { Component } from "react";
import SingleBookStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import SVGInline from "react-svg-inline";
import { backArrow } from "../../../assets/icons";

export default class SingleBook extends Component {
  constructor() {
    super();
    this.state = {
      book: {}
    };
  }

  async componentDidMount() {
    let id = this.props.match.params.id;
    let book = await axios.get(`http://localhost:4000/books/${id}`);
    this.setState({ book: book.data });
  }
  render() {
    return (
      <>
        <Header />
        <SingleBookStyle>
          <Link className="backBtn" to="/catalog">
            <p>Go Back</p> <SVGInline svg={backArrow} />
          </Link>
          <img
            src={`../books/${this.state.book.image}.jpg`}
            alt={`${this.state.book.image}${this.state.book.id}`}
          />
          <div className="bookDesc">
            <div className="desc">
              <p>Id: {this.state.book.id}</p>
              <p>Author: {this.state.book.author}</p>
              <p>Title: {this.state.book.title}</p>
              <p>Genre: {this.state.book.genre}</p>
              <p>Quote: Quote...</p>
            </div>
            <div className="btns">
              <button className="reserve">Reserve </button>
              <button className="order">Order </button>
            </div>
          </div>
        </SingleBookStyle>
        <Footer />
      </>
    );
  }
}
