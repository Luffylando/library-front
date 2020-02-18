import React, { Component, useState } from "react";
import RegisterStyle from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InputValidationField from "../../components/InputValidationField";

import { Link } from "react-router-dom";
import { eye, cEye } from "../../assets/icons";
import SVGInline from "react-svg-inline";
import axios from "axios";
import { Formik } from "formik";
import RegisterSchema from "./validation";

const Register = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [errorMsg, setErrorMsg] = useState("");
  let [hidden, setHidden] = useState(true);
  let [validate, setValidate] = useState(false);
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Chose File");
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  const triggerEye = () => {
    this.setState({ hidden: !this.state.hidden });
  };

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
              image: "",
              repeatPassword: ""
            }}
            validationSchema={validate === true ? RegisterSchema : null}
            onSubmit={async (values, { setSubmitting }) => {
              const formData = new FormData();
              formData.append("file", file);
              try {
                if (file) {
                  const res = await axios.post(
                    "http://localhost:4000/users/imgUpload",
                    formData,
                    {
                      headers: {
                        "Contant-Type": "multipart/form-data"
                      }
                    }
                  );
                  const { fileName, filePath, type, fullName } = res.data;

                  console.log("file", file);
                  setUploadedFile({ fullName, filePath });
                  await axios.post("http://localhost:4000/users", {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    gender: values.gender,
                    dob: values.dob,
                    password: values.password,
                    image: fullName
                  });
                } else {
                  await axios.post("http://localhost:4000/users", {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    gender: values.gender,
                    dob: values.dob,
                    password: values.password,
                    image: ""
                  });
                }
              } catch (err) {
                console.log("err", err);
                if (err.response.status === 500) {
                  console.log("THERE was a problem with the server.");
                } else {
                  console.log(err.response.data.msg);
                }
              }
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
              isSubmitting,
              validateForm
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="labelForm">Register</div>

                <div className="fields">
                  <div className="inputRow">
                    <InputValidationField
                      label="First Name"
                      type="text"
                      name="firstName"
                      placehodler="First Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      errors={errors.firstName}
                      touched={touched.firstName}
                    />
                    <InputValidationField
                      label="Last Name"
                      type="text"
                      name="lastName"
                      placehodler="Last Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      errors={errors.lastName}
                      touched={touched.lastName}
                    />
                  </div>

                  <div className="inputRow">
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

                    <InputValidationField
                      label="Date of Birth"
                      type="date"
                      name="dob"
                      placehodler="Date of Birth"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.dob}
                      errors={errors.dob}
                      touched={touched.dob}
                    />
                  </div>
                  <div className="inputRow">
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

                    <InputValidationField
                      label="Repeat Password"
                      type="password"
                      name="repeatPassword"
                      placehodler="Repeat Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.repeatPassword}
                      errors={errors.repeatPassword}
                      touched={touched.repeatPassword}
                    />
                  </div>
                  <div className="inputRow">
                    <div className="radioRow">
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
                    <div className="fileDiv">
                      <p>Pick Image:</p>
                      <label htmlFor="customFile">{filename}</label>
                      <div htmlFor="customFile" className="typeFile">
                        <input
                          type="file"
                          name="file"
                          className="custom-file-input"
                          id="customFile"
                          placeholder="Upload an Image"
                          onChange={onChange}
                        />
                        <div className="error">
                          {errors.image && touched.image && errors.image}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="regBtn">
                  <Link to="/login">Login</Link>
                  <button
                    className="btn"
                    onClick={() => {
                      validateForm().then(() => setValidate(true));

                      setTimeout(() => {
                        setValidate(false);
                      }, 500);
                    }}
                    disabled={isSubmitting}
                  >
                    Register
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </RegisterStyle>
      <Footer />
    </>
  );
};

export default Register;
