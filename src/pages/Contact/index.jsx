import React, { Component } from "react";
import ContactStyle from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InputValidationField from "../../components/InputValidationField";
import TextareaValidationField from "../../components/TextareaValidationField";
import Button from "../../components/Button";
import SVGInline from "react-svg-inline";
import { box, plane } from "../../assets/icons";
import { Formik } from "formik";
import axios from "axios";
import { store } from "react-notifications-component";
import ContactSchema from "./validation";

export default class Contact extends Component {
  state = {
    validate: false
  };
  render() {
    return (
      <>
        <Header />
        <ContactStyle>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              message: ""
            }}
            validationSchema={this.state.validate ? ContactSchema : null}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                let data = {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                  message: values.message
                };
                await axios.post(
                  "http://localhost:4000/contact/formMessage",
                  data
                );

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

                values.firstName = "";
                values.lastName = "";
                values.email = "";
                values.message = "";
              } catch (err) {
                console.log("error", err);
              }
              setTimeout(() => {
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              validateField,
              validateForm,
              handleBlur,
              handleSubmit,
              isSubmitting
              /* and other goodies */
            }) => (
              <>
                <form onSubmit={handleSubmit}>
                  <h1> Contact us </h1>
                  <div className="row">
                    <div className="inputField">
                      <InputValidationField
                        label="First Name"
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        errors={errors.firstName}
                        touched={touched.firstName}
                      />
                    </div>
                    <div className="inputField">
                      <InputValidationField
                        label="Last Name"
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        errors={errors.lastName}
                        touched={touched.lastName}
                      />
                    </div>
                  </div>
                  <InputValidationField
                    label="Email"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    errors={errors.email}
                    touched={touched.email}
                  />
                  <TextareaValidationField
                    label="Message"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    errors={errors.message}
                    touched={touched.message}
                  />
                  <div className="submitBtn">
                    <Button
                      type={"submit"}
                      onClick={() => {
                        validateForm().then(() =>
                          this.setState({ validate: true })
                        );

                        setTimeout(() => {
                          this.setState({ validate: false });
                        }, 500);
                      }}
                      btnText={"Submit"}
                      bgColor={"#F15925"}
                      txtColor={"#fff"}
                      fWeight={"500"}
                      width={"300px"}
                      margin={"50px 10px 15px 10px"}
                      letterSpacing={"1px"}
                      padding={"20px 20px"}
                      bRadius={"50px"}
                      hoverBg={"#fff"}
                      hoverBorder={"1px solid #F15925"}
                      hoverTxt={"#F15925"}
                      transition={"all 0.3s"}
                      disabled={isSubmitting}
                    />
                  </div>
                </form>
              </>
            )}
          </Formik>
          <div className="contactInfo">
            <div className="info">
              <h1>Connect with us</h1>
              <p>For support or any questions:</p>
              <p>Email us at support@example.com</p>
            </div>

            <div className="reflectorImage">
              <SVGInline className="sentMessage" svg={plane} />

              <SVGInline className="box" svg={box} />
            </div>
            <div className="bookAnimation"></div>
          </div>
        </ContactStyle>
        <Footer />
      </>
    );
  }
}
