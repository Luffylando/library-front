import React, { Component } from "react";
import { SingleBookStyle } from "./style";
import { CommentStyle } from "./style";
import Comment from "../../../components/Comment";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import SVGInline from "react-svg-inline";
import {
  pencil,
  backArrow,
  x,
  thumbUp,
  thumbDown
} from "../../../assets/icons";
import * as moment from "moment";
import { Formik } from "formik";
import { store } from "react-notifications-component";
import history from "../../../history";

export default class SingleBook extends Component {
  constructor() {
    super();
    this.state = {
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
      commentDislikesCount: 0
    };
  }

  async componentDidMount() {
    let book_id = this.props.match.params.id;
    let currentUser = await axios.get(
      `http://localhost:4000/users/${parseInt(localStorage.getItem("userId"))}`
    );
    let book = await axios.get(`http://localhost:4000/books/${book_id}`);
    let comments = await axios.get(
      `http://localhost:4000/comments/bookId/${book_id}`
    );

    let likesCount = await axios.get(
      `http://localhost:4000/bookLikes/${book_id}/liked`
    );
    let dislikesCount = await axios.get(
      `http://localhost:4000/bookLikes/${book_id}/unliked`
    );
    let check = await axios.get(
      `http://localhost:4000/bookLikes/check/${book_id}/${parseInt(
        localStorage.getItem("userId")
      )}`
    );

    if (check && check.data[0].liked !== "neutral") {
      this.setState({ check: true });
      if (check.data[0].liked === "liked") {
        this.setState({ checkType: "liked" });
      } else {
        this.setState({ checkType: "unliked" });
      }
    }

    this.setState({
      book: book.data,
      comments: comments.data,
      currentUser: currentUser.data,
      likesCount: likesCount.data,
      dislikesCount: dislikesCount.data
    });
  }

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

  deleteBook = async () => {
    let id = this.props.match.params.id;
    await axios.delete(`http://localhost:4000/books/delete/${id}`);
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
    let likeId = check.data[0].id;
    if (check) {
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
    } else {
      // Add Like or w/e
      let data = {
        user_id: user_id,
        book_id: book_id,
        liked: "liked",
        created: moment().format("YYYY-MM-DD HH:mm:ss")
      };
      await axios.post(`http://localhost:4000/insert`, data);
    }
    this.componentDidMount();
  };

  borrowBook = async () => {
    let book_id = this.state.book.id;
    let user_id = parseInt(localStorage.getItem("userId"));
    let status = "requested";
    await axios.post(`http://localhost:4000/borrows/add`, {
      book_id,
      user_id,
      status
    });
  };
  buyBook = async () => {
    let book_id = this.state.book.id;
    let user_id = parseInt(localStorage.getItem("userId"));
    let status = "requested";
    await axios.post(`http://localhost:4000/orders/add`, {
      book_id,
      user_id,
      status
    });
  };

  render() {
    console.log("this.state", this.state);
    return (
      <>
        <Header />
        <SingleBookStyle>
          <Link className="backBtn" to="/catalog">
            <p>Go Back</p> <SVGInline svg={backArrow} />
          </Link>
          <Link className="editBtn" to={`/books/edit/${this.state.book.id}`}>
            <p>Edit Book</p> <SVGInline svg={pencil} />
          </Link>
          <div
            className="deleteBtn"
            onClick={() => {
              this.deleteBook();
            }}
          >
            <p>Delete Book</p> <SVGInline svg={x} />
          </div>
          <img
            src={`../books/${this.state.book.image}`}
            alt={`${this.state.book.image}${this.state.book.id}`}
          />
          <div className="bookDesc">
            <div className="desc">
              <p>Id: {this.state.book.id}</p>
              <p>Author: {this.state.book.author}</p>
              <p>Title: {this.state.book.title}</p>
              <p>Genre: {this.state.book.genre}</p>
              <p>Quote: "{this.state.book.quote}"</p>
              <div
                className={
                  this.state.book.status === 0
                    ? "availability false"
                    : "availability true"
                }
              >
                {this.state.book.status === 0 ? "Not Available!" : "Available!"}
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
                  <p>{this.state.likesCount}</p>
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
                  <p>{this.state.dislikesCount}</p>
                </div>
              </div>
              <div className="borrowed">
                {this.state.book.borrowCount === 0
                  ? "Be First To Borrow This Book!"
                  : `This Book was Borrowed ${this.state.book.borrowCount} times.`}
              </div>
            </div>
            <div className="btns">
              <button onClick={this.borrowBook} className="reserve">
                Borrow{" "}
              </button>
              <button onClick={this.buyBook} className="order">
                Buy{" "}
              </button>
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
                          <button>Cancel</button>
                          <button type="submit" disabled={isSubmitting}>
                            Submit
                          </button>
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
                    <>
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
                        commentDislikedCount={5}
                        commentLikesCount={10}
                      />
                      <div className="otherCommentsLikes">
                        <p onClick={this.otherLikes}>LIKES</p>
                        <p onClick={this.otherLikes}>DISLIKES</p>
                      </div>
                    </>
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
