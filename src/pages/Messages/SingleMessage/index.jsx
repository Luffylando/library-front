import React, { Component } from "react";
import SingleMessageStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import axios from "axios";
import { Formik } from "formik";
import { store } from "react-notifications-component";
import InputValidationField from "../../../components/InputValidationField";
import TextareaValidationField from "../../../components/TextareaValidationField";
import MessageValidation from "./validation";
import Button from "../../../components/Button";

class SingleMessage extends Component {
  constructor() {
    super();
    this.state = {
      message: {},
      validate: false
    };
  }

  async componentDidMount() {
    let id = window.location.pathname.split("/")[3];
    let message = await axios.get(`http://localhost:4000/contact/${id}`);
    this.setState({ message: message.data });
  }

  render() {
    return (
      <>
        <Header />
        <SingleMessageStyle>
          <h1>Single Messages</h1>
          <p>
            From: {this.state.message.lastName} {this.state.message.firstName}
          </p>
          <p>Email: {this.state.message.email}</p>
          <p>Message: {this.state.message.message}</p>

          <h3>Answer</h3>
          <>
            <Formik
              initialValues={{ answerText: "", answerSubject: "" }}
              validationSchema={
                this.state.validate === true ? MessageValidation : null
              }
              onSubmit={async (values, { setSubmitting }) => {
                await axios.post(`http://localhost:4000/contact/email`, {
                  // mailerTo: this.state.message.email,
                  mailerTo: "ogistdipen@outlook.com",
                  mailerSubject: values.answerSubject,
                  mailerText: values.answerText
                });
                // Success Message

                store.addNotification({
                  title: "Message successfully sent!",
                  message: `message"`,
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
                            Message Successfully Sent.
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                });

                // End of Success Message
                let updateData = { answered: true };
                await axios.put(
                  `http://localhost:4000/contact/message/update/${
                    window.location.pathname.split("/")[3]
                  }`,
                  updateData
                );

                setTimeout(() => {
                  window.location.href = "/contact/messages/1/5";
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
                validateForm,
                handleSubmit,
                isSubmitting
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="inputDiv">
                    <InputValidationField
                      label="Subject"
                      type="text"
                      name="answerSubject"
                      placehodler="Subject"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.answerSubject}
                      errors={errors.answerSubject}
                      touched={touched.answerSubject}
                    />
                  </div>
                  <div className="inputDiv">
                    <TextareaValidationField
                      label="Answer Text"
                      name="answerText"
                      placehodler="Answer Text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.answerText}
                      errors={errors.answerText}
                      touched={touched.answerText}
                    />
                  </div>

                  <div className="submitBtn">
                    <Button
                      bgColor={"#F15925"}
                      width={"100px"}
                      padding={"10px 0px"}
                      margin={"5px 0px 5px 0px"}
                      fWeight={"600"}
                      fSize={"14px"}
                      bRadius={"5px"}
                      txtColor={"#fff"}
                      hoverBg={"#fff"}
                      hoverTxt={"#F15925"}
                      transition={"all 0.3s"}
                      hoverBorder={"1px solid #F15925"}
                      btnText={"Submit"}
                      type="submit"
                      onClick={() => {
                        validateForm().then(() =>
                          this.setState({ validate: true })
                        );
                        setTimeout(() => {
                          this.setState({ validate: false });
                        }, 500);
                      }}
                      disabled={isSubmitting}
                    ></Button>
                  </div>
                </form>
              )}
            </Formik>
          </>
        </SingleMessageStyle>
        <Footer />
      </>
    );
  }
}

export default SingleMessage;
