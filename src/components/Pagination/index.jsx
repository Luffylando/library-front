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
    this.setState({ activePage: window.location.pathname.split("/")[3] });
  }

  getPaginationData(number) {
    window.location.href = `/contact/messages/${number}`;
  }
  render() {
    let pageNumberArray = [];
    let allMessages = this.props.paginationCount.length;

    for (let i = 0; i < Math.ceil(allMessages / 5); i++) {
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
          {pageNumberArray
            ? pageNumberArray.map((value, key) => (
                <li
                  onClick={() => {
                    this.getPaginationData(key + 1);
                  }}
                  key={key}
                  className={
                    parseInt(value) === parseInt(this.state.activePage)
                      ? "active"
                      : "normal"
                  }
                >
                  {key + 1}
                </li>
              ))
            : "slaboooo"}

          <li
            onClick={() => {
              this.getPaginationData(
                parseInt(window.location.pathname.split("/")[3]) >=
                  Math.ceil(allMessages / 5)
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
                Math.ceil(this.props.paginationCount.length / 5)
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
