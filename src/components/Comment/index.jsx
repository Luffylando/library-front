import React, { Component } from "react";
import CommentStyle from "./style";
import { x, pencil } from "../../assets/icons";
import SVGInline from "react-svg-inline";
import { hydrate } from "react-dom";
import { Formik } from "formik";
export default class Comment extends Component {
  constructor() {
    super();
    this.state = {};
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
                  /* and other goodies */
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
                    <div className="btnSection">
                      <button onClick={this.props.cancelFunc}>Cancel</button>
                      <button type="submit" disabled={isSubmitting}>
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </>
          ) : (
            <div className="comment">{this.props.comment}</div>
          )}
        </div>
      </CommentStyle>
    );
  }
}
