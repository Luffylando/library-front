import React, { Fragment, useState } from "react";
import AddBookStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import InputValidationField from "../../../components/InputValidationField";
import TextareaValidationField from "../../../components/TextareaValidationField";
import axios from "axios";
import { Formik } from "formik";
import H2 from "../../../ui/H2";
import Button from "../../../components/Button";
import { store } from "react-notifications-component";
import AddBookSchema from "./validation";
import Select from "react-select";

const options = [
  { value: "Romance", label: "Romance" },
  { value: "History", label: "History" },
  { value: "Crime", label: "Crime" },
  { value: "Philosophy", label: "Philosophy" },
  { value: "Belatristics", label: "Belatristics" }
];

const highlightedOptions = [
  { value: true, label: "Highlighted" },
  { value: false, label: "Normal" }
];
const customStyles = {
  option: (styles, state) => ({
    ...styles,
    color: state.isSelected ? "#FFF" : styles.color,
    backgroundColor: state.isSelected ? "#3F5D88" : styles.color,
    borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
    border: "none",

    "&:hover": {
      color: "#FFF",
      backgroundColor: "#3F5D88",
      border: "none"
    },
    height: "fit-content"
  }),
  control: (styles, state) => ({
    ...styles,
    margin: "10px 0px",
    boxShadow: "none",
    borderColor: "#c4c4c4",
    "&:hover": {}
  })
};

const AddBook = () => {
  let [validate, setValidate] = useState(false);
  let [selectedOption, setSelectedOption] = useState(null);
  let [highlightOption, setHighlightOption] = useState(null);

  let [tag, setTag] = useState("");
  let [higlightTag, setHighlightTag] = useState("");

  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Chose File");
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleSelectChange = selectedOption => {
    setSelectedOption(selectedOption);
    setTag(selectedOption);
  };

  const handleHighlightChange = highlightOption => {
    setHighlightOption(highlightOption);
    setHighlightTag(highlightOption);
  };

  return (
    <Fragment>
      <Header />
      <AddBookStyle>
        <div className="leftCoverImage"></div>
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
                const { filePath, fullName } = res.data;
                setUploadedFile({ fullName, filePath });
                await axios.post("http://localhost:4000/books/add", {
                  title: values.title,
                  author: values.author,
                  genre: selectedOption.value,
                  quote: values.quote,
                  highlighted: highlightOption.value,
                  image: fullName
                });
              } else {
                await axios.post("http://localhost:4000/books/add", {
                  title: values.title,
                  author: values.author,
                  genre: selectedOption.value,
                  quote: values.quote,
                  highlighted: highlightOption.value,
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
                console.log("There was a problem with the server.");
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
          }) => (
            <form onSubmit={handleSubmit}>
              <H2>Add Book</H2>
              <div className="row">
                <div className="inputField">
                  <InputValidationField
                    label="Author"
                    type="text"
                    name="author"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.author}
                    errors={errors.author}
                    touched={touched.author}
                  />
                </div>
                <div className="inputField">
                  <InputValidationField
                    label="Title"
                    type="text"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    errors={errors.title}
                    touched={touched.title}
                  />
                </div>
              </div>
              <TextareaValidationField
                label="Quote"
                name="quote"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quote}
                errors={errors.quote}
                touched={touched.quote}
              />
              <div className="row">
                <div className="selectDiv">
                  <label>Genre</label>
                  <Select
                    label={"Genre"}
                    name="genre"
                    styles={customStyles}
                    value={selectedOption}
                    onChange={handleSelectChange}
                    options={options}
                    className="selectInput"
                    classNamePrefix="selectField"
                    placeholder="Choose Genre"
                    defaultValue=""
                    errors={errors.genre}
                    touched={touched.genre}
                  />
                </div>
                <div className="selectDiv">
                  <label>HIghlight</label>
                  <Select
                    label={"Highlight Book"}
                    name="highlight"
                    styles={customStyles}
                    value={highlightOption}
                    onChange={handleHighlightChange}
                    options={highlightedOptions}
                    className="selectInput"
                    classNamePrefix="selectField"
                    placeholder="Set Highlight"
                    defaultValue=""
                    errors={errors.genre}
                    touched={touched.genre}
                  />
                </div>
              </div>

              <div className="inputField">
                <div className="fileDiv">
                  <p>Pick Image:</p>
                  <label htmlFor="customFile">{filename}</label>
                  <div htmlFor="customFile" className="typeFile">
                    <input
                      type="file"
                      name="file"
                      className="custom-file-input"
                      id="customFile"
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
