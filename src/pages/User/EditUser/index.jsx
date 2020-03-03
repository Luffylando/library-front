import React, { Fragment, useState, useEffect } from "react";
import EditUserStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import axios from "axios";
import { Formik } from "formik";
import H2 from "../../../ui/H2";
import * as moment from "moment";
import InputValidationField from "../../../components/InputValidationField";
import DatePicker from "react-datepicker";
import Button from "../../../components/Button";

const EditUser = props => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Chose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [validate, setValidate] = useState(false);

  const initialEventState = {
    firstName: "",
    lastName: "",
    dob: "",
    image: ""
  };

  const [user, setUser] = useState(initialEventState);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:4000/users/${window.location.pathname.split("/")[3]}`
      );
      setUser(result.data);
      setStartDate(result.data.dob);
    };
    fetchData();
  }, []);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const changeNow = e => {
    e.persist();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <Header />
      <EditUserStyle>
        <div className="leftCoverImage"></div>
        <Formik
          initialValues={{ firstName: "", lastName: "", dob: "", image: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            if (file) {
              const formData = new FormData();
              formData.append("file", file);
              try {
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
                const data = {
                  firstName: user.firstName,
                  lastName: user.lastName,
                  gender: user.gender,
                  email: user.email,
                  dob: moment(startDate).format("YYYY-MM-DD"),
                  image: fullName
                };

                await axios.put(
                  `http://localhost:4000/users/edit/${
                    window.location.pathname.split("/")[3]
                  }`,
                  data
                );
                localStorage.removeItem("userFirstName");
                localStorage.removeItem("userLastName");
                localStorage.setItem("userFirstName", user.firstName);
                localStorage.setItem("userLastName", user.lastName);
                window.location.href = "/";
              } catch (err) {
                console.log("error", err);
              }
            } else {
              try {
                const data = {
                  firstName: user.firstName,
                  lastName: user.lastName,
                  gender: user.gender,
                  email: user.email,
                  dob: moment(startDate).format("YYYY-MM-DD"),
                  image: user.image
                };

                await axios
                  .put(
                    `http://localhost:4000/users/edit/${
                      window.location.pathname.split("/")[3]
                    }`,
                    data
                  )
                  .then(result => {
                    props.history.push("/home");
                  })
                  .catch(error => console.log("error", error));

                setTimeout(() => {
                  setSubmitting(false);
                }, 0);
              } catch (error) {
                console.log("error", error);
              }
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            validateForm,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <H2>Edit User</H2>
              <div className="row">
                <div className="inputField">
                  <InputValidationField
                    label="First Name"
                    type="text"
                    name="firstName"
                    onChange={changeNow}
                    onBlur={handleBlur}
                    value={values.firstName ? values.firstName : user.firstName}
                    errors={errors.firstName}
                    touched={touched.firstName}
                  />
                </div>
                <div className="inputField">
                  <InputValidationField
                    label="Last Name"
                    type="text"
                    name="lastName"
                    onChange={changeNow}
                    onBlur={handleBlur}
                    value={values.lastName ? values.lastName : user.lastName}
                    errors={errors.lastName}
                    touched={touched.lastName}
                  />
                </div>
              </div>

              <div className="rowSelect">
                <div className="selectDiv">
                  <label>Date of Birth</label>
                  <DatePicker
                    showMonthDropdown
                    showYearDropdown
                    onChange={date => setStartDate(date)}
                    name="dob"
                    value={
                      startDate
                        ? moment(startDate).format("DD-MM-YYYY")
                        : moment(user.dob).format("DD-MM-YYYY")
                    }
                  />
                </div>
              </div>
              <div className="rowSelect">
                <div className="inputField">
                  <div className="fileDiv">
                    <p>Pick New User Image:</p>

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
                {user.image ? (
                  <div className="editImage">
                    <label>Current Image:</label>
                    <img
                      className="chosenImg"
                      alt={`${user.image}${user.id}`}
                      src={user.image ? `../../../team/${user.image}` : null}
                    ></img>
                  </div>
                ) : null}
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
                  transition={"all 0.3s"}
                  hoverBorder={"1px solid #3F5D88"}
                  btnText={"Edit"}
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
      </EditUserStyle>
      <Footer />
    </Fragment>
  );
};
export default EditUser;
