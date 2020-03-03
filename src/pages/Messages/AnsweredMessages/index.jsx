import React, { Component } from "react";
import { Link } from "react-router-dom";
import MessageStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Pagination from "../../../components/Pagination";
import axios from "axios";
import Button from "../../../components/Button";

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

  archiveMessage = async id => {
    let data = { archived: true, answered: true };
    await axios.put(`http://localhost:4000/contact/message/update/${id}`, data);
    this.componentDidMount();
  };

  unanswerMessage = async id => {
    let data = { answered: false };
    await axios.put(`http://localhost:4000/contact/message/update/${id}`, data);
    this.componentDidMount();
  };
  render() {
    return (
      <>
        <Header />
        <MessageStyle>
          <h1>Answered Contact Messages</h1>
          <div className="linkBtns">
            <Link to={"/contact/messages/1/5"}>
              {" "}
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
              ></Button>
            </Link>
            <Link to={"/contact/messages/archived/1/5"}>
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
                btnText={"Archived Messages"}
              ></Button>
            </Link>
          </div>
          {this.state.messages.length !== 0 ? (
            <>
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
                      <td className="actionBtns">
                        <Button
                          bgColor={"#F25925"}
                          width={"100px"}
                          padding={"10px 0px"}
                          margin={"5px 10px 5px 0px"}
                          fWeight={"600"}
                          btnBorder={"1px solid transparent"}
                          fSize={"14px"}
                          bRadius={"5px"}
                          txtColor={"#fff"}
                          hoverBg={"#fff"}
                          hoverTxt={"#F25925"}
                          transition={"all 0.3s"}
                          hoverBorder={"1px solid #F25925"}
                          btnText={"Unanswer"}
                          onClick={() => {
                            this.unanswerMessage(value.id);
                          }}
                        ></Button>
                        <Button
                          bgColor={"#3F5D88"}
                          width={"100px"}
                          padding={"10px 0px"}
                          margin={"5px 0px 5px 0px"}
                          fWeight={"600"}
                          btnBorder={"1px solid gray"}
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
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination
                paginationCount={this.state.messagesCount}
                currentPage={parseInt(window.location.pathname.split("/")[4])}
                url={`/contact/messages/answered`}
                itemsPerPage={parseInt(this.state.itemsPerPage)}
                activePage={parseInt(this.state.activePage)}
              />
            </>
          ) : (
            <p className="noMessages">There are no unanswered messages.</p>
          )}
        </MessageStyle>
        <Footer />
      </>
    );
  }
}

export default AnsweredMessages;
