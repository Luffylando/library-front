import React, { useState } from "react";
import RegisterStyle from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InputValidationField from "../../components/InputValidationField";
import H2 from "../../ui/H2";
import Button from "../../components/Button";
import axios from "axios";
import { Formik } from "formik";
import RegisterSchema from "./validation";
import DatePicker from "react-datepicker";
import * as moment from "moment";

const Register = () => {
  let [validate, setValidate] = useState(false);
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Chose File");
  const [uploadFile, setUploadedFile] = useState({});
  const [startDate, setStartDate] = useState(new Date());

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  return (
    <>
      <Header />
      <RegisterStyle>
        <div className="leftCoverImage"></div>
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
                const { filePath, fullName } = res.data;

                setUploadedFile({ fullName, filePath });
                await axios.post("http://localhost:4000/users", {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                  gender: values.gender,
                  dob: moment(startDate).format("YYYY-MM-DD"),
                  password: values.password,
                  image: fullName
                });
              } else {
                await axios.post("http://localhost:4000/users", {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                  gender: values.gender,
                  dob: moment(startDate).format("YYYY-MM-DD"),
                  password: values.password,
                  image: ""
                });
              }
            } catch (err) {
              console.log("err", err);
              if (err.response.status === 500) {
                console.log("There was a problem with the server.");
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
          }) => (
            <form onSubmit={handleSubmit}>
              <H2>Register</H2>
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

              <div className="row">
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
                <div className="selectDiv">
                  <label>Date of Birth</label>
                  <DatePicker
                    showMonthDropdown
                    showYearDropdown
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    name="dob"
                    value={moment(startDate).format("DD-MM-YYYY")}
                  />
                </div>
              </div>
              <div className="row">
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
                <div className="inputField">
                  <InputValidationField
                    label="Repeat Password"
                    type="password"
                    name="repeatPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.repeatPassword}
                    errors={errors.repeatPassword}
                    touched={touched.repeatPassword}
                  />
                </div>
              </div>

              <div className="row">
                <div className="radioField">
                  <label className="genderLabel">Gender</label>
                  <div className="inputField">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    Male
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    Female
                  </div>
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
              <div className="submitBtn">
                <Button
                  bgColor={"#3F5D88"}
                  width={"100%"}
                  padding={"15px 0px"}
                  margin={"15px 0px"}
                  fWeight={"600"}
                  fSize={"16px"}
                  bRadius={"50px"}
                  letterSpacing={"1px"}
                  txtColor={"#fff"}
                  hoverBg={"#fff"}
                  hoverTxt={"#3F5D88"}
                  transition={"all 0.2s"}
                  hoverBorder={"1px solid #3F5D88"}
                  btnText={"Register"}
                  type={"submit"}
                  disabled={isSubmitting}
                  onClick={() => {
                    validateForm().then(() => setValidate(true));
                    setTimeout(() => {
                      setValidate(false);
                    }, 500);
                  }}
                ></Button>
              </div>
            </form>
          )}
        </Formik>
      </RegisterStyle>
      <Footer />
    </>
  );
};

export default Register;
