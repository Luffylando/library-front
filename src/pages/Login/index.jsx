import React, { Component } from "react";
import LoginStyle from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { eye, cEye } from "../../assets/icons";
import SVGInline from "react-svg-inline";
import axios from "axios";
import { Form, Input } from "@rocketseat/unform";
import { Formik } from "formik";
import { store } from "react-notifications-component";
import LoginSchema from "./validation";
import InputValidationField from "../../components/InputValidationField";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMsg: "",
      hidden: true
    };
  }

  // triggerEye = () => {
  //   this.setState({ hidden: !this.state.hidden });
  // };

  render() {
    return (
      <>
        <Header />
        <LoginStyle>
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validationSchema={this.state.validate ? LoginSchema : null}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                let data = {
                  email: values.email,
                  password: values.password
                };
                let login = await axios.post(
                  `http://localhost:4000/users/login`,
                  {
                    email: data.email,
                    password: data.password
                  }
                );

                if (login.data.name === "AccountNotVerified") {
                  this.setState({
                    errorMsg:
                      "Account is not verifyied. Please check you'r email and try again later."
                  });
                } else {
                  localStorage.setItem("loginToken", login.data.token);
                  localStorage.setItem("userId", login.data.userId);
                  localStorage.setItem("userRole", login.data.userRole);
                  localStorage.setItem(
                    "userFirstName",
                    login.data.userFirstName
                  );
                  localStorage.setItem("userLastName", login.data.userLastName);

                  // Success Message

                  store.addNotification({
                    title: "Logged in Successfully!",
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
                              Logged in Successfully!
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  });

                  // End of Success Message

                  window.location.href = "/";
                }
              } catch (err) {
                this.setState({ password: "" });
                if (err.message !== "") {
                  this.setState({
                    errorMsg: "Login Error. Please try again."
                  });
                }
              }

              values.email = "";
              values.password = "";
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
              validateForm,
              handleBlur,
              handleSubmit,
              isSubmitting
              /* and other goodies */
            }) => (
              <>
                <div className="loginBox">
                  <h1>
                    Login<span className="borderBottom"></span>
                  </h1>
                  <Form onSubmit={handleSubmit}>
                    <div className="inputBox">
                      <InputValidationField
                        label="Email"
                        type="text"
                        name="email"
                        placehodler="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        errors={errors.email}
                        touched={touched.email}
                      />
                      <div className="divInput">
                        <InputValidationField
                          label="Password"
                          type="password"
                          name="password"
                          placehodler="Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          errors={errors.password}
                          touched={touched.password}
                        />
                        {/* {this.state.password.length !== 0 ? (
                          <SVGInline
                            onClick={this.triggerEye}
                            svg={this.state.hidden ? cEye : eye}
                            title={"Hold to see password"}
                          />
                        ) : null} */}
                      </div>
                    </div>
                    <div className="btnArea">
                      {this.state.errorMsg ? (
                        <p className="errorMsg">{this.state.errorMsg}</p>
                      ) : null}
                      <input
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
                        value="Login"
                      />
                    </div>
                  </Form>
                </div>
              </>
            )}
          </Formik>
        </LoginStyle>
        <Footer />
      </>
    );
  }
}
