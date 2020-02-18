import React, { Component } from "react";
import FeaturedStyle from "./style";
import kant from "../../../assets/imgs/books/Kant-Critique.jpg";
import orwell from "../../../assets/imgs/books/Orwell-1984.jpg";
import tolstoy from "../../../assets/imgs/books/Tolstoy-War.jpg";
import plato from "../../../assets/imgs/books/Plato-Republic.jpg";
import axios from "axios";

class Featured extends Component {
  constructor() {
    super();
    this.state = {
      featured: []
    };
  }

  componentDidMount = async () => {
    let featured = await axios.get(`http://localhost:4000/books/highlighted`);
    this.setState({ featured: featured.data });
  };

  render() {
    console.log("this.state", this.state);
    return (
      <FeaturedStyle>
        <div className="titleSection">
          <div className="mainTitle">NEW & NOTEWORTHY</div>
          <div className="subTitle">New arrivals and hot picks.</div>
        </div>
        <div className="booksSection">
          <div className="subnav">
            <ul>
              <li>adult</li>
              <li>children</li>
              <li>teen</li>
              <li>movies</li>
            </ul>
          </div>

          <div className="books">
            {this.state.featured ? (
              this.state.featured.map(value => (
                <div key={value.id} className="book">
                  <img src={kant} alt="img" />
                  <p className="bookTitle">{value.title}</p>
                  <p className="bookAuthor">by {value.author}</p>
                </div>
              ))
            ) : (
              <>
                <div className="book">
                  <img src={kant} alt="img" />
                  <p className="bookTitle">the critique of pure reason</p>
                  <p className="bookAuthor">by Imanuell Kant</p>
                </div>
                <div className="book">
                  <img src={orwell} alt="img" />
                  <p className="bookTitle">1984</p>
                  <p className="bookAuthor">by George Orwell</p>
                </div>
                <div className="book">
                  <img src={tolstoy} alt="img" />
                  <p className="bookTitle">War and Peace</p>
                  <p className="bookAuthor">by Leo Tolstoy</p>
                </div>
                <div className="book">
                  <img src={plato} alt="img" />
                  <p className="bookTitle">The Republic</p>
                  <p className="bookAuthor">by Plato</p>
                </div>
              </>
            )}
            <div className="absoluteTriangle"></div>
          </div>
        </div>
      </FeaturedStyle>
    );
  }
}

export default Featured;
