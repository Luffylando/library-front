import React, { Component } from "react";
import { Link } from "react-router-dom";
import MessageStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";
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
    let messagesCount = await axios.get(`http://localhost:4000/contact`);
    let paginationNumber = window.location.pathname.split("/")[3];
    let itemsPerPage = window.location.pathname.split("/")[4];

    let messages = await axios.get(
      `http://localhost:4000/contact/messages/${paginationNumber}/${itemsPerPage}`
    );
    this.setState({
      messages: messages.data,
      messagesCount: messagesCount.data,
      activePage: paginationNumber,
      itemsPerPage
    });
  }

  archiveMessage = async id => {
    let data = { archived: true };
    await axios.put(`http://localhost:4000/contact/message/update/${id}`, data);
    this.componentDidMount();
  };

  render() {
    return (
      <>
        <Header />
        <MessageStyle>
          <h1>Contact Messages</h1>
          <div className="linkBtns">
            <Link to={"/contact/messages/archived/1/5"}>
              <Button
                bgColor={"#fff"}
                width={"180px"}
                padding={"10px 10px"}
                margin={"5px 10px"}
                btnBorder={"1px solid gray"}
                fWeight={"600"}
                fSize={"14px"}
                bRadius={"5px"}
                txtColor={"#000"}
                hoverBg={"#666666"}
                hoverTxt={"#fff"}
                transition={"all 0.3s"}
                hoverBorder={"1px solid #fff"}
                btnText={"Archived Messages"}
              ></Button>
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
                    <td className="tableActionBtns">
                      <Link to={`/contact/messages/${value.id}`}>
                        <Button
                          bgColor={"#F15925"}
                          padding={"10px 10px"}
                          margin={"5px 10px 5px 0px"}
                          fWeight={"600"}
                          btnBorder={"1px solid #fff"}
                          fSize={"14px"}
                          bRadius={"5px"}
                          txtColor={"#fff"}
                          hoverBg={"#fff"}
                          hoverTxt={"#F15925"}
                          transition={"all 0.3s"}
                          hoverBorder={"1px solid #F15925"}
                          btnText={"Answer"}
                        ></Button>
                      </Link>
                      <Button
                        bgColor={"#3F5D88"}
                        padding={"10px 10px"}
                        margin={"5px 0px"}
                        fWeight={"600"}
                        btnBorder={"1px solid #fff"}
                        fSize={"14px"}
                        bRadius={"5px"}
                        txtColor={"#fff"}
                        hoverBg={"#fff"}
                        hoverTxt={"#3F5D88"}
                        transition={"all 0.3s"}
                        hoverBorder={"1px solid #3F5D88"}
                        btnText={"Archive"}
                        onClick={() => {
                          this.archiveMessage(value.id);
                        }}
                      ></Button>
                      {/* <button
                        onClick={() => {
                          this.archiveMessage(value.id);
                        }}
                        className="ui red button"
                      >
                        Archive
                      </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            "There are no more messages."
          )}
          <Pagination
            paginationCount={
              this.state.messagesCount ? this.state.messagesCount : []
            }
            currentPage={window.location.pathname.split("/")[3]}
            url={`/contact/messages`}
            itemsPerPage={parseInt(this.state.itemsPerPage)}
            activePage={parseInt(this.state.activePage)}
          />
        </MessageStyle>
        <Footer />
      </>
    );
  }
}

export default Messages;
