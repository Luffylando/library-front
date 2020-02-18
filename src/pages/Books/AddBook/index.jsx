import React, { Fragment, useState } from "react";
import AddBookStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import InputValidationField from "../../../components/InputValidationField";
import TextareaValidationField from "../../../components/TextareaValidationField";
import SelectValidationField from "../../../components/SelectValidationField";
import axios from "axios";
import { Formik } from "formik";
import H1 from "../../../ui/H1";
import { store } from "react-notifications-component";
import AddBookSchema from "./validation";
import Button from "../../../components/Button";

const options = [
  { id: "Romance", name: "Romance" },
  { id: "History", name: "History" },
  { id: "Crime", name: "Crime" },
  { id: "Philosophy", name: "Philosophy" },
  { id: "Belatristics", name: "Belatristics" }
];

const AddBook = () => {
  const [imageName] = useState("");
  let [genre] = useState("");
  let [validate, setValidate] = useState(false);

  let [quote] = useState("");
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Chose File");
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  return (
    <Fragment>
      <Header />
      <AddBookStyle>
        <H1>Add New Book</H1>
        <Formik
          initialValues={{ author: "", title: "", quote: "" }}
          validationSchema={validate === true ? AddBookSchema : null}
          onSubmit={async (values, { setSubmitting }) => {
            const formData = new FormData();
            formData.append("file", file);
            try {
              if (file) {
                const res = await axios.post(
                  "http://localhost:4000/books/imgUpload",
                  formData,
                  {
                    headers: {
                      "Contant-Type": "multipart/form-data"
                    }
                  }
                );
                const { fileName, filePath, type, fullName } = res.data;
                setUploadedFile({ fullName, filePath });
                await axios.post("http://localhost:4000/books/add", {
                  title: values.title,
                  author: values.author,
                  genre: values.genre,
                  quote: values.quote,
                  image: fullName
                });
              } else {
                await axios.post("http://localhost:4000/books/add", {
                  title: values.title,
                  author: values.author,
                  genre: values.genre,
                  quote: values.quote,
                  image: ""
                });
              }

              store.addNotification({
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
                        <div className="message">Book Successfully Added!</div>
                      </div>
                    </div>
                  </div>
                )
              });
            } catch (err) {
              console.log("err", err);
              if (err.response.status === 500) {
                console.log("THERE was a problem with the server.");
              } else {
                console.log(err.response.data.msg);
              }
            }

            setTimeout(() => {
              window.location.href = "/catalog";
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
            <form onSubmit={handleSubmit}>
              <div className="inputDiv">
                <InputValidationField
                  label="Author"
                  type="text"
                  name="author"
                  placehodler="Author"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.author}
                  errors={errors.author}
                  touched={touched.author}
                />
              </div>
              <div className="inputDiv">
                <div className="inputDiv">
                  <InputValidationField
                    label="Title"
                    type="text"
                    name="title"
                    placehodler="Title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    errors={errors.title}
                    touched={touched.title}
                  />
                </div>
              </div>
              <div className="textareaDiv">
                <TextareaValidationField
                  label="Quote"
                  name="quote"
                  placehodler="Quote"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.quote}
                  errors={errors.quote}
                  touched={touched.quote}
                />
              </div>
              <div className="selectAndFile">
                <div className="selectDiv">
                  <SelectValidationField
                    label="Genre"
                    name="genre"
                    placehodler="Genre"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.genre}
                    errors={errors.genre}
                    touched={touched.genre}
                    options={options}
                  />
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
                  padding={"5px 0px"}
                  margin={"10px 0px"}
                  fWeight={"600"}
                  fSize={"16px"}
                  bRadius={"5px"}
                  txtColor={"#fff"}
                  hoverBg={"#fff"}
                  hoverTxt={"#3F5D88"}
                  transition={"all 0.3s"}
                  hoverBorder={"1px solid #3F5D88"}
                  btnText={"Add Book"}
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
      </AddBookStyle>
      <Footer />
    </Fragment>
  );
};

export default AddBook;
