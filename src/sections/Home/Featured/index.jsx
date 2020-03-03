import React, { Component } from "react";
import FeaturedStyle from "./style";
import kant from "../../../assets/imgs/books/b1.jpg";
import orwell from "../../../assets/imgs/books/b2.jpg";
import tolstoy from "../../../assets/imgs/books/b3.jpg";
import plato from "../../../assets/imgs/books/b4.jpg";
import defaultBook from "../../../assets/imgs/books/defaultBook.png";
import MainPageFeaturedBook from "../../../components/MainPageFeaturedBook";
import axios from "axios";
import { connect } from "react-redux";
import { ActiveMenuItem } from "../../../actions/ActiveMenuItem";

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

  changeActiveMenu = name => {
    this.props.ActiveMenuItem(name);
  };

  renderDefaultBooks(booksCount) {
    if (booksCount === 1) {
      return (
        <>
          <MainPageFeaturedBook
            bookImage={kant}
            bookTitle={"the critique of pure reason"}
            bookAuthor={"Immanuel Kant"}
            linkTo={`/catalog`}
            onClick={() => {
              this.changeActiveMenu("Catalog");
            }}
          />
          <MainPageFeaturedBook
            bookImage={plato}
            bookTitle={"The Republic"}
            bookAuthor={"Plato"}
            linkTo={`/catalog`}
            onClick={() => {
              this.changeActiveMenu("Catalog");
            }}
          />
          <MainPageFeaturedBook
            bookImage={tolstoy}
            bookTitle={"War and Peace"}
            bookAuthor={"Leo Tolstoy"}
            linkTo={`/catalog`}
            onClick={() => {
              this.changeActiveMenu("Catalog");
            }}
          />
        </>
      );
    } else if (booksCount === 2) {
      return (
        <>
          <MainPageFeaturedBook
            bookImage={kant}
            bookTitle={"the critique of pure reason"}
            bookAuthor={"Immanuel Kant"}
            linkTo={`/catalog`}
            onClick={() => {
              this.changeActiveMenu("Catalog");
            }}
          />
          <MainPageFeaturedBook
            bookImage={plato}
            bookTitle={"The Republic"}
            bookAuthor={"Plato"}
            linkTo={`/catalog`}
            onClick={() => {
              this.changeActiveMenu("Catalog");
            }}
          />
        </>
      );
    } else if (booksCount === 3) {
      return (
        <>
          <MainPageFeaturedBook
            bookImage={kant}
            bookTitle={"the critique of pure reason"}
            bookAuthor={"Immanuel Kant"}
            linkTo={`/catalog`}
            onClick={() => {
              this.changeActiveMenu("Catalog");
            }}
          />
        </>
      );
    }
  }

  render() {
    return (
      <FeaturedStyle>
        <div className="titleSection">
          <div className="mainTitle">NEW & NOTEWORTHY</div>
          <div className="subTitle">New arrivals and hot picks.</div>
        </div>
        <div className="booksSection">
          <div className="subnav">
            {/* <ul>
              <li>adult</li>
              <li>children</li>
              <li>teen</li>
              <li>movies</li>
            </ul> */}
          </div>

          <div className="books">
            {this.state.featured ? (
              this.state.featured.map(value => (
                <MainPageFeaturedBook
                  key={value.id}
                  bookImage={
                    value.image ? `../books/${value.image}` : defaultBook
                  }
                  bookTitle={value.title}
                  bookAuthor={value.author}
                  linkTo={`/books/${value.id}`}
                  onClick={() => {
                    this.changeActiveMenu("Catalog");
                  }}
                />
              ))
            ) : (
              <>
                <MainPageFeaturedBook
                  bookImage={orwell}
                  bookTitle={"1984"}
                  bookAuthor={"George Orwell"}
                  linkTo={`/catalog`}
                  onClick={() => {
                    this.changeActiveMenu("Catalog");
                  }}
                />

                <MainPageFeaturedBook
                  bookImage={kant}
                  bookTitle={"the critique of pure reason"}
                  bookAuthor={"Immanuel Kant"}
                  linkTo={`/catalog`}
                  onClick={() => {
                    this.changeActiveMenu("Catalog");
                  }}
                />
                <MainPageFeaturedBook
                  bookImage={plato}
                  bookTitle={"The Republic"}
                  bookAuthor={"Plato"}
                  linkTo={`/catalog`}
                  onClick={() => {
                    this.changeActiveMenu("Catalog");
                  }}
                />
                <MainPageFeaturedBook
                  bookImage={tolstoy}
                  bookTitle={"War and Peace"}
                  bookAuthor={"Leo Tolstoy"}
                  linkTo={`/catalog`}
                  onClick={() => {
                    this.changeActiveMenu("Catalog");
                  }}
                />
              </>
            )}
            {this.renderDefaultBooks(this.state.featured.length)}
            <div className="absoluteTriangle"></div>
          </div>
        </div>
      </FeaturedStyle>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  ActiveMenuItem: value => dispatch(ActiveMenuItem(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
