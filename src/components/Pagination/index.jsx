import React, { Component } from "react";
import PaginationStyle from "./style";

class Pagination extends Component {
  constructor(props) {
    super(props);
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
    window.location.href = `http://localhost:3000${this.props.url}/${number}/${this.props.itemsPerPage}`;
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
      if (i === 1 || i === last || (i >= left && i < right)) {
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
      <div key={key}>
        <li
          onClick={() => {
            this.getPaginationData(value);
          }}
          className={value === this.props.activePage ? "active" : "normal"}
          key={key}
        >
          {value}
        </li>
      </div>
    ));
  }
  render() {
    let allMessages = this.props.paginationCount.length;
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
                parseInt(this.props.activePage) <= 1
                  ? parseInt(this.props.activePage)
                  : parseInt(this.props.activePage) - 1
              );
            }}
          >
            Previous
          </li>

          {this.pagination(
            parseInt(this.props.activePage),
            Math.ceil(allMessages / this.props.itemsPerPage)
          )}

          <li
            onClick={() => {
              this.getPaginationData(
                parseInt(this.props.activePage) >=
                  Math.ceil(allMessages / this.props.itemsPerPage)
                  ? parseInt(this.props.activePage)
                  : parseInt(this.props.activePage) + 1
              );
            }}
          >
            Next
          </li>
          <li
            onClick={() => {
              this.getPaginationData(
                Math.ceil(
                  this.props.paginationCount.length / this.props.itemsPerPage
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
