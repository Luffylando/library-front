import React, { Component } from "react";
import { SingleBookStyle } from "./style";
import { CommentStyle } from "./style";
import Comment from "../../../components/Comment";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import SVGInline from "react-svg-inline";
import { threeDots, thumbUp, thumbDown } from "../../../assets/icons";
import * as moment from "moment";
import { Formik } from "formik";
import { store } from "react-notifications-component";
import history from "../../../history";
import { confirmAlert } from "react-confirm-alert"; // Import
import defaultBook from "../../../assets/imgs/books/defaultBook.png";
import ToggleMenu from "../../../components/ToggleMenu";

class SingleBook extends Component {
  constructor() {
    super();
    this.state = {
      confirm: false,
      book: {},
      comments: [],
      currentUser: {},
      edit: false,
      editId: null,
      commentToEdit: {},
      likesCount: null,
      dislikesCount: null,
      check: false,
      checkType: "",
      commentLikesCount: 0,
      commentDislikesCount: 0,
      toggleOptionMenu: false
    };
    this.myRef = React.createRef();
  }

  async componentDidMount() {
    let book_id = this.props.match.params.id;

    if (localStorage.getItem("userId")) {
      let currentUser = await axios.get(
        `http://localhost:4000/users/${parseInt(
          localStorage.getItem("userId")
        )}`
      );
      let check = await axios.get(
        `http://localhost:4000/bookLikes/check/${book_id}/${parseInt(
          localStorage.getItem("userId")
        )}`
      );

      if (check.data.length === 0) {
      } else {
        if (check && check.data[0].liked !== "neutral") {
          this.setState({ check: true });
          if (check.data[0].liked === "liked") {
            this.setState({ checkType: "liked" });
          } else {
            this.setState({ checkType: "unliked" });
          }
        }
      }

      this.setState({ currentUser: currentUser.data });
    }
    let book = await axios.get(`http://localhost:4000/books/${book_id}`);
    let comments = await axios.get(
      `http://localhost:4000/comments/bookId/${book_id}`
    );

    let likesCount = await axios.get(
      `http://localhost:4000/bookLikes/${book_id}/liked`
    );
    likesCount = likesCount.data[0];
    let dislikesCount = await axios.get(
      `http://localhost:4000/bookLikes/${book_id}/unliked`
    );
    dislikesCount = dislikesCount.data[0];

    this.setState({
      book: book.data,
      comments: comments.data,
      likesCount: likesCount,
      dislikesCount: dislikesCount
    });
  }

  toggleOptionMenu = () => {
    this.setState({ toggleOptionMenu: !this.state.toggleOptionMenu });
  };

  hideOptionMenu = () => {
    this.setState({ toggleOptionMenu: false });
  };

