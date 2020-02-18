import React, { Component } from "react";
import CommentStyle from "./style";
import { x, pencil, thumbDown, thumbUp } from "../../assets/icons";
import SVGInline from "react-svg-inline";
import { hydrate } from "react-dom";
import { Formik } from "formik";
import { store } from "react-notifications-component";
import Button from "../../components/Button";

export default class Comment extends Component {
  constructor() {
    super();
    this.state = {
      comment_id: null
    };
  }

  componentDidMount() {
    this.setState({ comment_id: this.props.id });
  }
  editComment = () => {
    this.props.editCommentFunc();
  };

  deleteComment = () => {
    this.props.deleteCommentFunc();
  };

  render() {
    return (
      <CommentStyle>
        <img className="image" src={`${this.props.image}`} />
        <div className="infoSection">
          <div className="nameDate">
            <div className="fullName">{this.props.fullName}</div>
            <div className="date">{this.props.date}</div>
            {parseInt(localStorage.getItem("userId")) === this.props.userId ? (
              <div className="icons">
                <SVGInline svg={pencil} onClick={this.editComment} />
                <SVGInline svg={x} onClick={this.deleteComment} />
              </div>
            ) : null}
          </div>
          {this.props.edit ? (
            <>
              <Formik
                initialValues={{ comment: this.props.editValue }}
                onSubmit={async (values, { setSubmitting }) => {
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
                }) => (
                  <form onSubmit={this.props.handleSubmit}>
                    <textarea
                      id="comment"
                      name="comment"
                      placeholder="Add a public comment..."
                      value={this.props.editValue}
                      onChange={this.props.handleEditChange}
                      onBlur={handleBlur}
                    ></textarea>
                    <div className="btns">
                      <Button
                        bgColor={"#3F5D88"}
                        width={"80px"}
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
                        onClick={this.props.cancelFunc}
                      ></Button>
                      <Button
                        bgColor={"#3F5D88"}
                        width={"80px"}
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
                        btnText={"Edit"}
                        type="submit"
                        disabled={isSubmitting}
                      ></Button>
                    </div>
                  </form>
                )}
              </Formik>
            </>
          ) : (
            <div className="comment">{this.props.comment}</div>
          )}
          {/* <div className="commentLikes">
            <div className="up">
              <SVGInline svg={thumbUp} />
              <p>Likes</p>
              <p>{this.props.commentLikesCount}</p>
            </div>
            <div className="down">
              <SVGInline svg={thumbDown} />
              <p>Dislikes</p>
              <p>{this.props.commentDislikedCount}</p>
            </div>
          </div> */}
        </div>
      </CommentStyle>
    );
  }
}
