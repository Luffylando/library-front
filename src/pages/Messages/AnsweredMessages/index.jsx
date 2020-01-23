import React, { Component } from "react";
import { Link } from "react-router-dom";
import MessageStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Pagination from "../../../components/Pagination";
import axios from "axios";

class AnsweredMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messagesCount: [],
      messages: [],
      activePage: 1
    };
  }

  async componentDidMount() {
    let messagesCount = await axios.get(
      `http://localhost:4000/contact/messages/answered`
    );
    let activePage = window.location.pathname.split("/")[4];
    let itemsPerPage = window.location.pathname.split("/")[5];

    let messages = await axios.get(
      `http://localhost:4000/contact/messages/answered/${activePage}/${itemsPerPage}`
    );
    this.setState({
      messages: messages.data,
      messagesCount: messagesCount.data,
      itemsPerPage,
      activePage
    });
  }

  render() {
    return (
      <>
        <Header />
        <MessageStyle>
          <h1>Answered Messages</h1>
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
                      <Link to="#">
                        <button className="ui green button">Answered!</button>
                      </Link>
                      <button className="ui red button">
                        Click to Archive
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            "There are no more messages."
          )}
          {console.log(
            'window.location.pathname.split("/")[4]',
            window.location.pathname.split("/")[4]
          )}
          <Pagination
            paginationCount={this.state.messagesCount}
            currentPage={parseInt(window.location.pathname.split("/")[4])}
            url={`/contact/messages/answered`}
            itemsPerPage={parseInt(this.state.itemsPerPage)}
            activePage={parseInt(this.state.activePage)}
          />
        </MessageStyle>
        <Footer />
      </>
    );
  }
}

export default AnsweredMessages;
