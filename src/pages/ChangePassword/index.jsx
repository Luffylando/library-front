import React, { Component } from "react";
import ChangePasswordStyle from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Formik } from "formik";
import axios from "axios";

class ChangePassword extends Component {
  render() {
    return (
      <>
        <Header />

        <ChangePasswordStyle>
          <Formik
            initialValues={{
              oldPassword: "",
              newPassword: "",
              repeatPassword: ""
            }}
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

              window.location.href = "/logout";
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
              handleBlur,
              handleSubmit,
              isSubmitting
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="labelForm">Change Password</div>

                <div className="fields">
                  <div className="inputRow">
                    <input
                      type="password"
                      name="oldPassword"
                      id="oldPassword"
                      placeholder="Old Password:"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.oldPassword}
                    />
                  </div>
                  <div className="inputRow">
                    <input
                      type="password"
                      name="newPassword"
                      placeholder="New Password:"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.newPassword}
                    />
                  </div>
                  <div className="inputRow">
                    <input
                      type="password"
                      name="repeatPassword"
                      placeholder="Repeat New Pasword:"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.repeatPassword}
                    />
                  </div>
                </div>
                <div className="regBtn">
                  <button className="btn">Submit</button>
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

export default ChangePassword;
