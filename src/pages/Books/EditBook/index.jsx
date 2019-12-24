import React, { Fragment, useState, useEffect } from "react";
import EditBookStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import axios from "axios";
import { Formik } from "formik";
import H1 from "../../../ui/H1";

const options = [
  { id: "Romance", name: "Romance" },
  { id: "History", name: "History" },
  { id: "Crime", name: "Crime" },
  { id: "Philosophy", name: "Philosophy" },
  { id: "Belatristics", name: "Belatristics" }
];

const EditBook = () => {
  const [book, setBook] = useState({});
  const [count, setCount] = useState(0);
  const [title, author, genre, image] = useState("");
  const [imageName] = useState("");
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Chose File");
  const [uploadedFile, setUploadedFile] = useState({});
  let [bookInfo] = useState({});

  let id = window.location.pathname.split("/")[3];

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:4000/books/${id}`);
      setBook(result.data);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const call = async () => {
  //     try {
  //       let book = await axios.get(`http://localhost:4000/books/${id}`);

  //       bookInfo = book.data;
  //     } catch (err) {
  //       console.log("error", err);
  //     }
  //   };
  //   call();
  // });

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  return (
    <Fragment>
      <Header />
      <EditBookStyle>
        <H1>Edit Book</H1>
        <Formik
          initialValues={{ author: "", title: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 0);
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
                <label>Author</label>
                <input
                  type="text"
                  name="author"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={book.author ? book.author : values.author}
                />
                <div className="error">
                  {errors.author && touched.author && errors.author}
                </div>
              </div>
              <div className="inputDiv">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={book.title ? book.title : values.title}
                />
                <div className="error">
                  {errors.title && touched.title && errors.title}
                </div>
              </div>
              <div className="selectAndFile">
                <div className="selectDiv">
                  <label>Genre</label>
                  <select
                    name="genre"
                    value={book.genre ? book.genre : values.genre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: "block" }}
                  >
                    <option key={""} value={""} />

                    {options.map(option => (
                      <option
                        key={option.id}
                        value={option.name}
                        label={option.name}
                      >
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <div className="error">
                    {errors.genre && touched.genre && errors.genre}
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
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
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
