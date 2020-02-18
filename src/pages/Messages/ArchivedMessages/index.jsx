import React, { Component } from "react";
import { Link } from "react-router-dom";
import MessageStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Pagination from "../../../components/Pagination";
import axios from "axios";
import Button from "../../../components/Button";

class ArchivedMessages extends Component {
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
      `http://localhost:4000/contact/messages/archived`
    );
    let activePage = window.location.pathname.split("/")[4];
    let itemsPerPage = window.location.pathname.split("/")[5];

    let messages = await axios.get(
      `http://localhost:4000/contact/messages/archived/${activePage}/${itemsPerPage}`
    );
    this.setState({
      messages: messages.data,
      messagesCount: messagesCount.data,
      itemsPerPage,
      activePage
    });
  }

  unarchiveMessage = async id => {
    let data = { archived: null };
    await axios.put(`http://localhost:4000/contact/message/update/${id}`, data);
    this.componentDidMount();
  };
  render() {
    return (
      <>
        <Header />
        <MessageStyle>
          <h1>Archived Contact Messages</h1>
          <div className="linkBtns">
            <Link to={"/contact/messages/1/5"}>
              <Button
                bgColor={"#fff"}
                width={"180px"}
                padding={"10px 10px"}
                margin={"5px 10px 5px 0px"}
                fWeight={"600"}
                btnBorder={"1px solid gray"}
                fSize={"14px"}
                bRadius={"5px"}
                txtColor={"#000"}
                hoverBg={"#666666"}
                hoverTxt={"#fff"}
                transition={"all 0.3s"}
                hoverBorder={"1px solid #fff"}
                btnText={"All Messages"}
              ></Button>{" "}
            </Link>
            <Link to={"/contact/messages/answered/1/5"}>
              <Button
                bgColor={"#fff"}
                width={"180px"}
                padding={"10px 10px"}
                margin={"5px 0px"}
                fWeight={"600"}
                btnBorder={"1px solid gray"}
                fSize={"14px"}
                bRadius={"5px"}
                txtColor={"#000"}
                hoverBg={"#666666"}
                hoverTxt={"#fff"}
                transition={"all 0.3s"}
                hoverBorder={"1px solid #fff"}
                btnText={"Answered Messages"}
              ></Button>
            </Link>
          </div>
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
                    <td className="actionBtn">
                      <Button
                        bgColor={"#3F5C88"}
                        width={"180px"}
                        padding={"10px 10px"}
                        margin={"5px 10px 5px 0px"}
                        fWeight={"600"}
                        btnBorder={"1px solid gray"}
                        fSize={"14px"}
                        bRadius={"5px"}
                        txtColor={"#fff"}
                        hoverBg={"#fff"}
                        hoverTxt={"#3F5C88"}
                        transition={"all 0.3s"}
                        hoverBorder={"1px solid #3F5C88"}
                        btnText={"Click to Unarchive"}
                        onClick={() => {
                          this.unarchiveMessage(value.id);
                        }}
                      ></Button>
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
            url={`/contact/messages/archived`}
            itemsPerPage={parseInt(this.state.itemsPerPage)}
            activePage={parseInt(this.state.activePage)}
          />
        </MessageStyle>
        <Footer />
      </>
    );
  }
}

export default ArchivedMessages;
