import React, { Fragment, useState, useEffect } from "react";
import EditUserStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import axios, { AxiosResponse } from "axios";
import { Formik } from "formik";
import H1 from "../../../ui/H1";
import * as moment from "moment";

const options = [
  { id: "female", name: "Female" },
  { id: "male", name: "Male" }
];

const EditUser = props => {
  const [user, setUser] = useState("");
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Chose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const apiUrl =
    "http://localhost:4000/users/" + window.location.pathname.split("/")[3];

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(apiUrl);
      setUser(result.data);
    };
    fetchData();
  }, []);

  const changeNow = e => {
    e.persist();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const changeImage = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  return (
    <Fragment>
      <Header />
      <EditUserStyle>
        <H1>Edit user</H1>
        <Formik
          initialValues={{ firstName: "", lastName: "" }}
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

                console.log("fullname", fullName);

                setUploadedFile({ fullName, filePath });
                const data = {
                  firstName: user.firstName,
                  lastName: user.lastName,
                  gender: user.gender,
                  email: user.email,
                  dob: user.dob.slice(0, 10),
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
                  dob: user.dob.slice(0, 10),
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
            isSubmitting
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="inputDiv">
                <div className="labelInput">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    onChange={changeNow}
                    onBlur={handleBlur}
                    value={user.firstName ? user.firstName : values.firstName}
                  />
                </div>
                <div className="error">
                  {errors.firstName && touched.firstName && errors.firstName}
                </div>
              </div>
              <div className="inputDiv">
                <div className="labelInput">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    onChange={changeNow}
                    onBlur={handleBlur}
                    value={user.lastName ? user.lastName : values.lastName}
                  />
                </div>
                <div className="error">
                  {errors.lastName && touched.lastName && errors.lastName}
                </div>
              </div>
              <div className="inputDiv">
                <div className="labelInput">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    onChange={changeNow}
                    onBlur={handleBlur}
                    value={
                      user.dob
                        ? moment(user.dob).format("YYYY-MM-DD")
                        : values.dob
                    }
                  />
                </div>
                <div className="error">
                  {errors.dob && touched.dob && errors.dob}
                </div>
              </div>
              <div className="inputDiv">
                <div className="labelInput">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    value={user.email ? user.email : values.email}
                    onChange={changeNow}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="error">
                  {errors.email && touched.email && errors.email}
                </div>
              </div>
              <div className="selectAndFile">
                <div className="fileDiv">
                  <p>Pick New Image:</p>

                  <label htmlFor="customFile">{filename}</label>
                  <div htmlFor="customFile" className="typeFile">
                    <input
                      type="file"
                      name="file"
                      className="custom-file-input"
                      id="customFile"
                      placeholder="Upload an Image"
                      onChange={changeImage}
                    />
                    <div className="error">
                      {errors.image && touched.image && errors.image}
                    </div>
                  </div>
                </div>
                <div className="editImage">
                  <label>Current Image:</label>
                  <img
                    className="chosenImg"
                    alt={`${user.image}${user.id}`}
                    src={user.image ? `/team/${user.image}` : null}
                  ></img>
                </div>
              </div>
              <div className="submitBtn">
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
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
