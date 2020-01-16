import React, { Component } from "react";
import RegisterStyle from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { eye, cEye } from "../../assets/icons";
import SVGInline from "react-svg-inline";
import axios from "axios";
import { Formik } from "formik";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMsg: "",
      hidden: true
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  triggerEye = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  render() {
    return (
      <>
        <Header />
        <RegisterStyle>
          <div className="loginBox">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                gender: "",
                dob: "",
                password: "",
                repeatPassword: ""
              }}
              onSubmit={async (values, { setSubmitting }) => {
                let data = {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                  gender: values.gender,
                  dob: values.dob,
                  password: values.password
                };
                await axios.post(`http://localhost:4000/users`, data);

                window.location.href = "/login";
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
                  <div className="labelForm">Register</div>

                  <div className="fields">
                    <div className="inputRow">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name:"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name:"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                      />
                    </div>

                    <div className="inputRow">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email:"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                    </div>

                    <div className="inputRow">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />{" "}
                      Male
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />{" "}
                      Female
                    </div>

                    <div className="inputRow">
                      <input
                        type="date"
                        name="dob"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.dob}
                      />
                    </div>

                    <div className="inputRow">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                    </div>

                    <div className="inputRow">
                      <input
                        type="password"
                        name="repeatPassword"
                        placeholder="Repeat Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.repeatPassword}
                      />
                    </div>
                  </div>
                  <div className="regBtn">
                    <Link to="/login">Login</Link>
                    <button className="btn">Register</button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </RegisterStyle>
        <Footer />
      </>
    );
  }
}
