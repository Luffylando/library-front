import React, { Component } from "react";
import PaginationStyle from "./style";
import { Link } from "react-router-dom";

class Pagination extends Component {
  constructor() {
    super();
    this.state = {
      activePage: 1
    };
  }

  componentDidMount() {
    this.setState({
      activePage: window.location.pathname.split("/")[3],
      itemsPerPage: window.location.pathname.split("/")[4]
    });
  }

  getPaginationData(number) {
    window.location.href = `/contact/messages/${number}/${this.state.itemsPerPage}`;
  }
  pagination(c, m) {
    var current = c,
      last = m,
      delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

    for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || (i >= left && i < right)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots.map((value, key) => (
      <li
        onClick={() => {
          this.getPaginationData(key + 1);
        }}
        className={
          parseInt(value) === parseInt(this.state.activePage)
            ? "active"
            : "normal"
        }
        key={key}
      >
        {value}
      </li>
    ));
  }
  render() {
    let pageNumberArray = [];
    let allMessages = this.props.paginationCount.length;

    for (let i = 0; i < Math.ceil(allMessages / this.state.itemsPerPage); i++) {
      pageNumberArray.push(i + 1);
    }

    return (
      <PaginationStyle>
        <ul>
          <li
            onClick={() => {
              this.getPaginationData(1);
            }}
          >
            First
          </li>
          <li
            onClick={() => {
              this.getPaginationData(
                parseInt(window.location.pathname.split("/")[3]) <= 1
                  ? parseInt(window.location.pathname.split("/")[3])
                  : parseInt(window.location.pathname.split("/")[3]) - 1
              );
            }}
          >
            Previous
          </li>

          {this.pagination(
            parseInt(this.state.activePage),
            Math.ceil(allMessages / this.state.itemsPerPage)
          )}

          <li
            onClick={() => {
              this.getPaginationData(
                parseInt(window.location.pathname.split("/")[3]) >=
                  Math.ceil(allMessages / this.state.itemsPerPage)
                  ? parseInt(window.location.pathname.split("/")[3])
                  : parseInt(window.location.pathname.split("/")[3]) + 1
              );
            }}
          >
            Next
          </li>
          <li
            onClick={() => {
              this.getPaginationData(
                Math.ceil(
                  this.props.paginationCount.length / this.state.itemsPerPage
                )
              );
            }}
          >
            Last
          </li>
        </ul>
      </PaginationStyle>
    );
  }
}

export default Pagination;
