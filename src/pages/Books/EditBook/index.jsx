import React, { Fragment, useState, useEffect } from "react";
import EditBookStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import InputValidationField from "../../../components/InputValidationField";
import TextareaValidationField from "../../../components/TextareaValidationField";
import axios from "axios";
import { Formik } from "formik";
import Button from "../../../components/Button";
import Select from "react-select";
import H2 from "../../../ui/H2";

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

const EditBook = props => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [validate, setValidate] = useState(false);
  const initialBookState = {
    title: "",
    author: "",
    genre: "",
    image: ""
  };

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
      // border: "none",
      "&:hover": {
        // borderColor: state.isFocused ? "#D0EAE2" : "#CED4DA"
      }
    })
  };

  const [book, setBook] = useState(initialBookState);
  let [selectedOption, setSelectedOption] = useState({});
  let [highlightOption, setHighlightOption] = useState({});

  let [setTag] = useState("");
  let [setHighlightTag] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:4000/books/${window.location.pathname.split("/")[3]}`
      );
      setBook(result.data);
      setSelectedOption({ label: result.data.genre, value: result.data.genre });
      setHighlightOption(
        result.data.highlighted === 1
          ? { value: true, label: "Highlight" }
          : { value: false, label: "Normal" }
      );
    };
    fetchData();
  }, []);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const changeNow = e => {
    e.persist();
    setBook({ ...book, [e.target.name]: e.target.value });
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
      <EditBookStyle>
        <div className="leftCoverImage"></div>
        <Formik
          initialValues={{ author: "", title: "" }}
          // validationSchema={validate === true ? EditBookValidation : null}
          onSubmit={async (values, { setSubmitting }) => {
            if (file) {
              const formData = new FormData();
              formData.append("file", file);
              try {
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

                const data = {
                  author: book.author,
                  title: book.title,
                  genre: selectedOption.value,
                  image: fullName,
                  quote: book.quote,
                  highlighted: highlightOption.value
                };

                await axios
                  .put(
                    `http://localhost:4000/books/edit/${
                      window.location.pathname.split("/")[3]
                    }`,
                    data
                  )
                  .then(result => {
                    props.history.push(
                      "/books/" + window.location.pathname.split("/")[3]
                    );
                  })
                  .catch(error => console.log("error", error));

                setTimeout(() => {
                  setSubmitting(false);
                }, 0);
              } catch (error) {
                console.log("error", error);
              }
            } else {
              try {
                const data = {
                  author: book.author,
                  title: book.title,
                  genre: selectedOption.value,
                  image: book.image,
                  quote: book.quote,
                  highlighted: highlightOption.value
                };

                await axios
                  .put(
                    `http://localhost:4000/books/edit/${
                      window.location.pathname.split("/")[3]
                    }`,
                    data
                  )
                  .then(result => {
                    props.history.push(
                      "/books/" + window.location.pathname.split("/")[3]
                    );
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
            validateForm,
            handleBlur,
            handleSubmit,
            isSubmitting
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <H2>Edit Book</H2>

              <div className="row">
                <div className="inputField">
                  <InputValidationField
                    label="Author"
                    type="text"
                    name="author"
                    onChange={changeNow}
                    onBlur={handleBlur}
                    value={values.author ? values.author : book.author}
                    errors={errors.author}
                    touched={touched.author}
                  />
                </div>
                <div className="inputField">
                  <InputValidationField
                    label="Title"
                    type="text"
                    name="title"
                    onChange={changeNow}
                    onBlur={handleBlur}
                    value={values.title ? values.title : book.title}
                    errors={errors.title}
                    touched={touched.title}
                  />
                </div>
              </div>
              <TextareaValidationField
                label="Quote"
                name="quote"
                placehodler="Quote"
                onChange={changeNow}
                onBlur={handleBlur}
                value={values.quote ? values.quote : book.quote}
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
                  <label>Highlight</label>
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

              <div className="row">
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
                        placeholder="Upload an Image"
                        onChange={onChange}
                      />
                      <div className="error">
                        {errors.image && touched.image && errors.image}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="editImage">
                  <label>Current Image:</label>
                  <img
                    className="chosenImg"
                    alt={`${book.image}${book.id}`}
                    src={book.image ? `../../../books/${book.image}` : null}
                  ></img>
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
                  transition={"all 0.3s"}
                  hoverBorder={"1px solid #3F5D88"}
                  btnText={"Edit Book"}
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
      </EditBookStyle>
      <Footer />
    </Fragment>
  );
};
export default EditBook;
