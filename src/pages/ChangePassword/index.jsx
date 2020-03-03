import React, { Component } from "react";
import ChangePasswordStyle from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Formik } from "formik";
import axios from "axios";
import H2 from "../../ui/H2";
import ChangePasswordSchema from "./validation";
import InputValidationField from "../../components/InputValidationField";
import Button from "../../components/Button";
import { store } from "react-notifications-component";
import { connect } from "react-redux";
import { ActiveMenuItem } from "../../actions/ActiveMenuItem";

class ChangePassword extends Component {
  constructor() {
    super();
    this.state = {
      validate: false
    };
  }

  changeActiveMenu = name => {
    this.props.ActiveMenuItem(name);
  };
  render() {
    return (
      <>
        <Header />
        <ChangePasswordStyle>
          <div className="leftCoverImage"></div>
          <Formik
            initialValues={{
              oldPassword: "",
              newPassword: "",
              repeatPassword: ""
            }}
            validationSchema={this.state.validate ? ChangePasswordSchema : null}
            onSubmit={async (values, { setSubmitting }) => {
              let id = localStorage.getItem("userId");
              let data = {
                id: id,
                oldPassword: values.oldPassword,
                newPassword: values.newPassword
              };

              await axios.put(
                `http://localhost:4000/users/change-password`,
                data
              );
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
                          Password Successfully Changed!
                        </div>
                      </div>
                    </div>
                  </div>
                )
              });

              window.location.href = "/logout";
              this.changeActiveMenu("");
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
              validateForm,
              handleSubmit,
              isSubmitting
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <H2>Change Password</H2>
                <div className="inputField">
                  <InputValidationField
                    label="Old Password"
                    type="password"
                    name="oldPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.oldPassword}
                    errors={errors.oldPassword}
                    touched={touched.oldPassword}
                  />
                </div>
                <div className="inputField">
                  <InputValidationField
                    label="New Password"
                    type="password"
                    name="newPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.newPassword}
                    errors={errors.newPassword}
                    touched={touched.newPassword}
                  />
                </div>
                <div className="inputField">
                  <InputValidationField
                    label="Repeat New Password"
                    type="password"
                    name="repeatPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.repeatPassword}
                    errors={errors.repeatPassword}
                    touched={touched.repeatPassword}
                  />
                </div>
                <div className="submitBtn">
                  <Button
                    bgColor={"#3F5D88"}
                    width={"65%"}
                    padding={"15px 0px"}
                    margin={"80px 90px 20px 90px"}
                    fWeight={"600"}
                    fSize={"16px"}
                    bRadius={"50px"}
                    letterSpacing={"1px"}
                    txtColor={"#fff"}
                    hoverBg={"#fff"}
                    hoverTxt={"#3F5D88"}
                    transition={"all 0.2s"}
                    hoverBorder={"1px solid #3F5D88"}
                    btnText={"Submit"}
                    type={"submit"}
                    disabled={isSubmitting}
                    onClick={() => {
                      validateForm().then(() =>
                        this.setState({ validate: true })
                      );

                      setTimeout(() => {
                        this.setState({ validate: false });
                      }, 500);
                    }}
                  ></Button>
                </div>
              </form>
            )}
          </Formik>
        </ChangePasswordStyle>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  ActiveMenuItem: value => dispatch(ActiveMenuItem(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
