import React, { Component } from "react";
import LoginStyle from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import { Formik } from "formik";
import { store } from "react-notifications-component";
import LoginSchema from "./validation";
import InputValidationField from "../../components/InputValidationField";
import H2 from "../../ui/H2";
import Button from "../../components/Button";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMsg: "",
      hidden: true,
      validate: false
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
          <div className="leftCoverImage"></div>

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
            }) => (
              <>
                <form onSubmit={handleSubmit}>
                  <H2>Login</H2>
                  <div className="inputField">
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
                  </div>
                  <div className="inputField">
                    <InputValidationField
                      label="Password"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      errors={errors.password}
                      touched={touched.password}
                    />
                  </div>
                  <Button
                    bgColor={"#3F5D88"}
                    width={"65%"}
                    padding={"15px 0px"}
                    margin={"50px 100px 20px 100px"}
                    fWeight={"600"}
                    fSize={"16px"}
                    bRadius={"50px"}
                    letterSpacing={"1px"}
                    txtColor={"#fff"}
                    hoverBg={"#fff"}
                    hoverTxt={"#3F5D88"}
                    transition={"all 0.2s"}
                    hoverBorder={"1px solid #3F5D88"}
                    btnText={"Login"}
                    type={"submit"}
                    disabled={isSubmitting}
                    onClick={() => {
                      validateForm().then(() =>
                        this.setState({ validate: true })
                      );

                      setTimeout(() => {
                        this.setState({ validate: false });
                      }, 500);
                      this.setState({ errorMsg: "" });
                      setTimeout(() => {
                        this.setState({ errorMsg: "" });
                      }, 7000);
                    }}
                  ></Button>
                  {this.state.errorMsg ? (
                    <div className="errorMsg">{this.state.errorMsg}</div>
                  ) : null}
                </form>
              </>
            )}
          </Formik>
        </LoginStyle>
        <Footer />
      </>
    );
  }
}