  deleteComment = async id => {
    await axios.delete(`http://localhost:4000/comments/delete/${id}`);
    history.push(`/books/${this.state.book.id}`);
    this.componentDidMount();
    // Add Notification Message after Comment has been submited.
    store.addNotification({
      title: "Comment successfully deleted!",
      message: `Comment: " Deleted! "`,
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "bounceIn"],
      animationOut: ["animated", "bounceOut"],
      dismiss: {
        duration: 5000,
        onScreen: false
      },
      content: (
        <div className="notification-custom-success">
          <div className="notification-custom-content">
            <div className="notification-message">
              <div className="message-header">
                Comment Successfully Deleted!
              </div>
            </div>
          </div>
        </div>
      )
    });
  };

  editComment = async id => {
    let getCommentValue = await axios.get(
      `http://localhost:4000/comments/${id}`
    );
    this.setState({
      edit: true,
      editId: id,
      commentToEdit: getCommentValue.data,
      comment: getCommentValue.data.comment
    });
  };

  unarchiveBook = async () => {
    // We will not delete the book, we will only mark it as unarchived, so it shows up in catalog.
    let id = this.props.match.params.id;
    await axios.put(`http://localhost:4000/books/edit/${id}`, {
      archived: false
    });
    window.location.href = "/catalog";
  };

  deleteBook = async () => {
    // We will not delete the book, we will only mark it as archived, so it dont show up in catalog.
    let id = this.props.match.params.id;
    await axios.put(`http://localhost:4000/books/edit/${id}`, {
      archived: true
    });
    window.location.href = "/catalog";
  };

  handleEditChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateComment = async id => {
    let data = {
      created: moment().format("YYYY-MM-DD HH:mm:ss"),
      comment: this.state.comment
    };
    await axios.put(`http://localhost:4000/comments/edit/${id}`, data);
  };

  cancelFunc = () => {
    this.setState({ edit: false });
  };

  likeFunc = async button => {
    let book_id = this.props.match.params.id;
    let user_id = localStorage.getItem("userId");

    let check = await axios.get(
      `http://localhost:4000/bookLikes/check/${book_id}/${user_id}`
    );

    if (check.data.length === 0) {
      let data = {
        user_id: user_id,
        book_id: book_id,
        liked: button === "up" ? "liked" : "unliked",
        created: moment().format("YYYY-MM-DD HH:mm:ss")
      };
      await axios.post(`http://localhost:4000/bookLikes/insert`, data);
    } else if (check) {
      let likeId = check.data[0].id;
      if (
        check.data[0].liked === "neutral" ||
        check.data[0].liked === "unliked"
      ) {
        let liked;
        if (button === "up") {
          liked = "liked";
          this.setState({ check: true, checkType: "liked" });
        } else {
          if (check.data[0].liked === "neutral") {
            liked = "unliked";
            this.setState({ check: true, checkType: "unliked" });
          } else {
            liked = "neutral";
            this.setState({ check: false, checkType: "" });
          }
        }
        let data = {
          liked: liked,
          created: moment().format("YYYY-MM-DD HH:mm:ss")
        };
        await axios.put(
          `http://localhost:4000/bookLikes/update/${likeId}`,
          data
        );
      } else {
        let liked;
        if (button === "down") {
          liked = "unliked";
          this.setState({ check: true, checkType: "unliked" });
        } else {
          liked = "neutral";
          this.setState({ check: false, checkType: "" });
        }
        let data = {
          liked: liked,
          created: moment().format("YYYY-MM-DD HH:mm:ss")
        };
        await axios.put(
          `http://localhost:4000/bookLikes/update/${likeId}`,
          data
        );
      }
    }

    this.componentDidMount();
  };

  submitBorrow = (h1, p) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>{h1}</h1>
            <p>{p}</p>
            <div className="btns">
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  this.borrowBook();
                  onClose();
                }}
              >
                Yes
              </button>
            </div>
          </div>
        );
      }
    });
  };
  submitBuy = (h1, p) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>{h1}</h1>
            <p>{p}</p>
            <div className="btns">
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  this.buyBook();
                  onClose();
                }}
              >
                Yes
              </button>
            </div>
          </div>
        );
      }
    });
  };

  borrowBook = async () => {
    let book_id = this.state.book.id;
    let user_id = parseInt(localStorage.getItem("userId"));
    let status = "requested";
    let checkIfAllreadyBorrowed = await axios.get(
      `http://localhost:4000/borrows/check/${book_id}/${user_id}`
    );
    if (checkIfAllreadyBorrowed.data.CheckIfExists[0] === 0) {
      await axios.post(`http://localhost:4000/borrows/add`, {
        book_id,
        user_id,
        status
      });
      store.addNotification({
        container: "top-right",
        animationIn: ["animated", "bounceIn"],
        animationOut: ["animated", "bounceOut"],
        dismiss: {
          duration: 5000,
          onScreen: false
        },
        content: (
          <div className="notification-custom-success">
            <div className="notification-custom-content">
              <div className="notification-message">
                <div className="message">
                  You Successfully Requested Borrowing of This Book.
                </div>
              </div>
            </div>
          </div>
        )
      });
    } else {
      store.addNotification({
        container: "top-right",
        animationIn: ["animated", "bounceIn"],
        animationOut: ["animated", "bounceOut"],
        dismiss: {
          duration: 5000,
          onScreen: false
        },
        content: (
          <div className="notification-custom-success">
            <div className="notification-custom-content">
              <div className="notification-message">
                <div className="message">
                  You cannot borrow again, Borrow request was already sent.
                </div>
              </div>
            </div>
          </div>
        )
      });
    }
  };
  buyBook = async () => {
    let book_id = this.state.book.id;
    let user_id = parseInt(localStorage.getItem("userId"));
    let status = "requested";
    let checkIfAllreadyBorrowed = await axios.get(
      `http://localhost:4000/orders/check/${book_id}/${user_id}`
    );
    if (checkIfAllreadyBorrowed.data.CheckIfExists[0] === 0) {
      await axios.post(`http://localhost:4000/orders/add`, {
        book_id,
        user_id,
        status
      });

      store.addNotification({
        container: "top-right",
        animationIn: ["animated", "bounceIn"],
        animationOut: ["animated", "bounceOut"],
        dismiss: {
          duration: 5000,
          onScreen: false
        },
        content: (
          <div className="notification-custom-success">
            <div className="notification-custom-content">
              <div className="notification-message">
                <div className="message">
                  You Successfully Requested Buying of This Book.
                </div>
              </div>
            </div>
          </div>
        )
      });
    } else {
      store.addNotification({
        container: "top-right",
        animationIn: ["animated", "bounceIn"],
        animationOut: ["animated", "bounceOut"],
        dismiss: {
          duration: 5000,
          onScreen: false
        },
        content: (
          <div className="notification-custom-success">
            <div className="notification-custom-content">
              <div className="notification-message">
                <div className="message">
                  You cannot buy again before earlier purchase was not
                  proccessed.
                </div>
              </div>
            </div>
          </div>
        )
      });
    }
  };

  render() {
    return (
      <>
        <Header />
        <SingleBookStyle>
          <div className="topBtns">
            <div className="goBack">
              <Link className="backBtn" to="/catalog">
                <Button
                  bgColor={"#3F5D88"}
                  width={"200px"}
                  padding={"10px 0px"}
                  margin={"10px 0px"}
                  fWeight={"600"}
                  bRadius={"50px"}
                  txtColor={"#fff"}
                  hoverBg={"#fff"}
                  hoverTxt={"#3F5D88"}
                  transition={"all 0.3s"}
                  hoverBorder={"1px solid #3F5D88"}
                  btnText={"Go Back"}
                ></Button>
              </Link>
            </div>

            {localStorage.getItem("userRole") === "admin" ? (
              <>
                <SVGInline
                  svg={threeDots}
                  onClick={() => {
                    this.toggleOptionMenu();
                  }}
                  className={"toggleSvg"}
                />
                {this.state.toggleOptionMenu ? (
                  <ToggleMenu
                    id="move"
                    top={"100px"}
                    background={"#3F5D88"}
                    color={"#fff"}
                    right={"-50px"}
                    padding={"10px 20px"}
                    borderRadius={"5px"}
                    border={"1px solid #000"}
                    handleClickOutside={() => {
                      this.hideOptionMenu();
                    }}
                    ref={this.myRef}
                  >
                    <Link
                      className="editBtn"
                      to={`/books/edit/${this.state.book.id}`}
                    >
                      <p>Edit</p>
                    </Link>
                    <div
                      className="deleteBtn"
                      onClick={
                        this.state.book.archived === 1
                          ? () => {
                              this.unarchiveBook();
                            }
                          : () => {
                              this.deleteBook();
                            }
                      }
                    >
                      <p>Delete</p>
                    </div>
                  </ToggleMenu>
                ) : null}
              </>
            ) : null}
          </div>

          <div className="book">
            <img
              src={
                this.state.book.image
                  ? `../books/${this.state.book.image}`
                  : defaultBook
              }
              alt={`${this.state.book.image}${this.state.book.id}`}
            />
            <div className="bookDesc">
              <div className="desc">
                <p>
                  Author: <b>{this.state.book.author}</b>
                </p>
                <p>
                  Title: <b>{this.state.book.title}</b>
                </p>
                <p>
                  Genre: <b>{this.state.book.genre}</b>
                </p>
                <p>
                  Quote: <b>"{this.state.book.quote}"</b>
                </p>
                <div
                  className={
                    this.state.book.status === 0
                      ? "availability false"
                      : "availability true"
                  }
                >
                  {this.state.book.status === 0
                    ? "Not Available!"
                    : "Available!"}
                </div>
                <div className="thumbs">
                  <div
                    className={`up `}
                    onClick={() => {
                      this.likeFunc("up");
                    }}
                  >
                    <SVGInline
                      className={`liked ${
                        this.state.check && this.state.checkType === "liked"
                          ? "success"
                          : ""
                      }`}
                      svg={thumbUp}
                    ></SVGInline>
                    <p>Likes</p>
                    <p>{this.state.likesCount ? this.state.likesCount : 0}</p>
                  </div>
                  <div
                    className={`down `}
                    onClick={() => {
                      this.likeFunc("down");
                    }}
                  >
                    <SVGInline
                      className={`dislikes ${
                        this.state.check && this.state.checkType === "unliked"
                          ? "danger"
                          : ""
                      }`}
                      svg={thumbDown}
                    ></SVGInline>
                    <p>Dislikes</p>
                    <p>
                      {this.state.dislikesCount ? this.state.dislikesCount : 0}
                    </p>
                  </div>
                </div>
                <div className="borrowed">
                  {this.state.book.borrowCount === 0
                    ? "Be First To Borrow This Book!"
                    : `This Book was Borrowed ${this.state.book.borrowCount} times.`}
                </div>
              </div>
              <div className="btns">
                <button
                  onClick={
                    localStorage.getItem("userId")
                      ? () => {
                          this.submitBorrow(
                            "Are You Sure",
                            "You Want to Borrow This Book?"
                          );
                        }
                      : () => {
                          store.addNotification({
                            type: "danger",
                            insert: "top",
                            container: "top-right",
                            animationIn: ["animated", "bounceIn"],
                            animationOut: ["animated", "bounceOut"],
                            dismiss: {
                              duration: 5000,
                              onScreen: false
                            },
                            content: (
                              <div className="notification-custom-success">
                                <div className="notification-custom-content">
                                  <div className="notification-message">
                                    <div className="message-header">
                                      You must be logged in to use this
                                      function.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          });
                        }
                  }
                  className="reserve"
                >
                  Borrow{" "}
                </button>
                <button
                  onClick={
                    localStorage.getItem("userId")
                      ? () => {
                          this.submitBuy(
                            "Are You Sure",
                            "You Want to Buy This Book?"
                          );
                        }
                      : () => {
                          store.addNotification({
                            type: "danger",
                            insert: "top",
                            container: "top-right",
                            animationIn: ["animated", "bounceIn"],
                            animationOut: ["animated", "bounceOut"],
                            dismiss: {
                              duration: 5000,
                              onScreen: false
                            },
                            content: (
                              <div className="notification-custom-success">
                                <div className="notification-custom-content">
                                  <div className="notification-message">
                                    <div className="message-header">
                                      You must be logged in to use this
                                      function.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          });
                        }
                  }
                  className="order"
                >
                  Buy{" "}
                </button>
              </div>
            </div>
          </div>
        </SingleBookStyle>
        <CommentStyle>
          <div className="commentSection">
            {localStorage.getItem("userId") ? (
              <>
                <div className="addComment">
                  <img
                    className="image"
                    src={`/team/${this.state.currentUser.image}`}
                    alt={`${this.state.currentUser.image +
                      localStorage.getItem("userId")}`}
                  />
                  <Formik
                    initialValues={{ comment: "" }}
                    onSubmit={async (values, { setSubmitting }) => {
                      let data = {
                        book_id: this.state.book.id,
                        user_id: parseInt(localStorage.getItem("userId")),
                        comment: values.comment,
                        created: moment().format("YYYY-MM-DD HH:mm:ss")
                      };

                      await axios.post(
                        `http://localhost:4000/comments/add`,
                        data
                      );
                      history.push(`/books/${this.state.book.id}`);
                      this.componentDidMount();

                      // Add Notification Message after Comment has been submited.
                      store.addNotification({
                        title: "Comment successfully added!",
                        message: `Comment: " ${values.comment} "`,
                        type: "success",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animated", "bounceIn"],
                        animationOut: ["animated", "bounceOut"],
                        dismiss: {
                          duration: 5000,
                          onScreen: false
                        },
                        content: (
                          <div className="notification-custom-success">
                            {/* <div className="notification-custom-icon">
                              <i className="fa fa-check" />
                            </div> */}
                            <div className="notification-custom-content">
                              <div className="notification-message">
                                <div className="message-header">
                                  Comment Successfully Added!
                                </div>
                                <div className="message">
                                  Comment: "{values.comment}"
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      });

                      // End of Notification Message

                      // Restart comment value
                      values.comment = "";

                      setTimeout(() => {
                        setSubmitting(false);
                      }, 1000);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                      /* and other goodies */
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <textarea
                          id="comment"
                          name="comment"
                          placeholder="Add a public comment..."
                          value={values.comment}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></textarea>
                        <div className="btnSection">
                          <Button
                            bgColor={"#3F5D88"}
                            width={"90px"}
                            padding={"5px 0px"}
                            margin={"10px 5px"}
                            fWeight={"300"}
                            fSize={"12px"}
                            bRadius={"10px"}
                            txtColor={"#fff"}
                            hoverBg={"#fff"}
                            hoverTxt={"#3F5D88"}
                            transition={"all 0.3s"}
                            hoverBorder={"1px solid #3F5D88"}
                            btnText={"Cancel"}
                          ></Button>
                          <Button
                            bgColor={"#3F5D88"}
                            width={"90px"}
                            padding={"5px 0px"}
                            margin={"10px 5px"}
                            fWeight={"300"}
                            fSize={"12px"}
                            bRadius={"10px"}
                            txtColor={"#fff"}
                            hoverBg={"#fff"}
                            hoverTxt={"#3F5D88"}
                            transition={"all 0.3s"}
                            hoverBorder={"1px solid #3F5D88"}
                            btnText={"Submit"}
                            type={"submit"}
                            disabled={isSubmitting}
                          ></Button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </>
            ) : null}

            <div className="otherComments">
              {this.state.comments[0]
                ? this.state.comments[0].map(value => (
                    <div key={value.id}>
                      <Comment
                        key={value.id}
                        id={value.id}
                        fullName={value.firstName + " " + value.lastName}
                        date={moment(value.created).format(
                          "DD.MM.YYYY HH:mm:ss"
                        )}
                        comment={value.comment}
                        userId={value.user_id}
                        image={`/team/${value.image}`}
                        deleteCommentFunc={() => {
                          this.deleteComment(value.id);
                        }}
                        editCommentFunc={() => {
                          this.editComment(value.id);
                        }}
                        edit={
                          this.state.editId === value.id
                            ? this.state.edit
                            : null
                        }
                        editValue={
                          this.state.editId === value.id
                            ? this.state.comment
                            : this.state.commentToEdit.comment
                        }
                        handleEditChange={this.handleEditChange}
                        handleSubmit={() => {
                          this.updateComment(value.id);
                        }}
                        cancelFunc={() => {
                          this.cancelFunc();
                        }}
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
        </CommentStyle>
        <Footer />
      </>
    );
  }
}

export default SingleBook;
