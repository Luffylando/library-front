import React, { Component } from "react";
import { Link } from "react-router-dom";
import MessageStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Pagination from "../../../components/Pagination";
import axios from "axios";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messagesCount: [],
      messages: [],
      paginationNumber: 1
    };
  }

  async componentDidMount() {
    let messagesCount = await axios.get(`http://localhost:4000/contact/`);
    let paginationNumber = window.location.pathname.split("/")[3];
    let itemsPerPage = window.location.pathname.split("/")[4];

    let messages = await axios.get(
      `http://localhost:4000/contact/messages/${paginationNumber}/${itemsPerPage}`
    );
    this.setState({
      messages: messages.data,
      messagesCount: messagesCount.data
    });
  }

  render() {
    return (
      <>
        <Header />
        <MessageStyle>
          <h1>Contact Messages</h1>
          {this.state.messages.length !== 0 ? (
            <table className="ui celled table">
              <thead className="">
                <tr className="">
                  <th className="">Fullname</th>
                  <th className="">Email</th>
                  <th className="">Message</th>
                  <th className="">Status</th>
                  <th className="">Actions</th>
                </tr>
              </thead>
              <tbody className="">
                {this.state.messages.map(value => (
                  <tr key={value.id} className="">
                    <td className="">
                      {value.lastName} {value.firstName}
                    </td>
                    <td className="">{value.email}</td>
                    <td className="">{value.message}</td>
                    <td className="">status to add...</td>
                    <td className="center aligned">
                      <Link to={`/contact/messages/${value.id}`}>
                        <button className="ui green button">Answer</button>
                      </Link>
                      <button className="ui red button">Archive</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            "There are no more messages."
          )}
          <Pagination
            paginationCount={this.state.messagesCount}
            currentPage={window.location.pathname.split("/")[3]}
          />
        </MessageStyle>
        <Footer />
      </>
    );
  }
}

export default Messages;
