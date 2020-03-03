import React, { Component } from "react";
import FeaturedBookStyle from "./style";
import { Link } from "react-router-dom";

class MainPageFeaturedBook extends Component {
  render() {
    return (
      <FeaturedBookStyle>
        <div className="book">
          <Link
            onClick={this.props.onClick ? this.props.onClick : null}
            to={this.props.linkTo}
          >
            <img src={this.props.bookImage} alt={this.props.bookImage} />
            <p className="bookTitle">{this.props.bookTitle}</p>
          </Link>
          <p className="bookAuthor">by {this.props.bookAuthor}</p>
        </div>
      </FeaturedBookStyle>
    );
  }
}

export default MainPageFeaturedBook;
