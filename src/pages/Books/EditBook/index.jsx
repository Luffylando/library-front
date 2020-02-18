import React, { Fragment, useState, useEffect } from "react";
import EditBookStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import InputValidationField from "../../../components/InputValidationField";
import TextareaValidationField from "../../../components/TextareaValidationField";
import SelectValidationField from "../../../components/SelectValidationField";
import axios, { AxiosResponse } from "axios";
import { Formik } from "formik";
import H1 from "../../../ui/H1";
import EditBookValidation from "./validation";
import Button from "../../../components/Button";

const options = [
  { id: "Romance", name: "Romance" },
  { id: "History", name: "History" },
  { id: "Crime", name: "Crime" },
  { id: "Philosophy", name: "Philosophy" },
  { id: "Belatristics", name: "Belatristics" }
];

const EditBook = props => {
  const apiUrl =
    "http://localhost:4000/books/" + window.location.pathname.split("/")[3];
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Chose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [validate, setValidate] = useState(false);
  const initialBookState = {
    title: "",
    author: "",
    genre: "",
    image: ""
  };

  const [book, setBook] = useState(initialBookState);

  let id = window.location.pathname.split("/")[3];

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(apiUrl);
      setBook(result.data);
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

  return (
    <Fragment>
      <Header />
      <EditBookStyle>
        <H1>Edit Book</H1>
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
                  genre: book.genre,
                  image: fullName
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
                  genre: book.genre,
                  image: book.image
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
              <div className="inputDiv">
                <InputValidationField
                  label="Author"
                  type="text"
                  name="author"
                  placehodler="Author"
                  onChange={changeNow}
                  value={values.author ? values.author : book.author}
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
                    onChange={changeNow}
                    onBlur={handleBlur}
                    value={values.title ? values.title : book.title}
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
                  onChange={changeNow}
                  onBlur={handleBlur}
                  value={values.quote ? values.quote : book.quote}
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
                    onChange={changeNow}
                    onBlur={handleBlur}
                    value={values.genre ? values.genre : book.genre}
                    errors={errors.genre}
                    touched={touched.genre}
                    options={options}
                  />
                </div>

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
                      onChange={onChange}
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
                    alt={`${book.image}${book.id}`}
                    src={book.image ? `../../../books/${book.image}` : null}
                  ></img>
                </div>
              </div>
              <div className="submitBtn">
                <Button
                  bgColor={"#3F5D88"}
                  width={"100%"}
                  padding={"5px 0px"}
                  margin={"100px 0px"}
                  fWeight={"600"}
                  fSize={"16px"}
                  bRadius={"5px"}
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
                {/* <button
                  type="submit"
                  onClick={() => {
                    validateForm().then(() => setValidate(true));
                    setTimeout(() => {
                      setValidate(false);
                    }, 500);
                  }}
                  disabled={isSubmitting}
                >
                  Submit
                </button> */}
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
